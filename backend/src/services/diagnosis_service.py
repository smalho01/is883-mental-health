from ..schemas.request_models import UserData
from ..config import DEVICE
from ..models.model_loader import ModelManager

def generate_diagnosis(user_data: UserData) -> str:
    model_manager = ModelManager()
    models = model_manager.get_models()
    
    diagnosis_tokenizer = models['diagnosis_tokenizer']
    diagnosis_model = models['diagnosis_model']

    diagnosis_prompt = f"""
        {user_data.summary},
    """

    # Prepare the input for the diagnosis model
    inputs = diagnosis_tokenizer(
        diagnosis_prompt, 
        return_tensors="pt", 
        max_length=1024, 
        truncation=True
    ).to(DEVICE)
    
    # Generate diagnosis
    outputs = diagnosis_model.generate(
        inputs.input_ids, 
        max_length=512, 
        num_return_sequences=1, 
        no_repeat_ngram_size=2
    )
    
    # Decode the generated diagnosis
    diagnosis = diagnosis_tokenizer.decode(outputs[0], skip_special_tokens=True)
    
    return diagnosis