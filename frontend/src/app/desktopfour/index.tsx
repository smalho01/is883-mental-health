import { Button, Text, Heading } from "../../components";
import React from "react";

export default function DesktopFourPage() {
  return (
    <div className="h-[64.00rem] w-full bg-1_white bg-[url(/images/img_desktop_four.png)] bg-cover bg-no-repeat py-[3.00rem] md:h-auto md:py-[1.25rem]">
      <div className="flex flex-col items-center gap-[32.88rem] text-[6.00px] md:gap-[24.63rem] sm:gap-[16.44rem]">
        <Heading
          as="h1"
          className="text-shadow-ts2 text-center text-[4.5rem] font-bold text-teal-300 md:text-[3.00rem]"
        >
          Hello! I am HOPE, your AI companion!
        </Heading>
        <div className="container-xs flex flex-col items-center gap-[1.75rem] px-[3.50rem] md:px-[1.25rem]">
          <Text
            size="text2xl"
            as="p"
            className="static text-center font-kalam text-[4.00rem] font-normal leading-[6.38rem] text-deep_purple-800 md:text-[3.00rem]"
          >
            It’s a pleasure to meet you
          </Text>
          <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
            <Button
              size="lg"
              shape="round"
              className="min-w-[15.88rem] rounded-[32px] border-2 px-[2.00rem] sm:px-[1.25rem]"
            >
              Let’s Talk
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
