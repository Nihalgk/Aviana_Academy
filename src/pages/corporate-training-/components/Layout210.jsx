"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout210() {
    return (
        <section id="aviana" className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1.5fr_1fr] lg:gap-x-20">
                    <div className="order-2 md:order-1 overflow-hidden rounded-xl">
                        <img
                            src="/images/Coporate Training/doc2.jpeg"
                            className="w-full h-full min-h-[650px] object-cover"
                            alt="Aviana placeholder image"
                        />
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                            Team Building That Creates Real Cohesion
                        </h2>
                        <p className="mb-5 md:mb-6 md:text-md">
                            Strong teams are built through trust, clarity, and shared ownership.
                        </p>
                        <p className="mb-5 md:mb-6 md:text-md">
                            Our team-building workshops are experiential, reflective, and
                            outcome-driven, designed to improve collaboration and working
                            relationships.
                        </p>
                        <div className="py-2">
                            <h3 className="mb-3 font-bold text-md">Focus Areas</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Team Communication & Collaboration</li>
                                <li>Interpersonal Skills (FIRO-B Based)</li>
                                <li>Trust Building & Role Clarity</li>
                                <li>Cross-Functional Effectiveness</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
