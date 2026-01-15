"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout22() {
    return (
        <section id="aviana" className="px-[5%] py-8 md:py-12 lg:py-14">
            <div className="container">
                <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                    <div>
                        <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                            Management Skills for Modern Teams
                        </h2>
                        <p className="md:text-md mb-4">
                            Managers translate strategy into execution. We equip them with
                            practical tools, people skills, and leadership confidence that shows
                            up in everyday decisions.
                        </p>
                        <p className="md:text-md mb-6">
                            Our programs strengthen how managers communicate, coach, resolve
                            conflict, and drive accountability.
                        </p>
                        <div className="mb-6">
                            <h3 className="mb-3 font-bold text-md">Focus Areas</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>People Management & Feedback</li>
                                <li>Business Communication</li>
                                <li>Conflict Resolution & Negotiation</li>
                                <li>Time, Stress & Priority Management</li>
                            </ul>
                        </div>

                    </div>
                    <div className="w-full overflow-hidden rounded-xl">
                        <img
                            src="/images/Coporate Training/doc4.jpeg"
                            className="w-full h-[450px] md:h-[600px] object-cover"
                            alt="Corporate Leadership Workshop"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
