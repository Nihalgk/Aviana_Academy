"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout13() {
    return (
        <section id="aviana" className="px-[5%] py-8 md:py-12 lg:py-14">
            <div className="container">
                <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                    <div>
                        <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                            Executive Leadership Development for Vision & Influence
                        </h2>
                        <p className="mb-5 md:mb-6 md:text-md">
                            Today’s leaders need more than frameworks. They need clarity,
                            emotional intelligence, and the ability to lead people through
                            complexity.
                        </p>
                        <p className="mb-5 md:mb-6 md:text-md">
                            We develop leaders who think strategically, communicate decisively,
                            and model the behaviors that drive trust and performance.
                        </p>
                        <div className="py-2">
                            <h3 className="mb-3 font-bold text-md">Focus Areas</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Strategic Thinking & Decision-Making</li>
                                <li>Executive Communication & Presence</li>
                                <li>Emotional Intelligence for Leaders</li>
                                <li>Leading Change & High-Performance Cultures</li>
                            </ul>
                        </div>

                    </div>
                    <div>
                        <img
                            src="/images/Coporate Training/doc3.jpeg"
                            className="w-full object-cover"
                            alt="Aviana placeholder image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
