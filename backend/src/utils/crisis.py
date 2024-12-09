import re
from typing import Dict, List, Optional

class CrisisResourceManager:
    CRISIS_PRIORITY = {
        'suicide': 3,      # Highest priority
        'self_harm': 2,    # High priority
        'panic_attack': 1  # Lower priority
    }

    CRISIS_KEYWORDS = {
        'suicide': [
            # Direct suicide intent
            r'\bkill myself\b', 
            r'\bwant to die\b', 
            r'\bsuicidal thoughts?\b', 
            r'\bend my life\b', 
            r'\bno reason to live\b',
            r'\bkilled? myself\b', 
            r'\bbetter off dead\b',
            r'\bwould be better if i (was|were) dead\b',
            
            # Expanded emotional indicators
            r'\bfeel hopeless\b',
            r'\blife is meaningless\b',
            r'\bdeath seems like relief\b',
            r'\bsurvival feels impossible\b'
        ],
        'panic_attack': [
            r'\bpanic attack\b', 
            r'\bcan\'?t breathe\b', 
            r'\boverwhelming anxiety\b', 
            r'\bfeeling trapped\b',
            r'\bchest is tight\b',
            r'\bintense fear\b',
            r'\bfeeling dizzy\b',
            r'\bshaking uncontrollably\b',
            r'\bheart racing\b'
        ],
        'self_harm': [
            r'\bcutting myself\b', 
            r'\bcut myself\b', 
            r'\bwant to hurt myself\b', 
            r'\bself-?harm\b',
            r'\bhurting myself\b',
            r'\bpunish myself\b',
            r'\brelease pain\b',
            r'\bneed to feel something\b'
        ]
    }

    CRISIS_RESOURCES = {
        'suicide': {
            'name': 'National Suicide Prevention Lifeline',
            'phone': '988',
            'description': 'Free, confidential 24/7 suicide prevention support'
        },
        'panic_attack': {
            'name': 'SAMHSA National Helpline',
            'phone': '1-800-662-HELP (4357)',
            'description': 'Free, confidential 24/7 mental health support'
        },
        'self_harm': {
            'name': 'Crisis Text Line',
            'phone': '741741',
            'description': 'Free, confidential 24/7 text-based crisis support'
        }
    }

    @classmethod
    def _normalize_message(cls, message: str) -> str:
        """
        Normalize message for more robust keyword matching.
        """
        normalized = re.sub(r'\s+', ' ', message.lower().strip())
        normalized = re.sub(r'[^\w\s]', '', normalized)
        return normalized

    @classmethod
    def detect_crisis(cls, message: str) -> Optional[str]:
        """
        Detect the most critical crisis type.
        Returns the most priority crisis type or None.
        """
        normalized_message = cls._normalize_message(message)
        detected_crises = {}
        
        # Detect crisis types
        for crisis_type, keywords in cls.CRISIS_KEYWORDS.items():
            matched_keywords = [
                keyword for keyword in keywords 
                if re.search(keyword, normalized_message, re.IGNORECASE)
            ]
            
            if matched_keywords:
                detected_crises[crisis_type] = matched_keywords
        
        # Contextual suicide risk detection
        if 'suicide' not in detected_crises:
            contextual_suicide_indicators = [
                'nothing matters',
                'hate everything',
                'wish i wasnt here',
                'world would be better without me',
                'feel like giving up',
                'too much pain'
            ]
            
            suicide_context_keywords = ['die', 'dead', 'kill', 'end']
            
            context_matches = [
                indicator for indicator in contextual_suicide_indicators
                if indicator in normalized_message
            ]
            
            suicide_context_match = bool(
                context_matches and 
                any(keyword in normalized_message for keyword in suicide_context_keywords)
            )
            
            if suicide_context_match:
                detected_crises['suicide'] = ['contextual_suicide_risk']
        
        # If multiple crises detected, return the highest priority one
        if detected_crises:
            return max(
                detected_crises.keys(), 
                key=lambda x: cls.CRISIS_PRIORITY.get(x, 0)
            )
        
        return None

    @classmethod
    def get_crisis_response(cls, crisis_type: str) -> str:
        """
        Generate a compassionate, structured crisis response.
        """
        if crisis_type not in cls.CRISIS_RESOURCES:
            return ""  # No response for unrecognized crisis type

        resource = cls.CRISIS_RESOURCES[crisis_type]
        
        crisis_messages = {
            'suicide': "Suicide Prevention Support:",
            'panic_attack': "Panic Attack Support:",
            'self_harm': "Self-Harm Prevention Support:"
        }

        response_parts = [
            "🚨 Crisis Support Alert 🚨",
            "",
            "I hear that you're going through an incredibly difficult moment.",
            "Your safety and well-being are paramount right now.",
            "",
            crisis_messages.get(crisis_type, "Crisis Support:"),
            f"• Resource: {resource['name']}",
            f"• Phone: {resource['phone']}",
            f"• Description: {resource['description']}",
            "",
            "Important Reminders:",
            "• You are not alone",
            "• Professional support is available 24/7",
            "• These trained professionals are ready to help",
            "",
            "Your life has value. Please reach out for support."
        ]
        print("returning canned crisis response...")
        return "\n".join(response_parts)