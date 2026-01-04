"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { Link } from "react-router-dom";

export function Cta25() {
    return (
        <section id="aviana" className="px-[5%] py-8 md:py-12 lg:py-14">
            <div className="container max-w-lg text-center">
                <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                    Ready to build your presence
                </h2>
                <p className="md:text-md">
                    Start your transformation with Aviana Academy. Our team is ready to
                    discuss which program fits your goals.
                </p>
                <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
                    <Link to="/contact">
                        <Button title="Contact">Contact</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
