"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout13() {
    return (
        <section id="aviana" className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                    <div>

                        <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                            Executive Presence is not about fashion it’s about confidence, clarity, and credibility.
                        </h2>
                        <div className="mb-6">
                            <ul className="list-disc pl-4 space-y-1 mb-4">
                                <li>Confident presence in meetings and leadership conversations</li>
                                <li>Clear, assertive communication that earns respect</li>
                                <li>Non-verbal cues that signal authority and trust</li>
                                <li>Role-aligned professional image and behaviour</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <img
                            src="/images/image management/ep1.jpeg"
                            className="w-full object-cover"
                            alt="Executive Presence Coaching"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
