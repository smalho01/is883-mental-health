import { Button, Text, Heading } from "../../components";
import React from "react";

export default function DesktopTwoPage() {
  return (
    <div className="flex h-[64.00rem] w-full items-center justify-center bg-[url(/images/img_desktop_two.png)] bg-cover bg-no-repeat py-[19.75rem] md:h-auto md:py-[1.25rem]">
      <div className="container-xs flex justify-center px-[1.88rem] md:px-[1.25rem]">
        <div className="w-full">
          <div className="flex flex-col items-end gap-[2.63rem]">
            <div className="flex flex-col items-end self-stretch">
              <Heading
                size="heading3xl"
                as="h1"
                className="text-shadow-ts relative z-[1] text-[8.00rem] font-black text-teal-300 md:text-[3.00rem]"
              >
                TheraBot
              </Heading>
              <Text
                size="textlg"
                as="p"
                className="relative mr-[0.63rem] mt-0 font-kalam text-[3.00rem] font-normal leading-[4.75rem] text-deep_purple-800 md:mr-0 md:text-[2.75rem] sm:text-[2.38rem]"
              >
                Talk your way back to you
              </Text>
            </div>
            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
              <Button
                color="teal_900_e5"
                shape="round"
                className="mr-[11.50rem] min-w-[16.75rem] rounded-[30px] border-2 px-[2.00rem] md:mr-0 sm:px-[1.25rem]"
              >
                Let’s get started
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
