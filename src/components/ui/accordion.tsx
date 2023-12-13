"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
// import { ChevronDown } from "lucide-react";
import Image from "next/image";
import IconPlus from "/public/icons/icon-plus.svg";
import IconMinus from "/public/icons/icon-minus.svg";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "border-b border-light-pink last-of-type:border-none",
      className
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center text-base sm:text-lg text-dark-purple hover:text-pink cursor-pointer leading-[normal] text-left justify-between py-5 sm:py-6 font-medium transition-all first-of-type:[&[data-state=open]>img]:hidden last-of-type:[&[data-state=open]>img]:block",
        className
      )}
      {...props}
    >
      {children}
      <Image
        src={IconPlus}
        alt="Open"
        className="h-[30px] w-[30px] shrink-0 basis-12 block data-[state=open]:hidden"
      />
      <Image
        src={IconMinus}
        alt="Close"
        className="h-[30px] w-[30px] shrink-0 basis-12 hidden data-[state=open]:block"
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm sm:text-base text-pale-purple transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-5 sm:pb-6 pt-[0.25rem]", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
