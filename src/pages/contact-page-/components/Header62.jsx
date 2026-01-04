"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header62() {
    return (
        <section id="aviana" className="relative px-[5%] py-8 md:py-12 lg:py-14">
            <div className="absolute inset-0 -z-10">
                <img
                    src="/images/contact-page-/CON1.jpeg"
                    alt="Office Background"
                    className="size-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="container max-w-lg text-center text-text-alternative">

                <h1 className="mb-5 text-6xl font-bold text-white md:mb-6 md:text-9xl lg:text-10xl">
                    Let's talk
                </h1>
                <p className="md:text-md text-white">
                    We're here to answer your questions and discuss how we can help you
                    grow
                </p>

            </div>
        </section>
    );
}
