"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout213() {
    return (
        <section id="aviana" className="px-[5%] py-8 md:py-12 lg:py-14">
            <div className="container">
                <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
                    <div className="order-2 md:order-1">
                        <img
                            src="/images/Institutional training/int1.jpeg"
                            className="w-full h-[450px] object-cover"
                            alt="Soft Skills Training Session"
                            style={{ clipPath: "inset(3% 0 15% 0 round 15px)" }}
                        />
                    </div>
                    <div className="order-1 md:order-2">


                        <div className="mt-8">
                            <h2 className="mb-3 text-2xl font-bold md:text-3xl">Integrity, Ethics & Growth Mindset</h2>
                            <p className="mb-4">
                                We help students build strong ethical foundations and a growth-oriented mindset that guide responsible decision-making, resilience, and long-term professional success.
                            </p>
                            <ul className="mb-8 list-disc pl-5 space-y-1">
                                <li>Integrity, honesty, and ethical decision-making</li>
                                <li>Academic and professional responsibility</li>
                                <li>Growth mindset, adaptability, and learning agility</li>
                                <li>Accountability, resilience, and ethical leadership</li>
                            </ul>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
}
