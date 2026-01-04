"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout213_1() {
    return (
        <section id="aviana" className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
                    <div className="order-2 md:order-1">
                        <img
                            src="/images/Institutional training/ttt1.jpeg"
                            className="w-full h-[450px] object-cover rounded-xl"
                            alt="Aviana placeholder image"
                        />
                    </div>
                    <div className="order-1 md:order-2">


                        <div className="mt-8">
                            <h3 className="mb-3 text-2xl font-bold md:text-3xl">Train the Trainer (TTT)</h3>
                            <p className="mb-4">
                                We equip trainers and facilitators with the skills to design, deliver, and evaluate impactful learning experiences across academic and professional settings.
                            </p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Adult learning principles and learner engagement</li>
                                <li>Training needs analysis and programme design</li>
                                <li>Presentation, delivery, and facilitation skills</li>
                                <li>Classroom management, evaluation, and feedback</li>
                            </ul>
                        </div>
                        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                            <Button title="Discover" variant="secondary">
                                Discover
                            </Button>
                            <Button
                                title="Read"
                                variant="link"
                                size="link"
                                iconRight={<RxChevronRight />}
                            >
                                Read
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
