
import React from "react";

import { Button } from "@relume_io/relume-ui";
import { Link } from "react-router-dom";

export const Header98 = (props) => {
    const { tagline, heading, description, image } = {
        ...Header98Defaults,
        ...props,
    };
    return (
        <section id="hero" className="px-[5%] py-8 md:py-12 lg:py-14 bg-black text-white">
            <div className="container">
                <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                    <div>
                        <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
                        <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                            {heading}
                        </h1>
                        <div className="md:text-md">{description}</div>
                        <div className="mt-6 md:mt-8">
                            <Link to="/our-services">
                                <Button title="Explore More" variant="secondary">
                                    Explore More
                                </Button>
                            </Link>
                        </div>

                    </div>
                    <div>
                        <img src={image.src} className="w-full object-cover" alt={image.alt} />
                    </div>
                </div>
            </div>
        </section >
    );
};

export const Header98Defaults = {
    tagline: "Empowering Skills, Enabling Success",
    heading: "Aviana Academy: Premier Soft Skills & Corporate Training in Bangalore",
    description: (
        <>
            <p className="mb-2 font-bold">
                Building Confident Professionals, Effective Leaders & High-Performing Teams
            </p>
            <p className="mb-2">
                We deliver practical communication, leadership, executive presence, and behavioural skills
                programs for corporates, institutions, and working professionals.
            </p>
            <ul className="list-disc pl-5">
                <li>Learner-centric & outcome-driven</li>
                <li>Structured & measurable</li>
                <li>Inclusive & globally benchmarked</li>
            </ul>
        </>
    ),

    image: {
        src: "/images/home/header1.png",
        alt: "Aviana Academy Corporate Training Excellence - Bangalore",
    },
};
