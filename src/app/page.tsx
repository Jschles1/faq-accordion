"use client";

import Image from "next/image";
import DesktopBackground from "/public/images/background-pattern-desktop.svg";
import MobileBackground from "/public/images/background-pattern-mobile.svg";
import IconStar from "/public/icons/icon-star.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ACCORDION_OPTIONS, AccordionOption } from "@/lib/utils";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-light-pink">
      <picture className="absolute top-0 w-full">
        <source media="(min-width:376px)" srcSet={DesktopBackground.src} />
        <Image
          src={MobileBackground}
          alt="Background Image"
          className="mx-auto w-full"
        />
      </picture>
      <div className="justify-center h-full flex">
        <div className="z-10 p-6 sm:p-10 rounded-xl bg-white text-dark-purple w-full mx-6 mt-[8.906rem] max-w-[600px]">
          <div className="flex items-center gap-6 sm:mb-3">
            <Image
              src={IconStar}
              alt="Star"
              className="h-[24px] w-[24px] sm:h-[40px] sm:w-[40px]"
            />
            <p className="text-[2rem] sm:text-[3.5rem] font-bold leading-[normal]">
              FAQs
            </p>
          </div>

          <Accordion type="single" collapsible>
            {ACCORDION_OPTIONS.map((option: AccordionOption) => (
              <AccordionItem value={option.question} key={option.question}>
                <AccordionTrigger>{option.question}</AccordionTrigger>
                <AccordionContent>{option.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </main>
  );
}
