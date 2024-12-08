import { Button, Heading } from "../../components";
import React from "react";

export default function DesktopSixPage() {
  return (
    <div className="flex h-[64.00rem] w-full items-center justify-center bg-1_white bg-[url(/images/img_desktop_six.png)] bg-cover bg-no-repeat py-[10.13rem] md:h-auto md:py-[1.25rem]">
      <div className="container-xs flex justify-center px-[0.63rem] md:px-[1.25rem]">
        <div className="flex w-full flex-col items-start">
          <Heading
            size="headinglg"
            as="h1"
            className="ml-[0.75rem] font-kalam text-[3.00rem] font-bold leading-[4.75rem] text-deep_purple-800 md:ml-0 md:text-[2.75rem] sm:text-[2.38rem]"
          >
            I hope our conversation helped you!
          </Heading>
          <Heading
            as="h2"
            className="text-shadow-ts1 ml-[0.75rem] mt-[1.13rem] text-[6.00rem] font-bold text-teal-300 md:ml-0 md:text-[3.00rem]"
          >
            What do you want to do next?
          </Heading>
          <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
            <Button size="xl" className="mt-[5.75rem] min-w-[33.63rem] rounded-[40px] border-2">
              Create notes for my therapist
            </Button>
          </a>
          <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
            <Button size="xl" className="mt-[2.25rem] min-w-[33.63rem] rounded-[40px] border-2">
              Delete conversation
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
