import torch

# Device Configuration
DEVICE = torch.device("cuda" if torch.cuda.is_available() else "cpu")
torch.cuda.set_device(0)
print(f"Using device: {DEVICE}")

# Model Paths
THERAPY_CHATBOT_MODEL = "victunes/TherapyBeagle-11B-v2-GGUF"
THERAPY_CHATBOT_FILE = "TherapyBeagle-11B-v2-Q2_K.gguf"
CHATBOT_TOKENIZER = "victunes/TherapyBeagle-11B-v2"
DIAGNOSIS_MODEL = 'Tianlin668/MentalBART'
SUMMARY_MODEL = "Mr-Vicky-01/Bart-Finetuned-conversational-summarization"



# Server Configuration
SERVER_HOST = "0.0.0.0"
SERVER_PORT = 5032