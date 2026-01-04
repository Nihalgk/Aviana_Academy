"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout369() {
    return (
        <section id="aviana" className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
                    <div className="mx-auto max-w-lg text-center">

                        <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                            Professional development
                        </h2>
                        <p className="md:text-md">
                            Tailored training for leaders and organizations
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 md:gap-8">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
                        <div className="grid grid-cols-1 border border-border-primary sm:col-span-2 sm:row-span-1 sm:grid-cols-2">
                            <div className="flex flex-1 flex-col justify-center p-6">
                                <div>
                                    <p className="mb-2 text-sm font-semibold">Training</p>
                                    <h3 className="mb-2 text-xl font-bold md:text-2xl">
                                        Train the Trainer
                                    </h3>
                                    <p>
                                        Transform facilitators into dynamic trainers with our proven Train the Trainer framework. Harness advanced methodologies to design, deliver, and evaluate high-impact learning experiences.
                                    </p>
                                </div>
                                <div className="mt-5 flex flex-wrap items-center gap-4 md:mt-6">
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <img
                                    src="/images/home/im2.jpeg"
                                    alt="Aviana placeholder image 3"
                                    className="size-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex h-full flex-col border border-border-primary">
                            <div className="flex flex-1 flex-col justify-center p-6">
                                <div>
                                    <p className="mb-2 text-sm font-semibold">Coaching</p>
                                    <h3 className="mb-2 text-xl font-bold md:text-2xl">
                                        Behavioural Coaching
                                    </h3>
                                    <p>Experience deep behavioural change through actionable coaching using FIRO - B assessments that bridges the gap between intention and impact.</p>
                                </div>
                                <div className="mt-5 flex items-center gap-4 md:mt-6">
                                </div>
                            </div>
                            <div className="relative h-[300px] min-h-[250px]">
                                <img
                                    src="/images/home/touse5.png"
                                    alt="Aviana placeholder image 1"
                                    className="absolute inset-0 size-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex h-full flex-col border border-border-primary">
                            <div className="flex flex-1 flex-col justify-center p-6">
                                <div>
                                    <p className="mb-2 text-sm font-semibold">Transformation</p>
                                    <h3 className="mb-2 text-xl font-bold md:text-2xl">
                                        Styling & Transformation
                                    </h3>
                                    <p>Redefine your presence with our signature styling and transformation journeys. From wardrobe to executive grooming, craft an authentic image that inspires respect and leaves a lasting impression.</p>
                                </div>
                                <div className="mt-5 flex items-center gap-4 md:mt-6">
                                </div>
                            </div>
                            <div className="relative h-[300px] min-h-[250px]">
                                <img
                                    src="/images/home/touse6.png"
                                    alt="Aviana placeholder image 2"
                                    className="absolute inset-0 size-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
