"use client"

import { Heading } from "../../components";
import UserEmotionDisplay from "../../components/UserEmotionDisplay";
import React, { Suspense } from "react";

const BASE_URL = "http://24.61.52.129:5032"
const USER_CREATE_URL = "/user/create"

const colorClasses = {
  Sad: 'bg-blue-400 hover:bg-blue-500 text-white',
  Happy: 'bg-green-400 hover:bg-green-500 text-white',
  Fearful: 'bg-yellow-400 hover:bg-yellow-500 text-black',
  Angry: 'bg-red-400 hover:bg-red-500 text-white',
};

interface UserEmotionDisplayProps {
  emotionTitle: string;
  emotionList: React.ReactNode;
  handleSubmit: (emotion: string) => void;
}

type EmotionType = 'Sad' | 'Happy' | 'Fearful' | 'Angry';


const data = [
  {
    emotionTitle: "Sad" as EmotionType,
    emotionList: (
      <>
        hurt
        <br />
        lonely
        <br />
        vulnerable
        <br />
        depressed
      </>
    ),
  },
  {
    emotionTitle: "Happy" as EmotionType,
    emotionList: (
      <>
        content
        <br />
        optimistic
        <br />
        peaceful
        <br />
        focused
      </>
    ),
  },
  {
    emotionTitle: "Fearful" as EmotionType,
    emotionList: (
      <>
        scared
        <br /> anxious
        <br />
        worried
        <br />
        overwhelmed
      </>
    ),
  },
  {
    emotionTitle: "Angry" as EmotionType,
    emotionList: (
      <>
        annoyed
        <br />
        frustrated
        <br />
        provoked
        <br />
        outraged
      </>
    ),
  },
];

const handleEmotionSelect = (emotion: string) => {
  localStorage.setItem("user_emotion", emotion)
  const username = localStorage.getItem("user_name")
  const pronouns = localStorage.getItem("user_pronouns")

  fetch(`${BASE_URL}${USER_CREATE_URL}`, 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
         },
          body: JSON.stringify({
            "name": username,
            "emotion": emotion,
            "pronouns": pronouns
          })
        }
    ).then(response => response.json())
    .then(data => {
      console.log(data)
      localStorage.setItem("user_id", data.id)
      window.location.href = "/greeting"
    })
    .catch(err => {console.log(err)})
}



export default function EmotionSelectPage() {
  return (
    <div className="flex min-h-screen w-full items-center bg-[url(/images/img_desktop_three.png)] bg-cover bg-center bg-no-repeat md:py-12">
      <div style={{marginTop: "6rem"}} className="container-xs mb-[9.13rem] flex justify-center md:px-[1.25rem]">
      <div className="flex w-full flex-col items-center gap-[12.63rem] md:gap-[9.44rem] sm:gap-[6.31rem]">
        <Heading as="h1" className="text-[6.00rem] font-bold text-deep_purple-800 md:text-[3.00rem] text-center">
          How are you feeling today?
        </Heading>
          <div className="flex gap-[1.75rem] self-stretch md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {data.map((d, index) => (
                <UserEmotionDisplay {...d} key={"userprofile" + index} handleSubmit={(emotion: string) => handleEmotionSelect(emotion)} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
