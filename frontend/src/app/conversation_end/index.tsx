import { Button, Heading } from "../../components";
import React from "react";

export default function ConversationEndPage() {
  return (
    <div className="flex min-h-screen w-full items-center bg-[url(/images/img_desktop_six.png)] bg-cover bg-center bg-no-repeat md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex w-full flex-col items-center md:items-start">
          <div className="rounded-lg bg-white/80 p-6 md:p-8 backdrop-blur-sm">
            <Heading
              size="headinglg"
              as="h1"
              className="font-kalam text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-deep_purple-800"
            >
              I hope our conversation helped you!
            </Heading>
            
            <Heading
              size="headinglg"
              as="h2"
              className="text-shadow-ts1 mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-teal-600"
            >
              What do you want to do next?
            </Heading>
            
            <div className="mt-12 md:mt-16 w-full max-w-3xl space-y-4">
  <a href="/therapist_notes" className="block w-full">
    <Button 
      size="xl" 
      className="w-full rounded-3xl border-2 sm:text-base md:text-xl lg:text-3xl py-3 md:py-4"
    >
      Create notes for my therapist
    </Button>
  </a>
  
  <a href="/delete_user" className="block w-full">
    <Button 
      size="xl" 
      className="w-full rounded-3xl border- sm:text-base md:text-xl lg:text-3xl py-3 md:py-4"
    >
      Delete conversation
    </Button>
  </a>
</div>
          </div>
        </div>
      </div>
    </div>
  );
}