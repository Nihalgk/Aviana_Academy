"use client";

import { Button } from "@relume_io/relume-ui";
import { Link } from "react-router-dom";
import React from "react";

export function Cta31() {
    return (
        <section id="aviana" className="px-[5%] py-8 md:py-12 lg:py-14">
            <div className="container flex flex-col items-center">
                <div className="mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
                    <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                        Let’s Design the Right Program for You
                    </h2>
                    <p className="md:text-md">
                        Start your transformation with Aviana Academy. Our team is ready to
                        discuss which program fits your goals.
                    </p>
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
                        <Link to="/contact">
                            <Button variant="secondary" title="Book a Free Consultation">
                                🔵 Book a Free Consultation
                            </Button>
                        </Link>
                        <a
                            href="https://wa.me/919845739709"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button variant="tertiary" title="WhatsApp Us">
                                🟢 WhatsApp Us
                            </Button>
                        </a>
                    </div>
                </div>
                <img
                    src="/images/our-services/img5.jpeg"
                    className="w-full object-cover rounded-none"
                    alt="Aviana Academy Professional Development"
                    style={{ clipPath: "inset(0 0 30% 0)" }}
                />
            </div>
        </section>
    );
}
