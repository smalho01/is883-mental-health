def count_llama_tokens(messages, chatbot_tokenizer):
    def count_message_tokens(message):
        content = message.get('content', '')
        tokens = chatbot_tokenizer.encode(content, add_special_tokens=False)
        return len(tokens)
    
    total_tokens = sum(count_message_tokens(msg) for msg in messages)
    return total_tokens