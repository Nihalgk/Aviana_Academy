"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
    Button,
} from "@relume_io/relume-ui";
import React from "react";
import { RxPlus } from "react-icons/rx";

export function Faq6() {
    return (
        <section id="aviana" className="px-[5%] py-8 md:py-12 lg:py-14">
            <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
                <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                    Questions
                </h2>
                <p className="md:text-md">
                    Start your transformation with Aviana Academy. Our team is ready to
                    discuss which program fits your goals.
                </p>
                <div className="mt-6 md:mt-8">
                    <a href="/contact">
                        <Button title="Contact" variant="secondary">
                            Contact
                        </Button>
                    </a>
                </div>
                <Accordion
                    type="multiple"
                    className="grid items-start justify-stretch gap-4"
                >
                    <AccordionItem
                        value="item-0"
                        className="border border-border-primary px-5 md:px-6"
                    >
                        <AccordionTrigger
                            icon={
                                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                            }
                            className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
                        >
                            How long does coaching take?
                        </AccordionTrigger>
                        <AccordionContent className="md:pb-6">
                            It depends on the depth of work and modules involved.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                        value="item-1"
                        className="border border-border-primary px-5 md:px-6"
                    >
                        <AccordionTrigger
                            icon={
                                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                            }
                            className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
                        >
                            Is this only about appearance?
                        </AccordionTrigger>
                        <AccordionContent className="md:pb-6">
                            No. Appearance opens the door. Behaviour and presence decide what
                            happens next.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                        value="item-2"
                        className="border border-border-primary px-5 md:px-6"
                    >
                        <AccordionTrigger
                            icon={
                                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                            }
                            className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
                        >
                            Can this help my career?
                        </AccordionTrigger>
                        <AccordionContent className="md:pb-6">
                            Yes. Perception influences trust, responsibility, and opportunity.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                        value="item-3"
                        className="border border-border-primary px-5 md:px-6"
                    >
                        <AccordionTrigger
                            icon={
                                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                            }
                            className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
                        >
                            Do you work with groups?
                        </AccordionTrigger>
                        <AccordionContent className="md:pb-6">
                            Yes individuals, institutions, and professional groups.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                        value="item-4"
                        className="border border-border-primary px-5 md:px-6"
                    >
                        <AccordionTrigger
                            icon={
                                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                            }
                            className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
                        >
                            Who is this suitable for?
                        </AccordionTrigger>
                        <AccordionContent className="md:pb-6">
                            Anyone who wants their presence to reflect their capability
                            students, professionals, leaders, and individuals in public-facing
                            roles.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                        value="item-5"
                        className="border border-border-primary px-5 md:px-6"
                    >
                        <AccordionTrigger
                            icon={
                                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                            }
                            className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
                        >
                            Will this change who I am?
                        </AccordionTrigger>
                        <AccordionContent className="md:pb-6">
                            No. The work removes inconsistency and distraction. What remains
                            is a clearer, more confident version of you.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}
