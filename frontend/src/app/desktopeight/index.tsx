import { Button, Text, Heading } from "../../components";
import DesktopeightRowyour from "./DesktopeightRowyour";
import React from "react";

export default function DesktopEightPage() {
  return (
    <div className="h-[64.00rem] w-full bg-1_white bg-[url(/images/img_desktop_eight.png)] bg-cover bg-no-repeat py-[1.25rem] md:h-auto">
      <div className="flex flex-col items-center">
        <DesktopeightRowyour />
        <div className="container-xs flex flex-col items-end pl-[3.50rem] pr-[21.75rem] md:px-[1.25rem]">
          <Heading
            size="heading3xl"
            as="h2"
            className="text-shadow-ts text-[8.00rem] font-black text-teal-300 md:text-[3.00rem]"
          >
            TheraBot
          </Heading>
          <Text
            size="textlg"
            as="p"
            className="mr-[0.75rem] mt-[36.13rem] font-kalam text-[3.00rem] font-normal leading-[4.75rem] text-deep_purple-800 md:mr-0 md:text-[2.75rem] sm:text-[2.38rem]"
          >
            Talk your way back to you
          </Text>
          <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
            <Button
              size="lg"
              shape="round"
              className="mr-[14.38rem] mt-[2.38rem] min-w-[9.13rem] rounded-[34px] border-2 px-[2.00rem] md:mr-0 sm:px-[1.25rem]"
            >
              Exit
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
