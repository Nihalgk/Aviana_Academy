"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@relume_io/relume-ui";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const useCarousel = () => {
    const [api, setApi] = useState();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }
        setCurrent(api.selectedScrollSnap() + 1);
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    const handleDotClick = (index) => () => {
        if (api) {
            api.scrollTo(index);
        }
    };

    const dotClassName = (index) => {
        return `mx-[3px] inline-block size-2 rounded-full ${current === index + 1 ? "bg-black" : "bg-neutral-light"
            }`;
    };

    return { api, setApi, current, handleDotClick, dotClassName };
};

export function Testimonial42() {
    const carouselState = useCarousel();
    return (
        <section
            id="aviana"
            className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28"
        >
            <div className="container">
                <div className="grid auto-cols-fr grid-cols-1 items-center gap-12 md:gap-16 lg:grid-cols-2 lg:gap-20">
                    <div className="w-full max-w-md lg:mb-24">
                        <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                            What leaders say
                        </h2>
                        <p className="md:text-md">
                            Real results from professionals who transformed through our
                            programs
                        </p>
                    </div>
                    <Carousel
                        setApi={carouselState.setApi}
                        opts={{ loop: true, align: "start" }}
                        className="overflow-hidden"
                    >
                        <CarouselContent>
                            <CarouselItem className="basis-full">
                                <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
                                    <div className="mb-5 flex md:mb-6">
                                        <FaStar className="size-6" />
                                        <FaStar className="size-6" />
                                        <FaStar className="size-6" />
                                        <FaStar className="size-6" />
                                        <FaStar className="size-6" />
                                    </div>
                                    <blockquote className="md:text-md">
                                        "Felt more confident, prepared, and professional after the
                                        sessions"
                                    </blockquote>
                                    <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                                        <div>
                                            <img
                                                src="/images/about-us/srin1.jpeg"
                                                alt="Srinivas K - Testimonial avatar"
                                                className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-semibold">Srinivas K</p>
                                            <p>VP Operations, TechKorp</p>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="basis-full">
                                <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
                                    <div className="mb-5 flex md:mb-6">
                                        <FaStar className="size-6" />
                                        <FaStar className="size-6" />
                                        <FaStar className="size-6" />
                                        <FaStar className="size-6" />
                                        <FaStar className="size-6" />
                                    </div>
                                    <blockquote className="md:text-md">
                                        "A valuable learning experience focused on clarity,
                                        confidence, and performance"
                                    </blockquote>
                                    <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                                        <div>
                                            <img
                                                src="/images/about-us/mon.jpeg"
                                                alt="Monica V - Testimonial avatar"
                                                className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-semibold">Monica V</p>
                                            <p>Cloud engineer, OpenText</p>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="basis-full">
                                <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
                                    <div className="mb-5 flex md:mb-6">
                                        <FaStar className="size-6" />
                                        <FaStar className="size-6" />
                                        <FaStar className="size-6" />
                                        <FaStar className="size-6" />
                                        <FaStar className="size-6" />
                                    </div>
                                    <blockquote className="md:text-md">
                                        "Training that prepares you for the real workplace — not
                                        just theory"
                                    </blockquote>
                                    <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                                        <div>
                                            <img
                                                src="/images/about-us/av.jpeg"
                                                alt="Avinash - Testimonial avatar"
                                                className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-semibold">Avinash</p>
                                            <p>AI/ML engineer, JusPay</p>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="basis-full">
                                <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
                                    <div className="mb-5 flex md:mb-6">
                                        <FaStar className="size-6" />
                                        <FaStar className="size-6" />
                                        <FaStar className="size-6" />
                                        <FaStar className="size-6" />
                                        <FaStar className="size-6" />
                                    </div>
                                    <blockquote className="md:text-md">
                                        "A valuable learning experience focused on clarity,
                                        confidence, and performance."
                                    </blockquote>
                                    <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                                        <div>
                                            <img
                                                src="/images/about-us/nab.jpeg"
                                                alt="Nabila - Testimonial avatar"
                                                className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-semibold">Nabila</p>
                                            <p>Team Lead, Gallagher</p>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="basis-full">
                                <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
                                    <div className="mb-5 flex md:mb-6">
                                        <FaStar className="size-6" />
                                        <FaStar className="size-6" />
                                        <FaStar className="size-6" />
                                        <FaStar className="size-6" />
                                        <FaStar className="size-6" />
                                    </div>
                                    <blockquote className="md:text-md">
                                        "Clear, structured sessions with immediate application to
                                        professional life."
                                    </blockquote>
                                    <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                                        <div>
                                            <img
                                                src="/images/about-us/log9.jpeg"
                                                alt="Manvitha A - Testimonial avatar"
                                                className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-semibold">Manvitha A</p>
                                            <p>Log9</p>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="basis-full">
                                <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
                                    <div className="mb-5 flex md:mb-6">
                                        <FaStar className="size-6" />
                                        <FaStar className="size-6" />
                                        <FaStar className="size-6" />
                                        <FaStar className="size-6" />
                                        <FaStar className="size-6" />
                                    </div>
                                    <blockquote className="md:text-md">
                                        "Our leaders came back different. Better equipped to handle
                                        complexity."
                                    </blockquote>
                                    <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                                        <div>
                                            <img
                                                src="/images/about-us/ad.jpeg"
                                                alt="Aditi - Testimonial avatar"
                                                className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-semibold">Aditi</p>
                                            <p>Deloitte</p>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="basis-full">
                                <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
                                    <div className="mb-5 flex md:mb-6">
                                        <FaStar className="size-6" />
                                        <FaStar className="size-6" />
                                        <FaStar className="size-6" />
                                        <FaStar className="size-6" />
                                        <FaStar className="size-6" />
                                    </div>
                                    <blockquote className="md:text-md">
                                        "This is the real thing. Not theory. Practical leadership
                                        that works."
                                    </blockquote>
                                    <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                                        <div>
                                            <img
                                                src="/images/about-us/gims.jpeg"
                                                alt="Rohan M - Testimonial avatar"
                                                className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-semibold">Rohan M</p>
                                            <p>GIMS</p>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                        <div className="mt-12 flex items-center justify-between">
                            <div className="mt-5 flex w-full items-start justify-start">
                                <button
                                    onClick={carouselState.handleDotClick(0)}
                                    className={carouselState.dotClassName(0)}
                                />
                                <button
                                    onClick={carouselState.handleDotClick(1)}
                                    className={carouselState.dotClassName(1)}
                                />
                                <button
                                    onClick={carouselState.handleDotClick(2)}
                                    className={carouselState.dotClassName(2)}
                                />
                                <button
                                    onClick={carouselState.handleDotClick(3)}
                                    className={carouselState.dotClassName(3)}
                                />
                                <button
                                    onClick={carouselState.handleDotClick(4)}
                                    className={carouselState.dotClassName(4)}
                                />
                                <button
                                    onClick={carouselState.handleDotClick(5)}
                                    className={carouselState.dotClassName(5)}
                                />
                                <button
                                    onClick={carouselState.handleDotClick(6)}
                                    className={carouselState.dotClassName(6)}
                                />
                            </div>
                            <div className="flex items-end justify-end gap-2 md:gap-4">
                                <CarouselPrevious className="static right-0 top-0 size-12 -translate-y-0" />
                                <CarouselNext className="static right-0 top-0 size-12 -translate-y-0" />
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
