"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Stats27() {
    return (
        <section id="aviana" className="px-[5%] py-8 md:py-12 lg:py-14">
            <div className="container">
                <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">

                    <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                        The measure of what we build
                    </h2>
                    <p className="md:text-md">
                        Aviana Academy has shaped the careers of thousands of professionals
                        across industries. These numbers reflect the real transformation
                        happening in boardrooms and teams worldwide.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
                    <div className="border border-border-primary p-8">
                        <p className="mb-8 text-10xl font-bold leading-[1.3] md:mb-10 md:text-[4rem] lg:mb-12 lg:text-[5rem]">
                            5000+
                        </p>
                        <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                            Professionals trained
                        </h3>
                        <p className="mt-2">
                            Leaders who've moved through our programs and into greater
                            influence
                        </p>
                    </div>
                    <div className="border border-border-primary p-8">
                        <p className="mb-8 text-10xl font-bold leading-[1.3] md:mb-10 md:text-[4rem] lg:mb-12 lg:text-[5rem]">
                            200+
                        </p>
                        <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                            Organizations served
                        </h3>
                        <p className="mt-2">
                            From startups to Fortune 500 companies trusting us with their
                            leadership
                        </p>
                    </div>
                    <div className="border border-border-primary p-8">
                        <p className="mb-8 text-10xl font-bold leading-[1.3] md:mb-10 md:text-[4rem] lg:mb-12 lg:text-[5rem]">
                            92%
                        </p>
                        <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                            Report increased confidence
                        </h3>
                        <p className="mt-2">
                            Measurable shifts in how leaders show up and make decisions
                        </p>
                    </div>
                </div>
                <div className="mt-10 flex flex-wrap items-center gap-4 md:mt-14 lg:mt-16">
                </div>
            </div>
        </section>
    );
}
