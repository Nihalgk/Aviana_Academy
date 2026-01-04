
import React from "react";

export const Header98 = (props) => {
    const { tagline, heading, description, image } = {
        ...Header98Defaults,
        ...props,
    };
    return (
        <section id="relume" className="px-[5%] py-8 md:py-12 lg:py-14 bg-black text-white">
            <div className="container">
                <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                    <div>
                        <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
                        <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                            {heading}
                        </h1>
                        <div className="md:text-md">{description}</div>

                    </div>
                    <div>
                        <img src={image.src} className="w-full object-cover" alt={image.alt} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export const Header98Defaults = {
    tagline: "Empowering Skills, Enabling Success",
    heading: "Aviana Academy | Global Training & Development",
    description: (
        <>
            <p className="mb-2">
                Aviana Academy is committed to delivering high-quality learning experiences that strengthen
                behavioural skills, leadership capability, and executive presence among professionals and
                students.
            </p>
            <p className="mb-2">We ensure that our training processes are:</p>
            <ul className="list-disc pl-5">
                <li>Learner-centric</li>
                <li>Structured and measurable</li>
                <li>Transparent and inclusive</li>
                <li>Continuous in improvement</li>
                <li>Globally benchmarked</li>
            </ul>
        </>
    ),

    image: {
        src: "/images/home/header1.png",
        alt: "Relume placeholder image",
    },
};
