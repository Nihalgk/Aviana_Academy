"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React from "react";

export function Cta54() {
    return (
        <section id="aviana" className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container relative">
                <div className="relative z-10 flex flex-col items-center p-8 md:p-12 lg:p-16">
                    <div className="max-w-lg text-center">
                        <h2 className="rb-5 mb-5 text-5xl font-bold text-text-alternative md:mb-6 md:text-7xl lg:text-8xl">
                            Ready to strengthen your institution
                        </h2>
                        <p className="text-text-alternative md:text-md">
                            Start your transformation with Aviana Academy. Our team is ready to
                            discuss which program fits your goals.
                        </p>
                    </div>
                    <div className="mx-auto mt-6 max-w-sm md:mt-8">
                        <div className="flex items-center justify-center gap-4">
                            <a href="/contact">
                                <Button title="Contact" variant="primary" className="items-center justify-center px-6 py-3">
                                    Contact
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/Institutional training/cta1.jpeg"
                        className="size-full object-cover object-bottom"
                        alt="Aviana placeholder image"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
            </div>
        </section>
    );
}
