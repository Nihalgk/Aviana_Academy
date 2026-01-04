"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout16() {
    return (
        <section id="aviana" className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                    <div>
                        <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                            Performance Improvement Through Measurable Action
                        </h1>
                        <p className="mb-5 text-base md:mb-6 md:text-md">
                            Performance gaps often come from unclear expectations, weak
                            communication, and misaligned behaviors.
                        </p>
                        <p className="mb-5 text-base md:mb-6 md:text-md">
                            We diagnose where productivity breaks down and implement practical systems that improve focus, accountability, and execution.
                        </p>
                        <div className="py-2">
                            <h3 className="mb-3 font-bold text-md">What We Do</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Identify gaps in execution & behavior</li>
                                <li>Build accountability and ownership structures</li>
                                <li>Strengthen communication and decision flow</li>
                                <li>Track progress with clear performance indicators</li>
                            </ul>
                        </div>

                    </div>
                    <div className="w-full overflow-hidden rounded-xl">
                        <img
                            src="/images/Coporate Training/doc5.jpeg"
                            className="w-full h-[450px] md:h-[600px] object-cover"
                            alt="Aviana placeholder image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
