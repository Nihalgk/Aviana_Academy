"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@relume_io/relume-ui";
import React, { useEffect, useState } from "react";

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

    useEffect(() => {
        if (!api) {
            return;
        }
        const interval = setInterval(() => {
            api.scrollNext();
        }, 3000);
        return () => clearInterval(interval);
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

export function Gallery26() {
    const carouselState = useCarousel();
    return (
        <section id="aviana" className="overflow-hidden py-16 md:py-24 lg:py-28">
            <div className="grid auto-cols-fr grid-cols-1 items-center gap-12 md:gap-16 lg:grid-cols-2 lg:gap-0">
                <div className="flex lg:justify-self-end">
                    <div className="mx-[5%] w-full max-w-md lg:mb-24 lg:ml-[5vw] lg:mr-20">
                        <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                            Our work
                        </h2>
                        <p className="md:text-md">
                            Filter by events, workshops, testimonials, and behind-the-scenes
                            moments
                        </p>
                    </div>
                </div>
                <Carousel
                    setApi={carouselState.setApi}
                    opts={{ loop: true, align: "start" }}
                    className="overflow-hidden px-[5%] lg:px-0"
                >
                    <CarouselContent className="ml-0">
                        <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/2 md:pr-8 lg:basis-[45%]">
                            <div className="aspect-[4/3] w-full">
                                <img
                                    src="/images/Gallery/IMG-20251114-WA0011.jpg"
                                    alt="Aviana Gallery Image 1"
                                    className="size-full object-cover"
                                />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/2 md:pr-8 lg:basis-[45%]">
                            <div className="aspect-[4/3] w-full">
                                <img
                                    src="/images/Gallery/IMG-20251114-WA0017.jpg"
                                    alt="Aviana Gallery Image 2"
                                    className="size-full object-cover"
                                />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/2 md:pr-8 lg:basis-[45%]">
                            <div className="aspect-[4/3] w-full">
                                <img
                                    src="/images/Gallery/IMG-20251114-WA0021.jpg"
                                    alt="Aviana Gallery Image 3"
                                    className="size-full object-cover"
                                />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/2 md:pr-8 lg:basis-[45%]">
                            <div className="aspect-[4/3] w-full">
                                <img
                                    src="/images/Gallery/IMG-20251114-WA0026.jpg"
                                    alt="Aviana Gallery Image 4"
                                    className="size-full object-cover"
                                />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/2 md:pr-8 lg:basis-[45%]">
                            <div className="aspect-[4/3] w-full">
                                <img
                                    src="/images/Gallery/IMG-20251114-WA0029.jpg"
                                    alt="Aviana Gallery Image 5"
                                    className="size-full object-cover"
                                />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/2 md:pr-8 lg:basis-[45%]">
                            <div className="aspect-[4/3] w-full">
                                <img
                                    src="/images/Gallery/web1.jpg"
                                    alt="Aviana Gallery Image 6"
                                    className="size-full object-cover"
                                />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/2 md:pr-8 lg:basis-[45%]">
                            <div className="aspect-[4/3] w-full">
                                <img
                                    src="/images/Gallery/web2.jpg"
                                    alt="Aviana Gallery Image 7"
                                    className="size-full object-cover"
                                />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/2 md:pr-8 lg:basis-[45%]">
                            <div className="aspect-[4/3] w-full">
                                <img
                                    src="/images/Gallery/web3.jpg"
                                    alt="Aviana Gallery Image 8"
                                    className="size-full object-cover"
                                />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/2 md:pr-8 lg:basis-[45%]">
                            <div className="aspect-[4/3] w-full">
                                <img
                                    src="/images/Gallery/web4.jpg"
                                    alt="Aviana Gallery Image 9"
                                    className="size-full object-cover"
                                />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/2 md:pr-8 lg:basis-[45%]">
                            <div className="aspect-[4/3] w-full">
                                <img
                                    src="/images/Gallery/web5.jpg"
                                    alt="Aviana Gallery Image 10"
                                    className="size-full object-cover"
                                />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/2 md:pr-8 lg:basis-[45%]">
                            <div className="aspect-[4/3] w-full">
                                <img
                                    src="/images/Gallery/web6.jpg"
                                    alt="Aviana Gallery Image 11"
                                    className="size-full object-cover"
                                />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/2 md:pr-8 lg:basis-[45%]">
                            <div className="aspect-[4/3] w-full">
                                <img
                                    src="/images/Gallery/web8.jpeg"
                                    alt="Aviana Gallery Image 12"
                                    className="size-full object-cover"
                                />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/2 md:pr-8 lg:basis-[45%]">
                            <div className="aspect-[4/3] w-full">
                                <img
                                    src="/images/Gallery/web9.jpeg"
                                    alt="Aviana Gallery Image 13"
                                    className="size-full object-cover"
                                />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/2 md:pr-8 lg:basis-[45%]">
                            <div className="aspect-[4/3] w-full">
                                <img
                                    src="/images/Gallery/web10.jpeg"
                                    alt="Aviana Gallery Image 14"
                                    className="size-full object-cover"
                                />
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <div className="mt-12 flex items-center justify-between">
                        <div className="flex gap-2 md:gap-4">
                            <CarouselPrevious className="static left-0 top-0 size-12 -translate-y-0" />
                            <CarouselNext className="static left-0 top-0 size-12 -translate-y-0" />
                        </div>
                        <div className="absolute right-[5%] mt-5 flex items-center justify-end md:right-8 lg:right-16">
                            {Array.from({ length: 14 }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={carouselState.handleDotClick(index)}
                                    className={carouselState.dotClassName(index)}
                                />
                            ))}
                        </div>
                    </div>
                </Carousel>
            </div>
        </section>
    );
}
