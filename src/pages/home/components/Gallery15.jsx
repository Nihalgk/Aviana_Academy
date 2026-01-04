"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@relume_io/relume-ui";
import clsx from "clsx";
import React, { useEffect, useState } from "react";

const useCarousel = () => {
    const [api, setApi] = useState();
    const [current, setCurrent] = useState(1);

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
        return clsx("relative mx-[3px] inline-block size-2 rounded-full", {
            "bg-black": current === index + 1,
            "bg-neutral-darker/40": current !== index + 1,
        });
    };

    return { api, setApi, current, handleDotClick, dotClassName };
};

export function Gallery15() {
    const carouselState = useCarousel();
    return (
        <section id="aviana">
            <div className="px-[5%] py-16 md:py-24 lg:py-28">
                <div className="container">
                    <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
                        <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                            See transformation in action
                        </h2>
                        <p className="md:text-md">
                            Moments from our programs and the careers we've shaped
                        </p>
                    </div>
                    <Carousel
                        setApi={carouselState.setApi}
                        opts={{ loop: true, align: "start" }}
                        className="overflow-hidden"
                    >
                        <div className="relative">
                            <CarouselContent className="ml-0">
                                <CarouselItem className="px-0 md:px-16 lg:px-28">
                                    <div className="relative w-full pt-[66.66%]">
                                        <img
                                            src="/images/home/gal4.jpg"
                                            alt="Aviana Gallery Image 1"
                                            className="absolute inset-0 size-full object-cover object-[50%_25%]"
                                        />
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="px-0 md:px-16 lg:px-28">
                                    <div className="relative w-full pt-[66.66%]">
                                        <img
                                            src="/images/home/gal5.jpg"
                                            alt="Aviana Gallery Image 2"
                                            className="absolute inset-0 size-full object-cover"
                                        />
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="px-0 md:px-16 lg:px-28">
                                    <div className="relative w-full pt-[66.66%]">
                                        <img
                                            src="/images/home/gal3.jpg"
                                            alt="Aviana Gallery Image 3"
                                            className="absolute inset-0 size-full object-cover"
                                        />
                                    </div>
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious className="hidden md:flex md:size-12 lg:size-14" />
                            <CarouselNext className="hidden md:flex md:size-12 lg:size-14" />
                        </div>
                        <div className="mt-[30px] flex items-center justify-center md:mt-[46px]">
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
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
