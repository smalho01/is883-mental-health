import { Text } from "./..";
import React from "react";

interface Props {
  className?: string;
  emotionTitle?: React.ReactNode;
  emotionList?: React.ReactNode;
}

export default function UserEmotionDisplay({
  emotionTitle = "Sad",
  emotionList = "&lt;&gt;hurt&lt;br /&gt;lonely&lt;br /&gt;vulnerable&lt;br /&gt;depressed&lt;/&gt;",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-start w-[24%] md:w-full gap-[2.00rem]`}>
      <div className="self-stretch rounded-[14px] bg-gradient shadow-xs">
        <Text
          size="textxl"
          as="p"
          className="text-center font-kalam text-[3.31rem] font-normal leading-[5.25rem] text-1_white"
        >
          {emotionTitle}
        </Text>
      </div>
      <Text
        size="textmd"
        as="p"
        className="ml-[4.75rem] text-center font-kalam text-[2.25rem] font-light leading-[3.56rem] text-indigo-300"
      >
        {emotionList}
      </Text>
    </div>
  );
}
