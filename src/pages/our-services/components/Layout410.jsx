"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

import { Link } from "react-router-dom";

export function Layout410() {
    return (
        <section id="aviana" className="px-[5%] py-8 md:py-12 lg:py-14">
            <div className="container">
                <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">

                    <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                        Our Training & Coaching Solutions
                    </h1>
                    <p className="md:text-md">
                        Customised learning interventions for corporates, institutions, and individuals focused on measurable professional growth.
                    </p>

                </div>
                <div className="relative grid auto-cols-fr grid-cols-1 gap-6 md:gap-0">
                    <div
                        className="grid grid-cols-1 content-center overflow-hidden border border-border-primary bg-neutral-white md:sticky md:mb-[15vh] md:min-h-[70vh] md:grid-cols-2 z-10"
                        style={{ top: "15vh" }}
                    >
                        <div className="order-first flex flex-col justify-center p-6 md:p-8 lg:p-8 md:order-last">
                            <p className="mb-2 font-semibold text-neutral-500">For Organisations & Teams</p>
                            <h2 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                                Corporate training
                            </h2>
                            <div className="mb-6">
                                <p className="mb-2 font-bold">Corporate Training Outcomes:</p>
                                <ul className="list-disc pl-5">
                                    <li>Stronger leadership presence</li>
                                    <li>Clear, confident workplace communication</li>
                                    <li>Improved team effectiveness & collaboration</li>
                                    <li>Behavioural alignment with organisational goals</li>
                                </ul>
                            </div>
                            <div className="mt-4">
                                <Link to="/corporate-training">
                                    <Button variant="secondary">
                                        🔵 Request Corporate Training Details
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="order-last flex flex-col items-center justify-center md:order-first">
                            <img
                                loading="lazy"
                                src="/images/our-services/img3.jpeg"
                                alt="Corporate Training Programs - Leadership & Team Building"
                                className="rounded-none"
                            />
                        </div>
                    </div>
                    <div
                        className="grid grid-cols-1 overflow-hidden border border-border-primary bg-neutral-white md:sticky md:mb-[15vh] md:min-h-[70vh] md:grid-cols-2 z-20"
                        style={{ top: "18vh" }}
                    >
                        <div className="order-first flex flex-col justify-center p-6 md:p-8 lg:p-8 md:order-first">
                            <p className="mb-2 font-semibold text-neutral-500">For Colleges, Universities & Faculty</p>
                            <h2 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                                Institutional Training
                            </h2>
                            <div className="mb-6">
                                <p className="mb-2 font-bold">Programs Include:</p>
                                <ul className="list-disc pl-5">
                                    <li>Campus-to-corporate readiness</li>
                                    <li>Communication & professional etiquette</li>
                                    <li>Leadership foundations for students</li>
                                    <li>Faculty development workshops</li>
                                </ul>
                            </div>
                            <div className="mt-4">
                                <Link to="/institutional-training">
                                    <Button variant="secondary">
                                        🔵 Discuss Institutional Programs
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="order-last h-full w-full md:order-last">
                            <img
                                loading="lazy"
                                src="/images/our-services/img4.png"
                                alt="Institutional Training for Students & Faculty"
                                className="w-full h-full object-cover rounded-none"
                            />
                        </div>
                    </div>
                    <div
                        className="grid grid-cols-1 overflow-hidden border border-border-primary bg-neutral-white md:sticky md:mb-[15vh] md:min-h-[70vh] md:grid-cols-2 z-30"
                        style={{ top: "21vh" }}
                    >
                        <div className="order-first flex flex-col justify-center p-6 md:p-8 lg:p-8 md:order-last">
                            <p className="mb-2 font-semibold text-neutral-500">For Working Professionals & Leaders</p>
                            <h2 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                                Individual Coaching
                            </h2>
                            <div className="mb-6">
                                <p className="mb-2 font-bold">Key Benefits:</p>
                                <ul className="list-disc pl-5">
                                    <li>Build confidence and self-awareness</li>
                                    <li>Communicate assertively at work</li>
                                    <li>Navigate career transitions</li>
                                    <li>Strengthen leadership mindset</li>
                                </ul>
                            </div>
                            <div className="mt-4">
                                <Link to="/individual-coaching">
                                    <Button variant="secondary">
                                        🔵 Book a Coaching Discovery Call
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="order-last h-full w-full md:order-first">
                            <img
                                loading="lazy"
                                src="/images/our-services/img2.png"
                                alt="Individual Coaching & Professional Development"
                                className="w-full h-full object-cover rounded-none"
                            />
                        </div>
                    </div>
                    <div
                        className="grid grid-cols-1 overflow-hidden border border-border-primary bg-neutral-white md:sticky md:mb-[15vh] md:min-h-[70vh] md:grid-cols-2 z-40"
                        style={{ top: "24vh" }}
                    >
                        <div className="order-first flex flex-col justify-center p-6 md:p-8 lg:p-8 md:order-first">
                            <h2 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                                Executive Presence, Personal Branding & Image Transformation
                            </h2>
                            <p className="mb-6">
                                Designed for professionals who want their appearance, communication, and presence to align with leadership roles.
                            </p>
                            <div className="mb-6">
                                <ul className="list-disc pl-5">
                                    <li>Professional credibility & presence</li>
                                    <li>Strategic wardrobe & grooming guidance</li>
                                    <li>Alignment between role, personality & image</li>
                                </ul>
                            </div>
                            <div className="mt-4">
                                <Link to="/image-management">
                                    <Button variant="secondary">
                                        🔵 Explore Executive Presence Program
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="order-last h-full w-full md:order-last">
                            <img
                                loading="lazy"
                                src="/images/our-services/img1.jpeg"
                                alt="Personal Branding & Image Transformation"
                                className="w-full h-full object-cover object-[50%_30%] rounded-none"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
