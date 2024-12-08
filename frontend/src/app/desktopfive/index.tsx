import { Heading, Img, Button, Text } from "../../components";
import UserMessageBubble from "../../components/UserMessageBubble";
import UserProfile from "../../components/UserProfile";
import UserProfile1 from "../../components/UserProfile1";
import React from "react";

export default function DesktopFivePage() {
  return (
    <div className="flex h-[64.00rem] w-full items-center justify-center bg-1_white bg-[url(/images/img_desktop_five.png)] bg-cover bg-no-repeat py-[1.63rem] md:h-auto sm:py-[1.25rem]">
      <div className="container-xs mt-[0.75rem] flex justify-center md:px-[1.25rem]">
        <div className="flex w-full flex-col gap-[1.13rem]">
          <div className="ml-[0.38rem] md:ml-0">
            <div className="flex justify-center border-[3px] border-solid border-gray-50_11 bg-gray-100_7f p-[0.50rem] shadow-lg">
              <div className="flex w-[94%] items-center justify-center gap-[1.88rem] md:w-full md:flex-col">
                <Img
                  src="img_ellipse_1.png"
                  width={122}
                  height={114}
                  alt="Image"
                  className="h-[7.13rem] w-[10%] object-contain md:w-full"
                />
                <div className="mb-[0.38rem] flex flex-1 flex-col items-start self-end md:self-stretch">
                  <Text
                    size="textlg"
                    as="p"
                    className="text-[3.00rem] font-medium text-gray-900 md:text-[2.75rem] sm:text-[2.38rem]"
                  >
                    Hope
                  </Text>
                  <div className="flex items-start self-stretch">
                    <div className="h-[0.63rem] w-[0.63rem] rounded bg-green-500" />
                    <Text as="p" className="self-center text-[1.00rem] font-medium text-green-a700_01">
                      online
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-[0.38rem] flex flex-col items-end gap-[0.63rem] md:ml-0">
            <div className="relative mr-[1.00rem] h-[47.88rem] content-center self-stretch border-[3px] border-solid border-gray-50_23 bg-gray-100 shadow-xl md:mr-0 md:h-auto">
              <div className="flex-1">
                <div className="relative z-[5] mx-[1.38rem] flex items-start gap-[1.00rem] md:mx-0 md:flex-col">
                  <Img
                    src="img_ellipse_1.png"
                    width={80}
                    height={74}
                    alt="Image"
                    className="h-[4.63rem] w-[6%] self-end object-contain md:w-full"
                  />
                  <UserProfile className="mb-[2.25rem]" />
                </div>
                <div className="relative mt-[-1.38rem]">
                  <div className="relative z-[4] ml-[7.88rem] mr-[7.50rem] flex items-start md:mx-0 md:flex-col">
                    <UserProfile className="mt-[4.25rem] self-end" />
                    <UserProfile1 />
                  </div>
                  <div className="relative mt-[-2.25rem]">
                    <div className="relative z-[3] mx-[1.38rem] flex flex-col items-start gap-[6.25rem] md:mx-0 md:gap-[4.69rem] sm:gap-[3.13rem]">
                      <Img
                        src="img_ellipse_1.png"
                        width={80}
                        height={74}
                        alt="Image"
                        className="h-[4.63rem] w-[6%] object-contain"
                      />
                      <Img
                        src="img_ellipse_1.png"
                        width={80}
                        height={74}
                        alt="Image"
                        className="h-[4.63rem] w-[6%] object-contain"
                      />
                    </div>
                    <div className="relative mt-[-12.38rem]">
                      <div className="relative z-[2] ml-[7.88rem] mr-[1.50rem] grid grid-cols-3 gap-[24.88rem] gap-y-[0.50rem] md:mx-0 md:grid-cols-2 sm:grid-cols-1">
                        <UserMessageBubble />
                        <UserMessageBubble
                          messageimage1="img_user.svg"
                          messageimage2="img_frame_3_deep_purple_800.png"
                        />
                        <Img
                          src="img_ellipse_8.png"
                          width={80}
                          height={78}
                          alt="Ellipse"
                          className="h-[4.88rem] w-full object-cover md:h-auto"
                        />
                        <UserMessageBubble />
                        <UserMessageBubble
                          messageimage1="img_user.svg"
                          messageimage2="img_frame_3_deep_purple_800.png"
                        />
                        <Img
                          src="img_ellipse_8.png"
                          width={80}
                          height={78}
                          alt="Ellipse"
                          className="h-[4.88rem] w-full object-cover md:h-auto"
                        />
                      </div>
                      <div className="relative mt-[-2.00rem] flex flex-col items-start">
                        <Img
                          src="img_ellipse_1.png"
                          width={80}
                          height={74}
                          alt="Image"
                          className="relative z-[1] ml-[1.38rem] h-[4.63rem] w-[6%] object-contain md:ml-0"
                        />
                        <div className="relative mt-[-0.50rem] flex items-center justify-center gap-[2.00rem] self-stretch border-[3px] border-solid border-gray-50_11 bg-blue_gray-100_7f px-[1.38rem] py-[1.63rem] blur-[4.00px] backdrop-opacity-[0.5] md:flex-col sm:p-[1.25rem]">
                          <div className="h-[3.13rem] flex-1 rounded-[24px] border-[3px] border-solid border-gray-50_23 bg-gray-100_01 shadow-xl md:self-stretch md:px-[1.25rem]" />
                          <Button
                            size="xs"
                            className="min-w-[7.25rem] rounded-[22px] border-2 px-[1.50rem] md:px-[1.25rem]"
                          >
                            Send
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                src="img_ellipse_8.png"
                width={80}
                height={78}
                alt="Image"
                className="absolute right-[1.50rem] top-[21%] z-[6] m-auto h-[4.88rem] w-[6%] object-contain"
              />
            </div>
            <div className="flex rounded-[12px] border-2 border-solid border-gray-900 bg-teal-900 p-[0.25rem] shadow-sm">
              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                <Heading size="headingxs" as="h1" className="text-[1.00rem] font-bold text-1_white">
                  End Chat
                </Heading>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
