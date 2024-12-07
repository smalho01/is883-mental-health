import re
from typing import Dict, List

class CrisisResourceManager:
    CRISIS_KEYWORDS = {
        'suicide': [
            r'\bkill myself\b', 
            r'\bwant to die\b', 
            r'\bsuicidal thoughts?\b', 
            r'\bend my life\b', 
            r'\bno reason to live\b',
            r'\bkilled? myself\b', 
            r'\bbetter off dead\b',
            r'\bwould be better if i (was|were) dead\b'
        ],
        'panic_attack': [
            r'\bpanic attack\b', 
            r'\bcan\'?t breathe\b', 
            r'\boverwhelming anxiety\b', 
            r'\bfeeling trapped\b',
            r'\bchest is tight\b'
        ],
        'self_harm': [
            r'\bcutting myself\b', 
            r'\bwant to hurt myself\b', 
            r'\bself-?harm\b',
            r'\bhurting myself\b'
        ]
    }

    CRISIS_RESOURCES = {
        'suicide': {
            'name': 'National Suicide Prevention Lifeline',
            'phone': '988',
            'description': 'Free, confidential 24/7 suicide prevention'
        },
        'panic_attack': {
            'name': 'Substance Abuse and Mental Health Services Administration (SAMHSA) Helpline',
            'phone': '1-800-662-HELP (4357)',
            'description': 'Free, confidential 24/7 mental health support'
        },
        'self_harm': {
            'name': 'National Alliance on Mental Illness (NAMI) Helpline',
            'phone': '1-800-950-NAMI (6264)',
            'description': 'Free, confidential 24/7 grassroots mental health support'
        }
    }

    @classmethod
    def detect_crisis(cls, message: str) -> Dict[str, List[str]]:
        detected_crises = {}
        
        # Normalize the message for more robust matching
        normalized_message = message.lower().strip()
        
        for crisis_type, keywords in cls.CRISIS_KEYWORDS.items():
            matched_keywords = [
                keyword for keyword in keywords 
                if re.search(keyword, normalized_message, re.IGNORECASE)
            ]
            
            if matched_keywords:
                detected_crises[crisis_type] = matched_keywords
        
        # Add additional context-based detection for suicide risk
        if 'suicide' not in detected_crises:
            # Look for contextual indicators of suicidal ideation
            contextual_indicators = [
                r'\bhate everything\b',
                r'\bnothing matters\b',
                r'\bwould be better\b',
                r'\bwish i wasn\'?t here\b'
            ]
            
            for indicator in contextual_indicators:
                if re.search(indicator, normalized_message, re.IGNORECASE):
                    # Additional check to ensure the context suggests suicide risk
                    if any(term in normalized_message for term in ['die', 'dead', 'kill']):
                        detected_crises['suicide'] = ['contextual_suicide_risk']
                        break
        
        return detected_crises

    @classmethod
    def get_crisis_response(cls, crisis_types: Dict[str, List[str]]) -> str:
        response_parts = [
            "I hear that you're going through an incredibly difficult moment. "
            "Your safety and well-being are paramount right now."
        ]

        for crisis_type in crisis_types:
            if crisis_type in cls.CRISIS_RESOURCES:
                resource = cls.CRISIS_RESOURCES[crisis_type]
                crisis_message = {
                    'suicide': "If you are having thoughts of suicide, please reach out for immediate help.",
                    'panic_attack': "If you are experiencing a panic attack, there are resources available to support you.",
                    'self_harm': "If you are struggling with self-harm, professional support can help you find healthier coping strategies."
                }.get(crisis_type, "")

                response_parts.extend([
                    crisis_message,
                    f"{resource['name']}: {resource['phone']}",
                    f"Description: {resource['description']}"
                ])

        response_parts.append(
            "\nYou are not alone. These trained professionals are ready to provide "
            "compassionate, immediate support during this challenging time."
        )

        return "\n".join(response_parts)