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
                                Vani Satish is a Behavioural & Transformation Coach and Certified Soft Skills Trainer with over 8+ years of experience in developing communication, leadership, and professional presence across individuals, institutions, and corporate organizations. She is known for designing learning experiences that are practical, engaging, and rooted in real behavioural change.
                            </p>
                            <p>
                                With a strong foundation in FIRO-B, Design Thinking, and Instructional Design, she blends behavioural science with experiential learning to help professionals express clearly, connect meaningfully, and perform confidently. Her work focuses on enabling individuals to not just learn skills, but practice and live them in everyday professional settings.
                            </p>
                            <p>
                                Beyond training, she is also an Image Consultant and Executive Coach, helping professionals elevate both their presence and performance. Through Aviana Academy, she continues to create structured, empathetic, and impactful learning journeys that drive lasting transformation.
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
