"use client";

import { Button } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { RxChevronRight } from "react-icons/rx";

const useRelume = () => {
    const [hoveredFeatureIdx, setHoveredFeatureIdx] = useState(null);
    const handleMouseEnter = (index) => () => {
        setHoveredFeatureIdx(index);
    };
    const handleMouseLeave = () => {
        setHoveredFeatureIdx(null);
    };
    const startAnimation = (index) => {
        return hoveredFeatureIdx === index ? "visible" : "hidden";
    };
    return {
        handleMouseEnter,
        handleMouseLeave,
        startAnimation,
    };
};

export function Layout423() {
    const hoverState = useRelume();
    return (
        <section id="aviana" className="px-[5%] py-8 md:py-12 lg:py-14">
            <div className="container">
                <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
                    <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                        Core offerings
                    </h2>
                    <p className="md:text-md">What we deliver</p>
                </div>
                <div className="flex flex-col justify-between gap-6 md:gap-8 lg:flex-row">
                    <a
                        href="#"
                        className="relative flex w-full flex-col overflow-hidden lg:h-full lg:w-1/2 lg:transition-all lg:duration-200 lg:hover:w-[70%]"
                        onMouseOver={hoverState.handleMouseEnter(0)}
                        onMouseLeave={hoverState.handleMouseLeave}
                    >
                        <div className="absolute inset-0 flex size-full flex-col items-center justify-center self-start">
                            <div className="absolute inset-0 bg-black/50" />
                            <img
                                src="/images/Institutional training/im1.jpeg"
                                alt="Campus-to-Corporate Readiness"
                                className="size-full object-cover"
                            />
                        </div>
                        <div className="group relative flex h-full min-h-[70vh] flex-col justify-end p-6 md:p-8">
                            <div className="lg:absolute lg:inset-0 lg:z-0 lg:transition-all lg:duration-300 lg:group-hover:bg-black/50" />
                            <div className="z-10">
                                <p className="mb-2 font-semibold text-text-alternative">
                                    Campus to Corporate
                                </p>
                                <h3 className="text-2xl font-bold text-text-alternative md:text-3xl md:leading-[1.3] lg:text-4xl">
                                    Campus-to-Corporate Readiness
                                </h3>
                                <div className="lg:hidden">
                                    <p className="mt-5 text-text-alternative md:mt-6">
                                        At Aviana Academy students are prepared to transition confidently from academic life to professional workplaces by building the mindset, behaviour, and skills expected in modern organisations.
                                    </p>
                                    <div className="mt-4 text-text-alternative">
                                        <ul className="list-disc pl-4 text-sm space-y-1">
                                            <li>Understanding corporate culture, roles, and expectations</li>
                                            <li>Professional communication, etiquette, and workplace behaviour</li>
                                            <li>Confidence, accountability, and early-career professionalism</li>
                                            <li>Managing time, priorities, and responsibilities effectively</li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                            <AnimatePresence>
                                <motion.div
                                    className="z-10 hidden lg:block lg:w-[340px]"
                                    variants={{
                                        hidden: { opacity: 0, height: 0, y: 50 },
                                        visible: { opacity: 1, height: "auto", y: 0 },
                                    }}
                                    initial="hidden"
                                    animate={hoverState.startAnimation(0)}
                                    exit="hidden"
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <p className="mt-5 text-text-alternative md:mt-6">
                                        At Aviana Academy students are prepared to transition confidently from academic life to professional workplaces by building the mindset, behaviour, and skills expected in modern organisations.
                                    </p>
                                    <div className="mt-4 text-text-alternative">
                                        <ul className="list-disc pl-4 text-sm space-y-1">
                                            <li>Understanding corporate culture, roles, and expectations</li>
                                            <li>Professional communication, etiquette, and workplace behaviour</li>
                                            <li>Confidence, accountability, and early-career professionalism</li>
                                            <li>Managing time, priorities, and responsibilities effectively</li>
                                        </ul>
                                    </div>

                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </a>
                    <a
                        href="#"
                        className="relative flex w-full flex-col overflow-hidden lg:h-full lg:w-1/2 lg:transition-all lg:duration-200 lg:hover:w-[70%]"
                        onMouseOver={hoverState.handleMouseEnter(1)}
                        onMouseLeave={hoverState.handleMouseLeave}
                    >
                        <div className="absolute inset-0 flex size-full flex-col items-center justify-center self-start">
                            <div className="absolute inset-0 bg-black/50" />
                            <img
                                src="/images/Institutional training/im2.jpeg"
                                alt="Student Employability & Skill Enhancement"
                                className="size-full object-cover"
                            />
                        </div>
                        <div className="group relative flex h-full min-h-[70vh] flex-col justify-end p-6 md:p-8">
                            <div className="lg:absolute lg:inset-0 lg:z-0 lg:transition-all lg:duration-300 lg:group-hover:bg-black/50" />
                            <div className="z-10">
                                <p className="mb-2 font-semibold text-text-alternative">
                                    Student Success
                                </p>
                                <h3 className="text-2xl font-bold text-text-alternative md:text-3xl md:leading-[1.3] lg:text-4xl">
                                    Student Employability & Skill Enhancement
                                </h3>
                                <div className="lg:hidden">
                                    <p className="mt-5 text-text-alternative md:mt-6">
                                        Students are equipped with practical, future-ready skills that improve employability, confidence, and professional effectiveness across academic and workplace settings.
                                    </p>
                                    <div className="mt-4 text-text-alternative">
                                        <ul className="list-disc pl-4 text-sm space-y-1">
                                            <li>Professional presence, grooming, and first impressions</li>
                                            <li>Communication skills, body language, and workplace etiquette</li>
                                            <li>Interview readiness and early-career professionalism</li>
                                            <li>Self-awareness, confidence, and behavioural effectiveness</li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                            <AnimatePresence>
                                <motion.div
                                    className="z-10 hidden lg:block lg:w-[340px]"
                                    variants={{
                                        hidden: { opacity: 0, height: 0, y: 50 },
                                        visible: { opacity: 1, height: "auto", y: 0 },
                                    }}
                                    initial="hidden"
                                    animate={hoverState.startAnimation(1)}
                                    exit="hidden"
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <p className="mt-5 text-text-alternative md:mt-6">
                                        Students are equipped with practical, future-ready skills that improve employability, confidence, and professional effectiveness across academic and workplace settings.
                                    </p>
                                    <div className="mt-4 text-text-alternative">
                                        <ul className="list-disc pl-4 text-sm space-y-1">
                                            <li>Professional presence, grooming, and first impressions</li>
                                            <li>Communication skills, body language, and workplace etiquette</li>
                                            <li>Interview readiness and early-career professionalism</li>
                                            <li>Self-awareness, confidence, and behavioural effectiveness</li>
                                        </ul>
                                    </div>

                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </a>
                    <a
                        href="#"
                        className="relative flex w-full flex-col overflow-hidden lg:h-full lg:w-1/2 lg:transition-all lg:duration-200 lg:hover:w-[70%]"
                        onMouseOver={hoverState.handleMouseEnter(2)}
                        onMouseLeave={hoverState.handleMouseLeave}
                    >
                        <div className="absolute inset-0 flex size-full flex-col items-center justify-center self-start">
                            <div className="absolute inset-0 bg-black/50" />
                            <img
                                src="/images/Institutional training/ins1.jpeg"
                                alt="Student Leadership & Personal Effectiveness"
                                className="size-full object-cover"
                            />
                        </div>
                        <div className="group relative flex h-full min-h-[70vh] flex-col justify-end p-6 md:p-8">
                            <div className="lg:absolute lg:inset-0 lg:z-0 lg:transition-all lg:duration-300 lg:group-hover:bg-black/50" />
                            <div className="z-10">
                                <p className="mb-2 font-semibold text-text-alternative">
                                    Student Leadership
                                </p>
                                <h3 className="text-2xl font-bold text-text-alternative md:text-3xl md:leading-[1.3] lg:text-4xl">
                                    Student Leadership & Personal Effectiveness
                                </h3>
                                <div className="lg:hidden">
                                    <p className="mt-5 text-text-alternative md:mt-6">
                                        We develop confident, self-aware student leaders who take ownership of their actions, communicate effectively, and lead with integrity in academic and professional settings.
                                    </p>
                                    <div className="mt-4 text-text-alternative">
                                        <ul className="list-disc pl-4 text-sm space-y-1">
                                            <li>Leadership mindset, accountability, and ownership</li>
                                            <li>Decision-making, initiative, and responsibility</li>
                                            <li>Assertive communication and interpersonal effectiveness</li>
                                            <li>Time, energy, and self-management skills</li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                            <AnimatePresence>
                                <motion.div
                                    className="z-10 hidden lg:block lg:w-[340px]"
                                    variants={{
                                        hidden: { opacity: 0, height: 0, y: 50 },
                                        visible: { opacity: 1, height: "auto", y: 0 },
                                    }}
                                    initial="hidden"
                                    animate={hoverState.startAnimation(2)}
                                    exit="hidden"
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <p className="mt-5 text-text-alternative md:mt-6">
                                        We develop confident, self-aware student leaders who take ownership of their actions, communicate effectively, and lead with integrity in academic and professional settings.
                                    </p>
                                    <div className="mt-4 text-text-alternative">
                                        <ul className="list-disc pl-4 text-sm space-y-1">
                                            <li>Leadership mindset, accountability, and ownership</li>
                                            <li>Decision-making, initiative, and responsibility</li>
                                            <li>Assertive communication and interpersonal effectiveness</li>
                                            <li>Time, energy, and self-management skills</li>
                                        </ul>
                                    </div>

                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
