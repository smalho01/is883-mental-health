from ..config import DEVICE
from ..models.model_loader import ModelManager
from ..services.diagnosis_service import generate_diagnosis

def extract_user_messages(conversation):
    return [
        msg for msg in conversation 
        if msg.get('role') == 'user'
    ]

def generate_conversation_summary(user_data):
    model_manager = ModelManager()
    models = model_manager.get_models()

    summary_tokenizer = models['summary_tokenizer']
    summary_model = models['summary_model']

    # Extract only user messages for summary
    unsummarized_messages = user_data.conversation[user_data.last_summary_index + 1:]
    user_messages = extract_user_messages(unsummarized_messages)
    
    # Create user message summary prompt
    user_messages_text = ' '.join([
        msg.get('content', '') for msg in user_messages
    ])

    # Prepare summary prompt
    summary_prompt = f"""
        {user_data.name},

        summary: {user_data.summary},
        input: {user_messages_text}
    """
    inputs = summary_tokenizer(
        summary_prompt, 
        return_tensors="pt", 
        max_length=1024, 
        truncation=True
    ).to(DEVICE)

    outputs = summary_model.generate(
        inputs.input_ids, 
        max_length=512, 
        num_return_sequences=1, 
        no_repeat_ngram_size=2
    )

    summary = summary_tokenizer.decode(outputs[0], skip_special_tokens=True)
    
    # Update summary and generate diagnosis
    user_data.summary = summary
    user_data.last_summary_index = len(user_data.conversation) - 1
    user_data.diagnosis = generate_diagnosis(user_data)

    return summary