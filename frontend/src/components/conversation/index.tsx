'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Smile, Phone, Video, Info, X } from 'lucide-react';

export type MessageRole = 'user' | 'assistant';
export type Message = {
  role: MessageRole;
  content: string;
};

interface ConversationProps {
  messages: Message[];
  isLoading?: boolean;
  isFullPage?: boolean;
  username?: string;
  onSendMessage?: (message: string) => void;
  onEndChat?: () => void;
  hideHeader?: boolean;
  autoScroll?: boolean;
}

const BASE_URL = "http://73.47.65.103:5032";
const CHAT_URL = "/chat";

const getInitialMessages = async (user_id: string): Promise<Message[]> => {
  try {
    const response = await fetch(`${BASE_URL}${CHAT_URL}/${user_id}`);
    const data = await response.json();
    return data.conversation || [];
  } catch (err) {
    console.error(err);
    return [];
  }
};

const ConversationBubble: React.FC<{ message: Message }> = ({ message }) => {
  const isUser = message.role === 'user';

  return (
    <div className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'} mb-2 items-end`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full flex-shrink-0 mr-2 mb-1 flex items-center justify-center">
        <img 
          src="/images/img_ellipse_1.png"
          alt="Assistant" 
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      )}
      <div
        className={`max-w-[75%] px-4 py-2 rounded-2xl break-words ${
          isUser
            ? 'bg-[#4e7cfe] text-white rounded-tr-sm'
            : 'bg-[#f1f3f5] text-black rounded-tl-sm'
        }`}
      >
        {message.content.split('\n').map((line, index) => (
          <p key={index} className="text-sm whitespace-pre-wrap">
            {line}
          </p>
        ))}
      </div>
      {isUser && (
        <div className="w-8 h-8 rounded-full flex-shrink-0 ml-2 mb-1 flex items-center justify-center">
        <img 
          src="/images/img_ellipse_8.png"
          alt="User" 
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      )}
    </div>
  );
};

const ConversationComponent: React.FC<ConversationProps> = ({
  messages,
  isLoading,
  isFullPage = false,
  username = 'User',
  onSendMessage,
  onEndChat,
  hideHeader = false,
  autoScroll = false
}) => {
  const [newMessage, setNewMessage] = useState<string>('');
  const [showEndChatConfirmation, setShowEndChatConfirmation] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (autoScroll && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (autoScroll) {
      scrollToBottom();
    }
  }, [messages, autoScroll]);

  const handleSendMessage = () => {
    if (!newMessage.trim() || !onSendMessage) return;
    onSendMessage(newMessage.trim());
    setNewMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen w-full max-h-screen overflow-hidden bg-transparent">
      {!hideHeader && (
        <div className="flex-none bg-white/90 backdrop-blur-sm z-10 flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full flex items-center justify-center">
            <img 
              src="/images/img_ellipse_1.png"
              alt="HOPE" 
              className="w-full h-full rounded-full object-cover"
            />
          </div>
            <div>
              <h2 className="font-semibold">HOPE</h2>
              <p className="text-xs text-[#6b7280]">Active now</p>
            </div>
          </div>
          <div className="flex space-x-4">
            {onEndChat && (
              <button
                onClick={() => setShowEndChatConfirmation(true)}
                className="px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-md">
                End
              </button>
            )}
          </div>
        </div>
      )}

      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {isLoading ? (
          <div className="text-center text-[#6b7280]">Loading messages...</div>
        ) : messages.length === 0 ? (
          <div className="text-center text-[#6b7280]">No messages yet</div>
        ) : (
          <>
            {messages.map((message, index) => (
              <ConversationBubble key={index} message={message} />
            ))}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {onSendMessage && (
        <div className="flex-none bg-white p-4 border-t">
          <div className="flex items-center space-x-2">
            <div className="flex-grow bg-[#f1f3f5] rounded-full px-4 py-2">
              <textarea
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message"
                className="w-full bg-transparent outline-none text-sm resize-none overflow-hidden min-h-[24px]"
                style={{ height: 'auto' }}
                rows={1}
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement;
                  target.style.height = 'auto';
                  target.style.height = `${target.scrollHeight}px`;
                }}
              />
            </div>
            <button
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
              className="bg-[#4e7cfe] text-white rounded-full w-10 h-10 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      )}

      {showEndChatConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl text-center">
            <h3 className="text-lg font-semibold mb-4">End Chat?</h3>
            <p className="text-[#6b7280] mb-6">
              Are you sure you want to end this chat?
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setShowEndChatConfirmation(false)}
                className="px-4 py-2 bg-[#f1f3f5] text-[#6b7280] rounded-md hover:bg-[#e5e7eb]"
              >
                Cancel
              </button>
              <button
                onClick={onEndChat}
                className="px-4 py-2 bg-[#e03e2d] text-white rounded-md hover:bg-[#c72a1a]"
              >
                End Chat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const FullPageChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [username, setUsername] = useState('');
  const [userid, setUserid] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  useEffect(() => {
    if (!isInitialized && typeof window !== 'undefined') {
      const storedUserId = localStorage.getItem("user_id");
      const storedUsername = localStorage.getItem("user_name");

      if (storedUserId && storedUsername) {
        setUserid(storedUserId);
        setUsername(storedUsername);
      }
      setIsInitialized(true);
    }
  }, [isInitialized]);

  useEffect(() => {
    const loadMessages = async () => {
      if (userid && isInitialized) {
        setIsLoading(true);
        try {
          const conversation = await getInitialMessages(userid);
          setMessages(conversation);
        } catch (error) {
          console.error('Error loading messages:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    loadMessages();
  }, [userid, isInitialized]);

  const handleSendMessage = async (message: string) => {
    if (!userid) return;

    const userMessage: Message = {
      role: 'user',
      content: message
    };
    setMessages(prev => [...prev, userMessage]);

    try {
      const response = await fetch(`${BASE_URL}${CHAT_URL}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_id: userid,
          message: message
        })
      });

      const data = await response.json();

      if (data) {
        const assistantMessage: Message = {
          role: 'assistant',
          content: data.response
        };
        setMessages(prev => [...prev, assistantMessage]);
      }
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  const handleEndChat = async () => {
    try {
      console.log('Ending chat...');
      window.location.href = "/conversation_end";
    } catch (error) {
      console.error('Error ending chat:', error);
    }
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-transparent">
      <ConversationComponent
        messages={messages}
        isLoading={isLoading}
        isFullPage={true}
        username={username}
        onSendMessage={handleSendMessage}
        onEndChat={handleEndChat}
        autoScroll={true}
      />
    </div>
  );
};

export const TherapistNotesChat: React.FC<{ messages: Message[] }> = ({ messages }) => {
  return (
    <div className="h-full">
      <ConversationComponent
        messages={messages}
        hideHeader={true}
        autoScroll={false}
      />
    </div>
  );
};

export default FullPageChat;