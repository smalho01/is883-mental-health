from fastapi import APIRouter, HTTPException
from ..schemas.request_models import NotesResponse, User
from ..routes.user import userData
from ..services.summary_service import generate_conversation_summary

router = APIRouter()

@router.get("/notes/{user_id}", response_model=NotesResponse)
async def patient_notes_endpoint(user_id: str):
    try:
        if user_id not in userData:
            raise HTTPException(status_code=404, detail="User not found")
        
        generate_conversation_summary(userData[user_id])
        return {
            "name": userData[user_id].name,
            "pronouns": userData[user_id].pronouns,
            "emotion": userData[user_id].emotion,
            "summary": userData[user_id].summary,
            "diagnosis": userData[user_id].diagnosis,
            "conversation": userData[user_id].conversation
        }
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))