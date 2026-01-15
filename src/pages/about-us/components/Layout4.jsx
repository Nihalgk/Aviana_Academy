"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { Link } from "react-router-dom";

export function Layout4() {
    return (
        <section id="aviana" className="px-[5%] py-8 md:py-12 lg:py-14">
            <div className="container">
                <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                    <div>
                        <p className="mb-3 font-semibold md:mb-4">Founder & Lead Trainer</p>
                        <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                            Vani Satish
                        </h1>
                        <div className="mb-6 md:mb-8 md:text-md space-y-4">
                            <p>
                                Founded by a visionary expert in Image Management and Soft Skills, Aviana Academy was born from a passion for bridging the gap between technical competence and professional presence. With a legacy of training 5000+ professionals, our founder brings a globally benchmarked approach to behavioral coaching, helping leaders across Fortune 500 companies and prestigious institutions like MAHE and GIMS master the art of executive influence.
                            </p>
                        </div>
                        <div className="py-2">
                            <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                                Areas of Expertise
                            </h6>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Communication & Interpersonal Skills</li>
                                    <li>Leadership Development</li>
                                    <li>Behavioural & Transformation Coaching</li>
                                </ul>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Emotional Intelligence</li>
                                    <li>Executive Presence & Image Management</li>
                                    <li>Campus to Corporate Readiness</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                            <Link to="/contact">
                                <Button
                                    title="Contact"
                                    variant="link"
                                    size="link"
                                    iconRight={<RxChevronRight />}
                                >
                                    Contact
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <img
                            src="/images/about-us/founder.jpg"
                            className="w-full object-cover"
                            alt="Vani Satish"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
