"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout410() {
    return (
        <section id="aviana" className="px-[5%] py-8 md:py-12 lg:py-14">
            <div className="container">
                <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">

                    <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                        What we offer
                    </h1>

                </div>
                <div className="relative grid auto-cols-fr grid-cols-1 gap-6 md:gap-0">
                    <div
                        className="grid grid-cols-1 content-center overflow-hidden border border-border-primary bg-neutral-white md:sticky md:mb-[15vh] md:h-[70vh] md:grid-cols-2"
                        style={{ top: "15%" }}
                    >
                        <div className="order-first flex flex-col justify-center p-6 md:p-8 lg:p-12 md:order-last">
                            <h2 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                                Corporate training
                            </h2>
                            <p>
                                We partner with organisations to deliver customised corporate
                                training that enhances professional presence, behavioural skills,
                                and leadership capability driving measurable impact at individual
                                and team levels.
                            </p>

                        </div>
                        <div className="order-last flex flex-col items-center justify-center md:order-first">
                            <img
                                loading="lazy"
                                src="/images/our-services/img3.jpeg"
                                alt="Aviana Service Image 1"
                                className="rounded-none"
                            />
                        </div>
                    </div>
                    <div
                        className="grid grid-cols-1 border border-border-primary bg-neutral-white md:sticky md:mb-[15vh] md:h-[70vh] md:grid-cols-2"
                        style={{ top: "18%" }}
                    >
                        <div className="order-first flex flex-col justify-center p-6 md:p-8 lg:p-12 md:order-first">
                            <h2 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                                Institutional Training
                            </h2>
                            <p>
                                Our Institutional Training programmes are designed to equip
                                students and faculty with essential professional, behavioural,
                                and workplace readiness skills. We bridge the gap between
                                academics and real-world expectations through structured,
                                engaging learning.
                            </p>

                        </div>
                        <div className="order-last h-full w-full md:order-last">
                            <img
                                loading="lazy"
                                src="/images/our-services/img4.png"
                                alt="Aviana Service Image 2"
                                className="w-full h-full object-cover rounded-none"
                            />
                        </div>
                    </div>
                    <div
                        className="grid grid-cols-1 border border-border-primary bg-neutral-white md:sticky md:mb-[15vh] md:h-[70vh] md:grid-cols-2"
                        style={{ top: "21%" }}
                    >
                        <div className="order-first flex flex-col justify-center p-6 md:p-8 lg:p-12 md:order-last">
                            <h2 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                                Individual Coaching
                            </h2>
                            <p>
                                Individual Coaching is a one-on-one journey designed to unlock
                                your potential, strengthen self-awareness, and drive meaningful
                                behavioural change aligned with your personal and professional
                                goals.
                            </p>

                        </div>
                        <div className="order-last h-full w-full md:order-first">
                            <img
                                loading="lazy"
                                src="/images/our-services/img2.png"
                                alt="Aviana Service Image 3"
                                className="w-full h-full object-cover rounded-none"
                            />
                        </div>
                    </div>
                    <div
                        className="grid grid-cols-1 content-center overflow-hidden border border-border-primary bg-neutral-white md:sticky md:mb-[15vh] md:h-[70vh] md:grid-cols-2"
                        style={{ top: "24%" }}
                    >
                        <div className="order-first flex flex-col justify-center p-6 md:p-8 lg:p-12 md:order-first">
                            <h2 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                                Personal branding & Image Transformation
                            </h2>
                            <p>
                                Project confidence, credibility, and professionalism through our
                                Image Management and Personal Branding sessions ensuring your
                                presence aligns with your personal and professional goals.
                            </p>

                        </div>
                        <div className="order-last flex flex-col items-center justify-center md:order-last">
                            <img
                                loading="lazy"
                                src="/images/our-services/img1.jpeg"
                                alt="Aviana Service Image 4"
                                className="rounded-none"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
