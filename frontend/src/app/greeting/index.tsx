import { Button, Text, Heading } from "../../components";
import React from "react";

export default function BotGreetingPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[url(/images/img_desktop_four.png)] bg-cover bg-center bg-no-repeat md:py-12">
      <div className="flex flex-col items-center justify-center gap-[32.88rem] text-[6.00px] md:gap-[24.63rem] sm:gap-[16.44rem]">
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
            It's a pleasure to meet you
          </Text>
          <a href="/chat">
            <Button
              size="lg"
              shape="round"
              className="min-w-[15.88rem] rounded-[32px] border-2 px-[2.00rem] sm:px-[1.25rem]"
            >
              Let's Talk
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}