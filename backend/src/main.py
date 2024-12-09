import uvicorn
from fastapi import FastAPI
from contextlib import asynccontextmanager
from fastapi.middleware.cors import CORSMiddleware


from .models.model_loader import ModelManager
from .routes import chat, notes, user

from .config import (
    SERVER_HOST,
    SERVER_PORT
)

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Load the ML model
    model_manager = ModelManager()
    model_manager.load_models()
    yield
    # Clean up the ML models and release the resources
    model_manager.clean_models()

def create_app():
    app = FastAPI(
        title="Mental Health Therapy Chatbot API",
        description="Therapy chatbot to help address all your mental health needs",
        version="1.0.0",
        lifespan=lifespan
    )

    # Middleware
    origins = ["*"]

    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
    # Include routers
    app.include_router(chat.router)
    app.include_router(notes.router)
    app.include_router(user.router)

    @app.get("/about")
    async def about_server():
        return {
            "title": app.title,
            "description": app.description,
            "version": app.version
        }

    return app

app = create_app()

def run_server():
    uvicorn.run(
        "src.main:app", 
        host=SERVER_HOST,  
        port=SERVER_PORT,       
        reload=True      
    )

if __name__ == "__main__":
    run_server()