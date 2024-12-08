import { Img, Text } from "./..";
import React from "react";

interface Props {
  className?: string;
  userName?: React.ReactNode;
  messageimage1?: string;
  messageText?: React.ReactNode;
  messageimage2?: string;
}

export default function UserMessageBubble({
  userName = "Your name",
  messageimage1 = "img_frame_3.svg",
  messageText = "Your message goes here",
  messageimage2 = "img_television.svg",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col w-full gap-[0.25rem]`}>
      <div className="flex self-stretch px-[1.63rem] sm:px-[1.25rem]">
        <Text as="p" className="font-sfcompactdisplay text-[1.00rem] font-normal tracking-[0.00rem] text-blue_gray-400">
          {userName}
        </Text>
      </div>
      <div className="flex flex-wrap justify-center self-stretch">
        <Img
          src={messageimage1}
          width={26}
          height={58}
          alt="Messageimage"
          className="h-[3.63rem] w-[8%] object-contain"
        />
        <Text
          size="texts"
          as="p"
          className="border-[0.405px] border-solid border-teal-300 bg-teal-300 pb-[0.38rem] pt-[0.75rem] font-sfcompactdisplay text-[1.69rem] font-normal tracking-[0.00rem] text-1_white"
        >
          {messageText}
        </Text>
        <Img
          src={messageimage2}
          width={18}
          height={58}
          alt="Messageimage"
          className="h-[3.63rem] w-[6%] object-contain"
        />
      </div>
    </div>
  );
}
