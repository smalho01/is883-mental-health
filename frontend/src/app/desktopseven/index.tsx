"use client";

import { Button, Img, Heading, Input } from "../../components";
import React from "react";

export default function DesktopSevenPage() {
  return (
    <div className="relative h-[64.00rem] w-full content-center bg-1_white md:h-auto">
      <div className="flex flex-1 flex-col items-center gap-[48.88rem] md:gap-[36.63rem] sm:gap-[24.44rem]">
        <Heading as="h1" className="text-shadow-ts text-[6.00rem] font-black text-teal-300 md:text-[3.00rem]">
          Therapist Notes
        </Heading>
        <div className="container-xs flex flex-col items-end px-[1.75rem] md:px-[1.25rem]">
          <Heading size="headings" as="h2" className="text-[1.50rem] font-bold text-1_white md:text-[1.38rem]">
            Delete conversation
          </Heading>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[64.00rem] flex-1 bg-[url(/images/img_group_12.png)] bg-cover bg-no-repeat py-[1.63rem] md:h-auto sm:py-[1.25rem]">
        <div className="flex flex-col items-center gap-[0.75rem]">
          <Heading as="h2" className="text-shadow-ts text-[6.00rem] font-black text-teal-300 md:text-[3.00rem]">
            Therapist Notes
          </Heading>
          <div className="container-xs md:px-[1.25rem]">
            <div className="relative z-[4] mx-[3.00rem] flex items-center gap-[2.44rem] md:mx-0 md:flex-col">
              <Heading
                size="headingmd"
                as="h3"
                className="w-[48%] font-kalam text-[2.50rem] font-bold leading-[3.94rem] text-deep_purple-800 md:w-full md:text-[2.38rem] sm:text-[2.25rem]"
              >
                Patient Name
              </Heading>
              <Heading
                size="headingmd"
                as="h4"
                className="font-kalam text-[2.50rem] font-bold text-deep_purple-800 md:text-[2.38rem] sm:text-[2.25rem]"
              >
                Conversation{" "}
              </Heading>
            </div>
            <div className="relative ml-[3.00rem] mt-[-0.13rem] flex items-start gap-[2.13rem] md:ml-0 md:flex-col">
              <div className="flex w-[46%] flex-col items-center md:w-full">
                <Input
                  shape="round"
                  name="edittext"
                  className="mr-[1.50rem] rounded-lg border-[3px] border-gray-50_23 px-[0.75rem] sm:mr-0"
                />
                <Heading
                  size="headingmd"
                  as="h5"
                  className="relative z-[1] mt-[1.25rem] font-kalam text-[2.50rem] font-bold leading-[3.94rem] text-deep_purple-800 md:text-[2.38rem] sm:text-[2.25rem]"
                >
                  Mood before conversation
                </Heading>
                <Input
                  shape="round"
                  name="edittext_one"
                  className="mr-[1.50rem] rounded-lg border-[3px] border-gray-50_23 px-[0.75rem] sm:mr-0"
                />
                <Heading
                  size="headingmd"
                  as="h6"
                  className="relative z-[2] mt-[1.75rem] font-kalam text-[2.50rem] font-bold leading-[3.94rem] text-deep_purple-800 md:text-[2.38rem] sm:text-[2.25rem]"
                >
                  Conversation Summary
                </Heading>
                <Img
                  src="img_rectangle_10.svg"
                  width={556}
                  height={136}
                  alt="Image"
                  className="ml-[0.25rem] mr-[1.50rem] h-[8.50rem] w-full rounded-lg md:mx-0 md:h-auto"
                />
                <Heading
                  size="headingmd"
                  as="h1"
                  className="relative z-[3] mt-[1.13rem] font-kalam text-[2.50rem] font-bold leading-[3.94rem] text-deep_purple-800 md:text-[2.38rem] sm:text-[2.25rem]"
                >
                  Diagnosis
                </Heading>
                <Img
                  src="img_rectangle_11.svg"
                  width={556}
                  height={128}
                  alt="Image"
                  className="ml-[0.25rem] mr-[1.50rem] h-[8.00rem] w-full rounded-lg md:mx-0 md:h-auto"
                />
              </div>
              <div className="flex flex-1 flex-col items-end gap-[1.88rem] self-center md:self-stretch">
                <Img
                  src="img_rectangle_11.svg"
                  width={648}
                  height={670}
                  alt="Image"
                  className="mr-[1.25rem] h-[41.88rem] w-full rounded-lg md:mr-0 md:h-auto"
                />
                <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                  <Button
                    size="sm"
                    shape="round"
                    className="min-w-[18.25rem] rounded-[28px] border-2 px-[1.63rem] sm:px-[1.25rem]"
                  >
                    Delete conversation
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
