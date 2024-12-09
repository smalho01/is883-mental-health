import { Text } from "./..";
import React from "react";

// Define the valid emotion types
type EmotionType = 'Sad' | 'Happy' | 'Fearful' | 'Angry';

interface Props {
  className?: string;
  emotionTitle?: EmotionType;  // Updated to use the EmotionType
  emotionList?: React.ReactNode;
  handleSubmit: (emotion: EmotionType) => void;  // Also improved handleSubmit typing
}

const colorClasses: Record<EmotionType, string> = {
  Sad: 'bg-blue-400 hover:bg-blue-500 text-white',
  Happy: 'bg-green-400 hover:bg-green-500 text-white',
  Fearful: 'bg-yellow-400 hover:bg-yellow-500 text-black',
  Angry: 'bg-red-400 hover:bg-red-500 text-white',
};

export default function UserEmotionDisplay({
  emotionTitle = "Sad",
  emotionList = "&lt;&gt;hurt&lt;br /&gt;lonely&lt;br /&gt;vulnerable&lt;br /&gt;depressed&lt;/&gt;",
  handleSubmit,
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center w-[24%] md:w-full gap-[2.00rem]`}>
      <div className={`self-stretch rounded-[14px] shadow-xs transition-colors duration-300 ${colorClasses[emotionTitle]}`}>
        <button
          style={{width: "-webkit-fill-available"}}
          onClick={() => handleSubmit(emotionTitle)}
          className="text-center font-kalam text-[3.31rem] font-normal leading-[5.25rem] text-1_white"
        >
          {emotionTitle}
        </button>
      </div>
      <Text
        size="textmd"
        as="p"
        className="text-center font-kalam text-[2.25rem] font-light leading-[3.56rem] text-indigo-300"
      >
        {emotionList}
      </Text>
    </div>
  );
}