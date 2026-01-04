"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout210() {
    return (
        <section id="aviana" className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1.2fr_1fr] lg:gap-x-20">
                    <div className="order-2 md:order-1">
                        <img
                            src="/images/INDIVIDUAL TRAINING/dd1.jpeg"
                            className="w-full h-auto rounded-xl"
                            style={{ clipPath: "inset(2% 0 10% 0)" }}
                            alt="Personal Branding & Professional Image"
                        />
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                            Personal Branding & Professional Image
                        </h2>
                        <p className="mb-5 md:mb-6 md:text-md">
                            Align how you look, speak, and behave with your professional goals to build credibility, confidence, and a strong workplace presence.
                        </p>
                        <ul className="my-4 list-disc pl-5 space-y-2">
                            <li className="self-start pl-2">
                                <p>Clarify your professional identity and the impression you want to create</p>
                            </li>
                            <li className="self-start pl-2">
                                <p>Align appearance, grooming, body language, and communication with workplace expectations</p>
                            </li>
                            <li className="self-start pl-2">
                                <p>Build a confident, authentic executive presence without over-styling</p>
                            </li>
                            <li className="self-start pl-2">
                                <p>Show up consistently across meetings, presentations, and professional interactions</p>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </section>
    );
}
