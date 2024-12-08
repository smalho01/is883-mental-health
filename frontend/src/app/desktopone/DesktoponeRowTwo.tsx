"use client";

import { Button, SelectBox, Img, Text, Input, Heading } from "../../components";
import React from "react";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function DesktoponeRowTwo() {
  return (
    <div className="flex h-[60rem] items-center justify-center bg-[url(/images/img_group_97.png)] bg-cover bg-no-repeat py-[11.38rem] md:h-auto md:py-[1.25rem]">
      <div className="container-xs mt-[0.88rem] flex justify-end pl-[3.50rem] pr-[5.75rem] md:px-[1.25rem]">
        <div className="block h-[40rem] w-[56%] items-center justify-center rounded-lg bg-[url(/images/img_group_13.svg)] bg-cover bg-no-repeat px-[1.25rem] py-[1.38rem] md:h-auto md:w-full sm:py-[1.25rem]">
          <div className="mt-[1.25rem] w-full">
            <div className="flex flex-col items-start">
              <Heading
                size="headingxl"
                as="h1"
                className="text-shadow-ts1 text-[4.00rem] font-bold text-deep_purple-800 md:text-[3.00rem]"
              >
                What should we call you?
              </Heading>
              <Input
                color="1_white"
                size="xs"
                name="inputbg_one"
                className="mr-[1.38rem] mt-[0.63rem] rounded-[12px] border border-blue_gray-100_01 px-[0.75rem]"
              />
              <div className="mt-[1.38rem] flex flex-col items-start self-stretch">
                <Text
                  size="textlg"
                  as="p"
                  className="font-kalam text-[3.00rem] font-normal text-deep_purple-800 md:text-[2.75rem] sm:text-[2.38rem]"
                >
                  What are your pronouns?
                </Text>
                <div className="relative mt-[-0.50rem] flex self-stretch py-[0.25rem]">
                  <SelectBox
                    shape="round"
                    indicator={
                      <Img
                        src="img_filter.svg"
                        width={20}
                        height={18}
                        alt="Filter"
                        className="h-[1.13rem] w-[1.25rem]"
                      />
                    }
                    name="filter"
                    placeholder={`Select`}
                    options={dropDownOptions}
                    className="mb-[8.50rem] w-[48%] gap-[1.00rem] rounded-[5px] !border px-[0.75rem]"
                  />
                </div>
              </div>
              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                <Button
                  shape="round"
                  className="mt-[0.63rem] min-w-[10.25rem] rounded-[30px] border-2 px-[2.00rem] sm:px-[1.25rem]"
                >
                  Submit
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
