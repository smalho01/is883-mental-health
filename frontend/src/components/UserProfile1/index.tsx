import { Img, Text } from "./..";
import React from "react";

interface Props {
  className?: string;
  userName?: React.ReactNode;
  userMessage?: React.ReactNode;
}

export default function UserProfile1({
  userName = "Your name",
  userMessage = "Your message goes here",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col w-[30%] md:w-full gap-[0.13rem]`}>
      <div className="flex self-stretch px-[1.13rem]">
        <Text as="p" className="font-sfcompactdisplay text-[1.00rem] font-normal tracking-[0.00rem] text-blue_gray-400">
          {userName}
        </Text>
      </div>
      <div className="flex flex-wrap justify-center self-stretch">
        <Img src="img_user.svg" width={18} height={58} alt="User" className="h-[3.63rem] w-[6%] object-contain" />
        <Text
          size="texts"
          as="p"
          className="border-[0.405px] border-solid border-deep_purple-800 bg-deep_purple-800 pb-[0.38rem] pt-[0.75rem] font-sfcompactdisplay text-[1.69rem] font-normal tracking-[0.00rem] text-1_white"
        >
          {userMessage}
        </Text>
        <Img
          src="img_frame_3_deep_purple_800.png"
          width={26}
          height={58}
          alt="Image"
          className="h-[3.63rem] w-[8%] object-contain"
        />
      </div>
    </div>
  );
}
