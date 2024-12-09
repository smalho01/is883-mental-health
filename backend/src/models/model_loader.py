import torch
import gc
from llama_cpp import Llama
from transformers import BartTokenizer, BartForConditionalGeneration
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

from ..config import (
    DEVICE, 
    THERAPY_CHATBOT_MODEL,
    THERAPY_CHATBOT_FILE, 
    CHATBOT_TOKENIZER, 
    DIAGNOSIS_MODEL, 
    SUMMARY_MODEL
)

class ModelManager:
    _instance = None
    _models = None

    def __new__(cls):
        if not cls._instance:
            cls._instance = super(ModelManager, cls).__new__(cls)
        return cls._instance

    def load_models(self):
        try:
            print("Loading models...")
            self._models = {
                'chatbot_tokenizer': AutoTokenizer.from_pretrained("victunes/TherapyBeagle-11B-v2"),
                'therapy_chatbot': Llama.from_pretrained(
                    repo_id=THERAPY_CHATBOT_MODEL,
                    filename=THERAPY_CHATBOT_FILE,
                    n_gpu_layers=-1,
                    main_gpu=0,
                    n_ctx=1024
                ),
                'diagnosis_tokenizer': BartTokenizer.from_pretrained(DIAGNOSIS_MODEL),
                'diagnosis_model': BartForConditionalGeneration.from_pretrained(DIAGNOSIS_MODEL).to(DEVICE),
                'summary_tokenizer': AutoTokenizer.from_pretrained(SUMMARY_MODEL),
                'summary_model': AutoModelForSeq2SeqLM.from_pretrained(SUMMARY_MODEL).to(DEVICE)
            }
            print("Models loaded successfully.")
            return self._models
        except Exception as e:
            print(f"Error loading models: {e}")
            return None

    def get_models(self):
        if self._models is None:
            self.load_models()
        return self._models

    def clean_models(self):
        if self._models:
            print("Cleaning up AI models...")
            for model_key, model in list(self._models.items()):
                del model
                del self._models[model_key]
            torch.cuda.empty_cache()
            self._models.clear()
            self._models = None
            gc.collect()
            print("AI models cleaned up.")
