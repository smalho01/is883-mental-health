from fastapi import APIRouter, HTTPException
from ..models.model_loader import ModelManager
from ..schemas.request_models import ChatRequest, ChatResponse, ConversationResponse, UserData
from ..services.summary_service import generate_conversation_summary
from ..routes.user import userData
from ..utils.token_counts import count_llama_tokens
from ..utils.crisis import CrisisResourceManager  # New import

router = APIRouter()

@router.get("/chat/{user_id}", response_model=ConversationResponse)
async def get_chat_endpoint(user_id: str):
        print(user_id)
    # Get or create conversation history for this user
        if user_id not in userData:
            raise HTTPException(status_code=404, detail=f"{user_id} not found")
        else:
            return {"conversation": userData[user_id].conversation}


@router.post("/chat", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest):
    # try:
        model_manager = ModelManager()
        models = model_manager.get_models()
        therapy_chatbot = models['therapy_chatbot']
        chatbot_tokenizer = models['chatbot_tokenizer']

        system_message = {
            "role": "system",
            "content": f"You are a certified therapist speaking with a patient named {userData[request.user_id].name} " +
            f"with pronouns {userData[request.user_id].name}. They are currenlty feeling {userData[request.user_id].name}"
            "Your job is to help them understand and cope with their mental health issues. "
            "Respond compassionately and conversationally as a human therapist would. "
            "Use the conversation summary as context when needed."
        }

        # Get or create conversation history for this user
        if request.user_id not in userData:
            raise HTTPException(status_code=404, detail=f"{request.user_id} not found")
        
        if request.message:
            new_user_message = {
                "role": "user",
                "content": request.message
            }

            # CRISIS DETECTION - First layer of safety
            crisis_detection = CrisisResourceManager.detect_crisis(request.message)
            if crisis_detection:
                crisis_response = CrisisResourceManager.get_crisis_response(crisis_detection)
                
                userData[request.user_id].conversation.append(new_user_message)

                userData[request.user_id].conversation.append({
                    "role": "assistant", 
                    "content": crisis_response
                })
                return {"response": crisis_response}

            system_summary_message = {
                "role": "system",
                "content": f"The summary of the previous conversation no longer in the current context is as follows: {userData[request.user_id].summary}"
            }    

            # Prepare context for chat generation
            context_messages = [system_message, system_summary_message]
            context_messages.extend(userData[request.user_id].conversation[userData[request.user_id].last_summary_index + 1:])

            context_messages = [msg for msg in context_messages if "🚨 Crisis Support Alert 🚨" not in msg.get('content', '')]

            new_user_message = {
                "role": "user",
                "content": request.message
            }

            context_messages.append(new_user_message)

            if count_llama_tokens(context_messages, chatbot_tokenizer) > 850:
                generate_conversation_summary(userData[request.user_id])

                system_summary_message = {
                    "role": "system",
                    "content": f"The summary of the previous conversation no longer in the current context is as follows: {userData[request.user_id].summary}"
                }    

                # Prepare context for chat generation
                context_messages = [system_message, system_summary_message]
                context_messages.extend(userData[request.user_id].conversation[userData[request.user_id].last_summary_index + 1:])

                context_messages.append(new_user_message)

            # Add user message to conversation history
            userData[request.user_id].conversation.append(new_user_message)

            # Create chat completion
            response = therapy_chatbot.create_chat_completion(
                messages=context_messages
            )
            
            # Extract model's response
            model_response = response['choices'][0]['message']['content']
            
            # Add model response to conversation history
            userData[request.user_id].conversation.append({
                "role": "assistant", 
                "content": model_response
            })
        
            return {"response": model_response}
    
    # except Exception as e:
    #     print(e)
        # raise HTTPException(status_code=500, detail=str(e))