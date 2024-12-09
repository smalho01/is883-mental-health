from fastapi import APIRouter, HTTPException
from ..schemas.request_models import UserData, User, UserCreateRequest
import uuid

router = APIRouter()

# User data state management
userData = {}


@router.post("/user/create", response_model=UserData)
async def create_user(user: UserCreateRequest):
    # Instantiate UUID
    userId = str(uuid.uuid4())

    if user and user.name and user.emotion and user.pronouns:    
        userData[userId] = UserData(
            id = userId,
            summary = "",
            diagnosis = "",
            emotion = user.emotion,
            name = user.name,
            pronouns = user.pronouns,
            last_summary_index = 0,
            conversation = [{
                "role": "assistant",
                "content": f"Hi {user.name}, how are you feeling today?"
            }]
        )
        return userData[userId]
    else:
        raise HTTPException(status_code=422, detail=f"{user} could not be created")

@router.delete("/user", response_model=dict)
async def reset_conversation(user: User):
    if user.id in userData:
        del userData[user.id]
        return {"status": f"Conversation {user.id} reset successfully"}
    else:
        raise HTTPException(status_code=404, detail=f"{user.id} not found")