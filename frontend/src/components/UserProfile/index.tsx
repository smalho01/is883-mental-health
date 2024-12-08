import { Img, Text } from "./..";
import React from "react";

interface Props {
  className?: string;
  userName?: React.ReactNode;
  userMessage?: React.ReactNode;
}

export default function UserProfile({
  userName = "Your name",
  userMessage = "Your message goes here",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col md:self-stretch gap-[0.25rem] flex-1`}>
      <div className="flex self-stretch px-[1.63rem] sm:px-[1.25rem]">
        <Text
          as="p"
          className="font-sfcompactdisplay text-[1.00rem] font-normal tracking-[0.00rem] text-blue_gray-400 sm:text-[0.81rem]"
        >
          {userName}
        </Text>
      </div>
      <div className="flex self-stretch">
        <Img src="img_frame_3.svg" width={26} height={58} alt="Image" className="h-[3.63rem] w-[4%] object-contain" />
        <div className="flex flex-1">
          <Text
            size="texts"
            as="p"
            className="border-[0.405px] border-solid border-teal-300 bg-teal-300 pb-[0.38rem] pt-[0.75rem] font-sfcompactdisplay text-[1.69rem] font-normal tracking-[0.00rem] text-1_white sm:text-[1.38rem]"
          >
            {userMessage}
          </Text>
          <Img
            src="img_television.svg"
            width={18}
            height={58}
            alt="Television"
            className="h-[3.63rem] w-[3%] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
