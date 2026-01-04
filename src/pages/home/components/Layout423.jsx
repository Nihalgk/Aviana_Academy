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

import { Link } from "react-router-dom";

export function Layout423() {
    const hoverState = useRelume();
    return (
        <section id="aviana" className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">

                    <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                        What we offer
                    </h2>
                    <p className="md:text-md">
                        Comprehensive programs designed for serious professionals
                    </p>
                </div>
                <div className="flex flex-col justify-between gap-6 md:gap-8 lg:flex-row">
                    <Link
                        to="/corporate-training"
                        className="relative flex w-full flex-col overflow-hidden lg:h-full lg:w-1/2 lg:transition-all lg:duration-200 lg:hover:w-[70%]"
                        onMouseOver={hoverState.handleMouseEnter(0)}
                        onMouseLeave={hoverState.handleMouseLeave}
                    >
                        <div className="absolute inset-0 flex size-full flex-col items-center justify-center self-start">
                            <div className="absolute inset-0 bg-black/50" />
                            <img
                                src="/images/home/touse1.png"
                                alt="Executive development programs"
                                className="size-full object-cover"
                            />
                        </div>
                        <div className="group relative flex h-full min-h-[70vh] flex-col justify-end p-6 md:p-8">
                            <div className="lg:absolute lg:inset-0 lg:z-0 lg:transition-all lg:duration-300 lg:group-hover:bg-black/50" />
                            <div className="z-10">
                                <p className="mb-2 font-semibold text-text-alternative">
                                    Corporate
                                </p>
                                <h3 className="text-2xl font-bold text-text-alternative md:text-3xl md:leading-[1.3] lg:text-4xl">
                                    Corporate Training
                                </h3>
                                <div className="lg:hidden">
                                    <p className="mt-5 text-text-alternative md:mt-6">
                                        Drive performance and culture change with engaging, industry-relevant corporate training. Integrate design thinking approaches to inspire innovation, problem-solving, and a culture of continuous improvement.
                                    </p>

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
                                        Drive performance and culture change with engaging, industry-relevant corporate training. Integrate design thinking approaches to inspire innovation, problem-solving, and a culture of continuous improvement.
                                    </p>
                                    <div className="mt-6 md:mt-8">
                                        <Button
                                            variant="link"
                                            size="link"
                                            iconRight={<RxChevronRight />}
                                            className="text-text-alternative"
                                        >
                                            Button
                                        </Button>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </Link>
                    <Link
                        to="/individual-coaching#aviana"
                        className="relative flex w-full flex-col overflow-hidden lg:h-full lg:w-1/2 lg:transition-all lg:duration-200 lg:hover:w-[70%]"
                        onMouseOver={hoverState.handleMouseEnter(1)}
                        onMouseLeave={hoverState.handleMouseLeave}
                    >
                        <div className="absolute inset-0 flex size-full flex-col items-center justify-center self-start">
                            <div className="absolute inset-0 bg-black/50" />
                            <img
                                src="/images/home/touse2.jpeg"
                                alt="Aviana placeholder image 2"
                                className="size-full object-cover"
                            />
                        </div>
                        <div className="group relative flex h-full min-h-[70vh] flex-col justify-end p-6 md:p-8">
                            <div className="lg:absolute lg:inset-0 lg:z-0 lg:transition-all lg:duration-300 lg:group-hover:bg-black/50" />
                            <div className="z-10">
                                <p className="mb-2 font-semibold text-text-alternative">
                                    Communication
                                </p>
                                <h3 className="text-2xl font-bold text-text-alternative md:text-3xl md:leading-[1.3] lg:text-4xl">
                                    Communication Mastery
                                </h3>
                                <div className="lg:hidden">
                                    <p className="mt-5 text-text-alternative md:mt-6">
                                        Master the art of impactful communication with programs that transform the way you speak, listen, and connect. Build clarity, influence, and trust
                                    </p>

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
                                        Master the art of impactful communication with programs that transform the way you speak, listen, and connect. Build clarity, influence, and trust
                                    </p>
                                    <div className="mt-6 md:mt-8">
                                        <Button
                                            variant="link"
                                            size="link"
                                            iconRight={<RxChevronRight />}
                                            className="text-text-alternative"
                                        >
                                            Button
                                        </Button>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </Link>
                    <Link
                        to="/image-management"
                        className="relative flex w-full flex-col overflow-hidden lg:h-full lg:w-1/2 lg:transition-all lg:duration-200 lg:hover:w-[70%]"
                        onMouseOver={hoverState.handleMouseEnter(2)}
                        onMouseLeave={hoverState.handleMouseLeave}
                    >
                        <div className="absolute inset-0 flex size-full flex-col items-center justify-center self-start">
                            <div className="absolute inset-0 bg-black/50" />
                            <img
                                src="/images/home/touse3.jpeg"
                                alt="Aviana placeholder image 3"
                                className="size-full object-cover"
                            />
                        </div>
                        <div className="group relative flex h-full min-h-[70vh] flex-col justify-end p-6 md:p-8">
                            <div className="lg:absolute lg:inset-0 lg:z-0 lg:transition-all lg:duration-300 lg:group-hover:bg-black/50" />
                            <div className="z-10">
                                <p className="mb-2 font-semibold text-text-alternative">
                                    Persona
                                </p>
                                <h3 className="text-2xl font-bold text-text-alternative md:text-3xl md:leading-[1.3] lg:text-4xl">
                                    Persona Enhancement
                                </h3>
                                <div className="lg:hidden">
                                    <p className="mt-5 text-text-alternative md:mt-6">
                                        Unlock your potential with expert-led personality enhancement that empowers confidence, self-awareness, and a refined personal brand.
                                    </p>

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
                                        Unlock your potential with expert-led personality enhancement that empowers confidence, self-awareness, and a refined personal brand.
                                    </p>
                                    <div className="mt-6 md:mt-8">
                                        <Button
                                            variant="link"
                                            size="link"
                                            iconRight={<RxChevronRight />}
                                            className="text-text-alternative"
                                        >
                                            Button
                                        </Button>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </Link>
                </div >
            </div >
        </section >
    );
}
