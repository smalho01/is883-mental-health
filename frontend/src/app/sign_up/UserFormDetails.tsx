"use client";
import React, { useEffect, useState } from "react";

const dropDownOptions = [
  { label: "He/Him/His", value: "He/Him/His" },
  { label: "She/Her/Hers", value: "She/Her/Hers" },
  { label: "They/Them", value: "They/Them" },
];

const handleSubmit = ({name, pronouns}: {name: string, pronouns: string}) => {
  localStorage.setItem("user_name", name);
  localStorage.setItem("user_pronouns", pronouns);
  window.location.href = "/emotion_select";
};

export default function UserFormDetails() {
  const [name, setName] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [pronouns, setPronouns] = useState(dropDownOptions[2].value);

  useEffect(() => {
    // Disable button if name is an empty string or just whitespace
    setIsButtonDisabled(name.trim() === '');
  }, [name]);

  return (
    <div className="flex min-h-screen w-full items-center bg-[url(/images/img_group_97.png)] bg-cover bg-center bg-no-repeat md:py-12">
      <div className="container-xs mt-[0.88rem] flex justify-end pl-[3.50rem] pr-[5.75rem] md:px-[1.25rem]">
      <div className="relative w-[32rem] rounded-3xl bg-gradient-to-br from-purple-50 via-white/80 to-blue-50 p-10 shadow-lg backdrop-blur-sm">
        <h1 className="mb-8 text-5xl font-bold text-purple-800">
          What should we call you?
        </h1>
        
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-10 w-full rounded-lg border border-gray-200 bg-white/50 p-4 text-lg outline-none focus:border-purple-400"
          placeholder="Enter your name"
        />

        <div className="mb-8">
          <p className="mb-3 font-kalam text-3xl text-purple-800">
            What are your pronouns?
          </p>
          <select 
            onChange={e => setPronouns(e.target.value)} 
            value={pronouns}
            className="w-full rounded-lg border border-gray-200 bg-white/50 p-4 text-lg outline-none focus:border-purple-400"
          >
            {dropDownOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <button
          disabled={isButtonDisabled}
          onClick={() => handleSubmit({name, pronouns})}
          className={`
          ${isButtonDisabled 
            ? 'w-full rounded-full bg-gray-400 px-8 py-4 text-lg text-white hover:bg-gray-350 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2' 
            : 'w-full rounded-full bg-purple-800 px-8 py-4 text-lg text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2'}
          px-4 py-2 rounded transition-colors duration-300
        `}
        >
          Submit
        </button>
      </div>
    </div>
      </div>
  );
}