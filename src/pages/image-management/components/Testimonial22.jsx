"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Testimonial22() {
    return (
        <section id="aviana" className="px-[5%] py-8 md:py-12 lg:py-14">
            <div className="container">
                <div className="mb-12 md:mb-18 lg:mb-20">
                    <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                        Real transformations
                    </h2>
                    <p className="md:text-md">See what changed for our clients</p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
                        <div className="rb-5 mb-5 md:mb-6">
                            <div className="mb-8 md:mb-10 lg:mb-12">
                                <img
                                    src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                                    alt="Webflow logo"
                                    className="max-h-12"
                                />
                            </div>
                            <blockquote className="md:text-md">
                                "I walked into that boardroom different. They noticed before I
                                said a word."
                            </blockquote>
                            <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                                <div>
                                    <img
                                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                        alt="Testimonial avatar"
                                        className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold">Michael Chen</p>
                                    <p>Director, tech startup</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 md:mt-8">
                            <Button variant="link" size="link" iconRight={<RxChevronRight />}>
                                Read case study
                            </Button>
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
                        <div className="rb-5 mb-5 md:mb-6">
                            <div className="mb-8 md:mb-10 lg:mb-12">
                                <img
                                    src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                                    alt="Webflow logo"
                                    className="max-h-12"
                                />
                            </div>
                            <blockquote className="md:text-md">
                                "The way people listen to me changed. It wasn't about the
                                clothes. It was about how I showed up."
                            </blockquote>
                            <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                                <div>
                                    <img
                                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                        alt="Testimonial avatar"
                                        className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold">Sarah Mitchell</p>
                                    <p>VP, financial services</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 md:mt-8">
                            <Button variant="link" size="link" iconRight={<RxChevronRight />}>
                                Read case study
                            </Button>
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
                        <div className="rb-5 mb-5 md:mb-6">
                            <div className="mb-8 md:mb-10 lg:mb-12">
                                <img
                                    src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                                    alt="Webflow logo"
                                    className="max-h-12"
                                />
                            </div>
                            <blockquote className="md:text-md">
                                "They taught me that presence isn't something you fake. It's
                                something you earn and then live."
                            </blockquote>
                            <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                                <div>
                                    <img
                                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                        alt="Testimonial avatar"
                                        className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold">James Rodriguez</p>
                                    <p>Executive, consulting firm</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 md:mt-8">
                            <Button variant="link" size="link" iconRight={<RxChevronRight />}>
                                Read case study
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
