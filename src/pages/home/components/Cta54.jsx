"use client";

import { Button, Input } from "@relume_io/relume-ui";
import { Link } from "react-router-dom";
import React from "react";

export function Cta54() {
    return (
        <section id="aviana" className="px-[5%] py-8 md:py-12 lg:py-14">
            <div className="container relative">
                <div className="relative z-10 flex flex-col items-center p-8 md:p-12 lg:p-16">
                    <div className="max-w-lg text-center">
                        <h2 className="rb-5 mb-5 text-5xl font-bold text-text-alternative md:mb-6 md:text-7xl lg:text-8xl">
                            Ready to lead differently
                        </h2>
                        <p className="text-text-alternative md:text-md">
                            Start your transformation with Aviana Academy. Our team is ready to
                            discuss which program fits your goals.
                        </p>
                    </div>
                    <div className="mx-auto mt-6 max-w-sm md:mt-8">
                        <div className="mt-6 flex flex-wrap justify-center gap-4 md:mt-8">
                            <Link to="/contact">
                                <Button title="Contact" variant="primary">
                                    Contact
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/home/cta1.jpeg"
                        className="size-full object-cover object-[center_80%]"
                        alt="Team Collaboration and Leadership Discussion"
                        loading="lazy"
                        style={{ filter: "contrast(1.1) saturate(1.1)" }}
                    />
                    <div className="absolute inset-0 bg-black/30" />
                </div>
            </div>
        </section>
    );
}
