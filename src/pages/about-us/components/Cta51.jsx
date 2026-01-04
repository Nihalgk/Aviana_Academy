"use client";

import { Button } from "@relume_io/relume-ui";
import { Link } from "react-router-dom";

export function Cta51() {
    return (
        <section id="aviana" className="px-[5%] py-8 md:py-12 lg:py-14">
            <div className="container">
                <div className="relative flex flex-col items-center overflow-hidden p-8 md:p-12 lg:p-16">
                    <div className="absolute inset-0">
                        <img
                            src="/images/about-us/cta.jpeg"
                            className="size-full object-cover"
                            alt="Background"
                        />
                        <div className="absolute inset-0 bg-black/50" />
                    </div>
                    <div className="relative z-10 max-w-lg text-center">
                        <h2 className="rb-5 mb-5 text-5xl font-bold text-white md:mb-6 md:text-7xl lg:text-8xl">
                            Ready to build your leaders
                        </h2>
                        <p className="text-white md:text-md">
                            Start your transformation with Aviana Academy. Our team is ready to
                            discuss which program fits your goals.
                        </p>
                    </div>
                    <div className="relative z-10 mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
                        <Link to="/contact">
                            <Button title="Contact">Contact</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
