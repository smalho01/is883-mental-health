import { Heading } from "../../components";
import UserEmotionDisplay from "../../components/UserEmotionDisplay";
import React, { Suspense } from "react";

const data = [
  {
    emotionTitle: "Sad",
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
    emotionTitle: "Happy",
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
    emotionTitle: "Fearful",
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
    emotionTitle: "Angry",
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

export default function DesktopThreePage() {
  return (
    <div className="flex h-[64.00rem] w-full items-start justify-center bg-1_white bg-[url(/images/img_desktop_three.png)] bg-cover bg-no-repeat py-[5.88rem] md:h-auto md:py-[1.25rem]">
      <div className="container-xs mb-[9.13rem] flex justify-center md:px-[1.25rem]">
        <div className="flex w-full flex-col items-center gap-[12.63rem] md:gap-[9.44rem] sm:gap-[6.31rem]">
          <Heading as="h1" className="text-[6.00rem] font-bold text-deep_purple-800 md:text-[3.00rem]">
            How are you feeling today?
          </Heading>
          <div className="flex gap-[1.75rem] self-stretch md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {data.map((d, index) => (
                <UserEmotionDisplay {...d} key={"userprofile" + index} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
