import { Button, Text, Heading } from "../../components";
import React from "react";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen w-full items-center bg-[url(/images/img_desktop_two.png)] bg-cover bg-center bg-no-repeat md:py-12">
      <div className="relative w-full">
        <div className="container-xs mt-[0.88rem] flex justify-end pl-[3.50rem] pr-[5.75rem] md:px-[1.25rem]">
          <div className="relative w-[40rem] rounded-3xl bg-gradient-to-br from-purple-50 via-white/80 to-blue-50 p-10 shadow-lg backdrop-blur-sm">
            <div className="flex flex-col items-end gap-10">
              <div className="flex flex-col items-end self-stretch">
                <Heading
                  size="heading3xl"
                  as="h1"
                  className="text-shadow-ts relative z-[1] text-[8rem] font-black text-teal-300 md:text-[4rem] sm:text-[3rem] leading-tight"
                >
                  TheraBot
                </Heading>
                <Text
                  size="textlg"
                  as="p"
                  className="relative mt-2 font-kalam text-[3rem] font-normal leading-tight text-deep_purple-800 md:text-[2.75rem] sm:text-[2.38rem]"
                >
                  Talk your way back to you
                </Text>
              </div>
              <div className="w-full flex justify-end">
                <a href="/sign_up" className="md:w-full">
                  <Button
                    color="teal_900_e5"
                    shape="round"
                    className="min-w-[16.75rem] rounded-[30px] border-2 px-8 py-4 md:w-full md:px-6"
                  >
                    Let's get started
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}