import { Button, Text, Heading } from "../../components";
import ConversationDeletedText from "./conversationDeleted";

export default function DeleteUserPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[url(/images/img_desktop_eight.png)] bg-cover bg-center bg-no-repeat">
      <div className="rounded-lg bg-white/70 px-8 py-6 backdrop-blur-sm">
        <div className="flex flex-col items-center justify-center">
          <ConversationDeletedText />
          <div className="flex flex-col items-center justify-center">
            <Heading
              size="heading3xl"
              as="h2"
              className="text-shadow-ts text-8xl font-black text-teal-300 md:text-5xl"
            >
              TheraBot
            </Heading>
            <Text
              size="textlg"
              as="p"
              className="mt-8 font-kalam text-5xl font-normal leading-relaxed text-deep_purple-800 md:text-4xl sm:text-3xl"
            >
              Talk your way back to you
            </Text>
            <a href="/landing" className="mt-8">
              <Button
                size="lg"
                shape="round"
                className="min-w-[9.13rem] rounded-[34px] border-2 px-8 sm:px-6"
              >
                Exit
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}