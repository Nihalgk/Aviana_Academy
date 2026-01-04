"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Faq14() {
    return (
        <section id="relume" className="px-[5%] py-8 md:py-12 lg:py-14">
            <div className="container">
                <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
                    <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                        FAQs
                    </h2>
                    <p className="md:text-md">
                        Find answers to questions about our blog and content approach
                    </p>
                </div>
                <div className="container grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12 lg:gap-y-16">
                    <div className="flex w-full flex-col items-center text-center">

                        <h3 className="mb-3 font-bold md:mb-4 md:text-md">
                            Who can submit?
                        </h3>
                        <p>
                            We welcome contributions from industry experts and experienced
                            practitioners.
                        </p>
                    </div>
                    <div className="flex w-full flex-col items-center text-center">

                        <h3 className="mb-3 font-bold md:mb-4 md:text-md">
                            What topics do we cover?
                        </h3>
                        <p>
                            Leadership, corporate training, personal growth, and professional
                            development.
                        </p>
                    </div>
                    <div className="flex w-full flex-col items-center text-center">

                        <h3 className="mb-3 font-bold md:mb-4 md:text-md">
                            How often do we publish?
                        </h3>
                        <p>
                            New articles appear weekly, covering timely insights and proven
                            strategies.
                        </p>
                    </div>
                    <div className="flex w-full flex-col items-center text-center">

                        <h3 className="mb-3 font-bold md:mb-4 md:text-md">
                            Can I share these articles?
                        </h3>
                        <p>
                            Yes, sharing is encouraged across your professional networks and
                            platforms.
                        </p>
                    </div>
                    <div className="flex w-full flex-col items-center text-center">

                        <h3 className="mb-3 font-bold md:mb-4 md:text-md">
                            How do I stay updated?
                        </h3>
                        <p>
                            Subscribe to our newsletter for the latest posts delivered to your
                            inbox.
                        </p>
                    </div>
                    <div className="flex w-full flex-col items-center text-center">

                        <h3 className="mb-3 font-bold md:mb-4 md:text-md">
                            Need more help?
                        </h3>
                        <p>Reach out anytime</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
