"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout395() {
    return (
        <section id="aviana" className="px-[5%] py-8 md:py-12 lg:py-14">
            <div className="container">
                <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">

                    <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                        Three pillars of presence
                    </h1>
                    <p className="md:text-md">
                        Build the foundation that commands respect
                    </p>
                </div>
                <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
                    <div className="flex flex-col border border-border-primary">
                        <div className="flex w-full flex-col items-center justify-center self-start">
                            <img
                                src="/images/image management/bis1.jpeg"
                                alt="Professional Appearance Consulting"
                                className="w-full h-[400px] object-cover object-top"
                            />
                        </div>
                        <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                            <div>
                                <h2 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl md:leading-[1.3] lg:text-3xl">
                                    Professional Appearance Consulting
                                </h2>
                                <p className="mb-4 font-semibold text-sm md:text-base">
                                    Before words arrive, perception already has.
                                </p>
                                <div className="mb-4 text-sm md:text-base">
                                    <p className="font-semibold mb-2">This work looks at:</p>
                                    <ul className="list-disc pl-4 space-y-1">
                                        <li>first impressions and visual impact</li>
                                        <li>how everyday dress influences authority</li>
                                        <li>colour, shape, line, texture, and pattern</li>
                                        <li>wardrobe structure, not wardrobe size</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-5 md:mt-6">
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col border border-border-primary">
                        <div className="flex w-full flex-col items-center justify-center self-start">
                            <img
                                src="/images/image management/bis2.jpeg"
                                alt="Business Etiquette Training"
                                className="w-full h-[400px] object-cover object-top"
                            />
                        </div>
                        <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                            <div>
                                <h2 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl md:leading-[1.3] lg:text-3xl">
                                    Business Etiquette Training
                                </h2>
                                <p className="mb-4 font-semibold text-sm md:text-base">
                                    Ease is the new professionalism.
                                </p>
                                <div className="mb-4 text-sm md:text-base">
                                    <p className="font-semibold mb-2">We work on:</p>
                                    <ul className="list-disc pl-4 space-y-1">
                                        <li>behaviour across professional settings</li>
                                        <li>dining, social, and business etiquette</li>
                                        <li>body language that supports credibility</li>
                                        <li>grooming and hygiene as professional habits</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-5 md:mt-6">
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col border border-border-primary">
                        <div className="flex w-full flex-col items-center justify-center self-start">
                            <img
                                src="/images/image management/pd1.jpeg"
                                alt="Wardrobe Intelligence"
                                className="w-full h-[400px] object-cover object-top"
                            />
                        </div>
                        <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                            <div>
                                <h2 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl md:leading-[1.3] lg:text-3xl">
                                    Wardrobe Intelligence
                                </h2>
                                <div className="mb-4 text-sm md:text-base">
                                    <ul className="list-disc pl-4 space-y-1">
                                        <li>Role-appropriate dressing guidelines aligned with hierarchy, function, and industry norms</li>
                                        <li>Building a practical work wardrobe using mix-and-match, capsule principles</li>
                                        <li>Clustering / Dressing Frameworks & Capsule work wardrobe concepts</li>
                                        <li>Creating consistency in professional appearance to enhance credibility and trust</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-5 md:mt-6">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
