"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout204() {
    return (
        <section id="aviana" className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1.2fr_1fr] lg:gap-x-20">
                    <div className="order-2 md:order-1">
                        <img
                            src="/images/INDIVIDUAL TRAINING/bb1.jpeg"
                            className="w-full h-auto rounded-xl"
                            style={{ clipPath: "inset(15% 0 8% 0)" }}
                            alt="Communication Mastery"
                        />
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                            Communication Mastery
                        </h2>
                        <p className="mb-5 md:mb-6 md:text-md">
                            Develop the ability to communicate with clarity, confidence, and professional impact.
                            Express ideas assertively, navigate challenging conversations, and speak with confidence in high-visibility workplace situations.
                        </p>
                        <div className="mb-6 md:mb-8">
                            <ul className="list-disc pl-4 space-y-2">
                                <li>Communicate assertively including saying no professionally and setting clear boundaries</li>
                                <li>Give and receive feedback with confidence and emotional intelligence</li>
                                <li>Handle difficult conversations with managers, peers, and clients calmly and effectively</li>
                                <li>Strengthen executive speaking, articulation, and verbal presence</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
