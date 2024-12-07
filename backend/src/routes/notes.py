from fastapi import APIRouter, HTTPException
from ..schemas.request_models import NotesResponse, User
from ..routes.user import userData
from ..services.summary_service import generate_conversation_summary

router = APIRouter()

@router.get("/notes", response_model=NotesResponse)
async def patient_notes_endpoint(user: User):
    try:
        if user.id not in userData:
            raise HTTPException(status_code=404, detail="User not found")
        
        generate_conversation_summary(userData[user.id])
        return {
            "name": userData[user.id].name,
            "pronouns": userData[user.id].pronouns,
            "emotion": userData[user.id].emotion,
            "summary": userData[user.id].summary,
            "diagnosis": userData[user.id].diagnosis,
            "conversation": userData[user.id].conversation
        }
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))