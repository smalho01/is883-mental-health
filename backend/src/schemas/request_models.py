from pydantic import BaseModel
from typing import List, Dict

class ChatRequest(BaseModel):
    user_id: str
    message: str

class ChatResponse(BaseModel):
    response: str

class ConversationResponse(BaseModel):
    conversation: List[Dict]

class NotesResponse(BaseModel):
    name: str
    pronouns: str
    emotion: str
    summary: str
    diagnosis: str
    conversation: List[Dict]

class User(BaseModel):
    id: str

class UserCreateRequest(BaseModel):
    name: str
    emotion: str
    pronouns: str

class UserData(BaseModel):
    id: str
    name: str
    emotion: str
    pronouns: str
    summary: str
    diagnosis: str
    last_summary_index: int
    conversation: List[Dict]