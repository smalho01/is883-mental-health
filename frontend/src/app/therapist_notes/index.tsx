"use client";

import React, { useState, useEffect } from 'react';
import { Button, Heading, Input } from "../../components";
import { Message, TherapistNotesChat } from '../../components/conversation';

interface TherapistNote {
  name: string;
  pronouns: string;
  emotion: string;
  summary: string;
  diagnosis: string;
  conversation: Message[];
}

const BASE_URL = "http://73.47.65.103:5032"
const NOTES_URL = "/notes"

export default function TherapistNotesPage() {
  const [note, setNote] = useState<TherapistNote | null>(null);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem("user_id");
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      setError('No user ID found');
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const fetchNotes = async () => {
      if (!userId) return;

      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}${NOTES_URL}/${userId}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch notes');
        }
        
        const data = await response.json();
        setNote(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch therapist notes');
        setLoading(false);
      }
    };

    fetchNotes();
  }, [userId]);

  const handleDeleteConversation = async () => {
    window.location.href = "/delete_user"
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!note) return <div>No notes found</div>;

  return (
    <div className="relative min-h-screen bg-[url(/images/img_desktop_five.png)] bg-cover bg-no-repeat p-6">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center mb-8 md:flex-col md:gap-4">
          <Heading 
            as="h1" 
            className="text-shadow-ts text-center text-[6rem] font-black text-teal-300 md:text-[3rem] flex-1 w-full"
          >
            Therapist Notes
          </Heading>
          <Button 
            onClick={handleDeleteConversation}
            size="sm"
            shape="round"
            className="min-w-[18.25rem] rounded-[28px] border-2 px-[1.63rem] sm:px-[1.25rem] bg-red-500 text-white hover:bg-red-600"
          >
            Delete conversation
          </Button>
        </div>

        <div className="flex flex-row gap-8 max-w-[2000px] mx-auto md:flex-col">
          {/* Patient Information Column */}
          <div className="flex-1 space-y-6 min-w-[45%] md:w-full">
            <div>
              <Heading 
                as="h2" 
                className="font-kalam text-[2.5rem] font-bold text-deep_purple-800 mb-2 md:text-[2.38rem] sm:text-[2.25rem]"
              >
                Patient Name
              </Heading>
              <Input 
                value={note.name} 
                readOnly 
                multiline
                shape="round"
                className="w-full rounded-lg border-[3px] border-gray-50_23 px-[0.75rem]"
              />
            </div>

            <div>
              <Heading 
                as="h3" 
                className="font-kalam text-[2.5rem] font-bold text-deep_purple-800 mb-2 md:text-[2.38rem] sm:text-[2.25rem]"
              >
                Pronouns
              </Heading>
              <Input 
                value={note.pronouns} 
                readOnly 
                multiline
                shape="round"
                className="w-full rounded-lg border-[3px] border-gray-50_23 px-[0.75rem]"
              />
            </div>

            <div>
              <Heading 
                as="h3" 
                className="font-kalam text-[2.5rem] font-bold text-deep_purple-800 mb-2 md:text-[2.38rem] sm:text-[2.25rem]"
              >
                Emotion
              </Heading>
              <Input 
                value={note.emotion} 
                readOnly 
                multiline
                shape="round"
                className="w-full rounded-lg border-[3px] border-gray-50_23 px-[0.75rem]"
              />
            </div>

            <div>
              <Heading 
                as="h3" 
                className="font-kalam text-[2.5rem] font-bold text-deep_purple-800 mb-2 md:text-[2.38rem] sm:text-[2.25rem]"
              >
                Summary
              </Heading>
              <Input 
                value={note.summary} 
                readOnly 
                multiline
                shape="round"
                className="w-full rounded-lg border-[3px] border-gray-50_23 px-[0.75rem]"
              />
            </div>

            <div>
              <Heading 
                as="h3" 
                className="font-kalam text-[2.5rem] font-bold text-deep_purple-800 mb-2 md:text-[2.38rem] sm:text-[2.25rem]"
              >
                Diagnosis
              </Heading>
              <Input 
                value={note.diagnosis} 
                readOnly 
                multiline
                shape="round"
                className="w-full rounded-lg border-[3px] border-gray-50_23 px-[0.75rem]"
              />
            </div>
          </div>

          {/* Conversation Column */}
          <div className="flex-1 space-y-6 min-w-[45%] md:w-full">
            <Heading 
              as="h2" 
              className="font-kalam text-[2.5rem] font-bold text-deep_purple-800 md:text-[2.38rem] sm:text-[2.25rem]"
            >
              Conversation
            </Heading>

            <div className="flex flex-col border-[3px] border-gray-50_23 bg-gray-100_01 shadow-xl rounded-lg h-[calc(100vh-300px)] max-h-[calc(100vh-300px)]">
              <div className="flex-1 overflow-y-auto px-[0.75rem] py-4">
                <TherapistNotesChat messages={note.conversation} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}