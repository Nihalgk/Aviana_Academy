"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout522() {
    return (
        <section id="aviana" className="px-[5%] py-8 md:py-12 lg:py-14">
            <div className="container">
                <div className="mb-12 md:mb-18 lg:mb-20">
                    <div className="mx-auto max-w-lg text-center">

                        <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                            What we work on together
                        </h2>
                        <p className="md:text-md">Three core areas shape your growth</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
                    <div className="relative flex flex-col p-6 md:p-8 lg:p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 rounded-xl overflow-hidden min-h-[550px]">
                        <div className="absolute inset-0 z-0">
                            <div className="absolute inset-0 bg-black/50" />
                            <img
                                src="/images/INDIVIDUAL TRAINING/PL2.jpeg"
                                className="size-full object-cover"
                                alt="Personal Leadership coaching"
                            />
                        </div>
                        <div className="relative z-10 flex flex-1 flex-col justify-end">

                            <div>
                                <h3 className="mb-2 text-xl font-bold text-text-alternative md:text-2xl">
                                    Personal Leadership coaching
                                </h3>
                                <p className="mb-4 text-text-alternative font-semibold">
                                    Strategic Clarity
                                </p>
                                <p className="text-text-alternative">
                                    Think clearly and prioritise effectively in complex situations. Make confident, well-judged decisions aligned with your goals and organisational expectations.
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="relative flex flex-col p-6 md:p-8 lg:p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 rounded-xl overflow-hidden min-h-[550px]">
                        <div className="absolute inset-0 z-0">
                            <div className="absolute inset-0 bg-black/50" />
                            <img
                                src="/images/INDIVIDUAL TRAINING/CD1.jpeg"
                                className="size-full object-cover"
                                alt="Aviana placeholder image"
                            />
                        </div>
                        <div className="relative z-10 flex flex-1 flex-col justify-end">

                            <div>
                                <h3 className="mb-2 text-xl font-bold text-text-alternative md:text-2xl">
                                    Career development guidance
                                </h3>
                                <p className="mb-4 text-text-alternative font-semibold">
                                    Executive Presence
                                </p>
                                <p className="text-text-alternative">
                                    You develop a strong, authentic professional presence that builds trust, credibility, and authority ensuring your ideas are heard, respected, and acted upon.
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="relative flex flex-col p-6 md:p-8 lg:p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 rounded-xl overflow-hidden min-h-[550px]">
                        <div className="absolute inset-0 z-0">
                            <div className="absolute inset-0 bg-black/50" />
                            <img
                                src="/images/INDIVIDUAL TRAINING/PE1.jpeg"
                                className="size-full object-cover"
                                alt="High-Impact Execution"
                            />
                        </div>
                        <div className="relative z-10 flex flex-1 flex-col justify-end">

                            <div>
                                <h3 className="mb-2 text-xl font-bold text-text-alternative md:text-2xl">
                                    High-Impact Execution
                                </h3>
                                <p className="mb-4 text-text-alternative font-semibold">
                                    Performance Excellence
                                </p>
                                <p className="text-text-alternative">
                                    Improve productivity, manage priorities effectively, and perform with confidence and consistency in demanding professional environments.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
