"use client";

import { Heading } from "../../components";
import React, { useEffect, useState } from "react";

export default function ConversationDeletedText() {

  const BASE_URL = "http://73.47.65.103:5032"
  const CHAT_URL = "/user"  
 
  const [userid, setUserid] = useState('');
  const [is_deleted, setIsDeleted] = useState(false);

  const deleteConversation = async (user_id: string): Promise<void> => {
    try {
      const response = await fetch(`${BASE_URL}${CHAT_URL}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: userid,
        })
      });

      const data = await response.json();
      return data
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUserId = localStorage.getItem("user_id");
      
      if (storedUserId) {
        setUserid(storedUserId);
      }
    }
  });

  useEffect(() => {
    const loadMessages = async () => {
      if (userid) {
        try {
          const response = await deleteConversation(userid);
          console.log (response);
          setIsDeleted(true);
          localStorage.clear();
        } catch (error) {
          console.error('Error deleteing messages:', error);
        }
      }
    };

    loadMessages();
  }, [userid]);
  
  return (
    is_deleted ? (
    <div className="self-stretch">
      <Heading
        size="headinglg"
        as="h1"
        className="text-center font-kalam text-[3.00rem] font-bold leading-[4.75rem] text-colors-pink md:text-[2.75rem] sm:text-[2.38rem]"
      >
        Your conversation was successfully deleted
      </Heading>
    </div>
    ): (
<div className="self-stretch">
      <Heading
        size="headinglg"
        as="h1"
        className="text-center font-kalam text-[3.00rem] font-bold leading-[4.75rem] text-colors-pink md:text-[2.75rem] sm:text-[2.38rem]"
      >
        Your conversation is being delted...
      </Heading>
    </div>
    )
  );
}
