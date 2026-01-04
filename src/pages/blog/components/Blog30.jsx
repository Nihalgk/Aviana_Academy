"use client";

import {
    Button,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
} from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { RxChevronRight } from "react-icons/rx";
import { Link } from "react-router-dom";
import bg3 from "../blog/bg3.jpeg";

import bgg1 from "../blog/bgg1.jpeg";
import bg2 from "../blog/bg2.jpeg";


const useRelume = ({ defaultValue, selects }) => {
    const [activeSelect, setActiveSelect] = useState(defaultValue);
    const currentSelect = selects.find(function (select) {
        return select.value === activeSelect;
    });
    return { activeSelect, setActiveSelect, currentSelect };
};

export function Blog30() {
    const useActive = useRelume({
        defaultValue: "all-posts",
        selects: [
            {
                value: "all-posts",
                trigger: "All Posts",
                content: [
                    {
                        url: "#",
                        image: {
                            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
                            alt: "Relume placeholder image",
                        },
                        category: "Category",
                        readTime: "5 min read",
                        title: "Blog title heading will go here",
                        description:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
                        button: {
                            title: "Read more",
                            variant: "link",
                            size: "link",
                            iconRight: <RxChevronRight />,
                        },
                    },
                    {
                        url: "#",
                        image: {
                            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
                            alt: "Relume placeholder image",
                        },
                        category: "Category",
                        readTime: "5 min read",
                        title: "Blog title heading will go here",
                        description:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
                        button: {
                            title: "Read more",
                            variant: "link",
                            size: "link",
                            iconRight: <RxChevronRight />,
                        },
                    },
                    {
                        url: "#",
                        image: {
                            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
                            alt: "Relume placeholder image",
                        },
                        category: "Category",
                        readTime: "5 min read",
                        title: "Blog title heading will go here",
                        description:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
                        button: {
                            title: "Read more",
                            variant: "link",
                            size: "link",
                            iconRight: <RxChevronRight />,
                        },
                    },
                ],
            },
            {
                value: "category-one",
                trigger: "Category one",
                content: [
                    {
                        url: "#",
                        image: {
                            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
                            alt: "Relume placeholder image",
                        },
                        category: "Category",
                        readTime: "5 min read",
                        title: "Blog title heading will go here",
                        description:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
                        button: {
                            title: "Read more",
                            variant: "link",
                            size: "link",
                            iconRight: <RxChevronRight />,
                        },
                    },
                    {
                        url: "#",
                        image: {
                            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
                            alt: "Relume placeholder image",
                        },
                        category: "Category",
                        readTime: "5 min read",
                        title: "Blog title heading will go here",
                        description:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
                        button: {
                            title: "Read more",
                            variant: "link",
                            size: "link",
                            iconRight: <RxChevronRight />,
                        },
                    },
                    {
                        url: "#",
                        image: {
                            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
                            alt: "Relume placeholder image",
                        },
                        category: "Category",
                        readTime: "5 min read",
                        title: "Blog title heading will go here",
                        description:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
                        button: {
                            title: "Read more",
                            variant: "link",
                            size: "link",
                            iconRight: <RxChevronRight />,
                        },
                    },
                ],
            },
            {
                value: "category-two",
                trigger: "Category two",
                content: [
                    {
                        url: "#",
                        image: {
                            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
                            alt: "Relume placeholder image",
                        },
                        category: "Category",
                        readTime: "5 min read",
                        title: "Blog title heading will go here",
                        description:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
                        button: {
                            title: "Read more",
                            variant: "link",
                            size: "link",
                            iconRight: <RxChevronRight />,
                        },
                    },
                    {
                        url: "#",
                        image: {
                            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
                            alt: "Relume placeholder image",
                        },
                        category: "Category",
                        readTime: "5 min read",
                        title: "Blog title heading will go here",
                        description:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
                        button: {
                            title: "Read more",
                            variant: "link",
                            size: "link",
                            iconRight: <RxChevronRight />,
                        },
                    },
                    {
                        url: "#",
                        image: {
                            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
                            alt: "Relume placeholder image",
                        },
                        category: "Category",
                        readTime: "5 min read",
                        title: "Blog title heading will go here",
                        description:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
                        button: {
                            title: "Read more",
                            variant: "link",
                            size: "link",
                            iconRight: <RxChevronRight />,
                        },
                    },
                ],
            },
            {
                value: "category-three",
                trigger: "Category three",
                content: [
                    {
                        url: "#",
                        image: {
                            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
                            alt: "Relume placeholder image",
                        },
                        category: "Category",
                        readTime: "5 min read",
                        title: "Blog title heading will go here",
                        description:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
                        button: {
                            title: "Read more",
                            variant: "link",
                            size: "link",
                            iconRight: <RxChevronRight />,
                        },
                    },
                    {
                        url: "#",
                        image: {
                            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
                            alt: "Relume placeholder image",
                        },
                        category: "Category",
                        readTime: "5 min read",
                        title: "Blog title heading will go here",
                        description:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
                        button: {
                            title: "Read more",
                            variant: "link",
                            size: "link",
                            iconRight: <RxChevronRight />,
                        },
                    },
                    {
                        url: "#",
                        image: {
                            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
                            alt: "Relume placeholder image",
                        },
                        category: "Category",
                        readTime: "5 min read",
                        title: "Blog title heading will go here",
                        description:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
                        button: {
                            title: "Read more",
                            variant: "link",
                            size: "link",
                            iconRight: <RxChevronRight />,
                        },
                    },
                ],
            },
            {
                value: "category-four",
                trigger: "Category four",
                content: [
                    {
                        url: "#",
                        image: {
                            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
                            alt: "Relume placeholder image",
                        },
                        category: "Category",
                        readTime: "5 min read",
                        title: "Blog title heading will go here",
                        description:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
                        button: {
                            title: "Read more",
                            variant: "link",
                            size: "link",
                            iconRight: <RxChevronRight />,
                        },
                    },
                    {
                        url: "#",
                        image: {
                            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
                            alt: "Relume placeholder image",
                        },
                        category: "Category",
                        readTime: "5 min read",
                        title: "Blog title heading will go here",
                        description:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
                        button: {
                            title: "Read more",
                            variant: "link",
                            size: "link",
                            iconRight: <RxChevronRight />,
                        },
                    },
                    {
                        url: "#",
                        image: {
                            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
                            alt: "Relume placeholder image",
                        },
                        category: "Category",
                        readTime: "5 min read",
                        title: "Blog title heading will go here",
                        description:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
                        button: {
                            title: "Read more",
                            variant: "link",
                            size: "link",
                            iconRight: <RxChevronRight />,
                        },
                    },
                ],
            },
        ],
    });
    return (
        <section id="relume" className="px-[5%] py-8 md:py-12 lg:py-14">
            <div className="container flex max-w-lg flex-col">
                <div className="mb-12 text-center md:mb-18 lg:mb-20">
                    <div className="w-full max-w-lg">

                        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
                            Recent insights on leadership
                        </h1>
                        <p className="md:text-md">Explore our latest thinking</p>
                    </div>
                </div>
                <div className="flex flex-col justify-start">

                    <AnimatePresence mode="wait">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                        >
                            <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:gap-y-16">
                                <div className="flex flex-col border border-border-primary">
                                    <Link
                                        to="/blog/corporate-communication"
                                        className="inline-block w-full max-w-full overflow-hidden"
                                    >
                                        <div className="w-full overflow-hidden">
                                            <img
                                                src={bgg1}
                                                alt="Corporate Communication Training"
                                                className="aspect-video size-full object-cover object-top"
                                            />
                                        </div>
                                    </Link>
                                    <div className="px-5 py-6 md:px-6">
                                        <div className="rb-4 mb-4 flex w-full items-center justify-start">
                                            <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                                                Training
                                            </p>
                                            <p className="inline text-sm font-semibold">8 min read</p>
                                        </div>
                                        <Link to="/blog/corporate-communication" className="mb-2 block max-w-full">
                                            <h5 className="text-2xl font-bold md:text-4xl">
                                                Corporate Communication: The Skill That Shapes Modern Professionals
                                            </h5>
                                        </Link>
                                        <p>
                                            In today's dynamic corporate landscape, success is no longer determined solely by qualifications or technical expertise. What truly elevates professionals is the ability to communicate with clarity, confidence, and influence.
                                        </p>
                                        <Link to="/blog/corporate-communication">
                                            <Button
                                                variant="link"
                                                size="link"
                                                iconRight={<RxChevronRight />}
                                                className="mt-6 flex items-center justify-center gap-x-2"
                                            >
                                                Read more
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex flex-col border border-border-primary">
                                    <Link
                                        to="/blog/executive-presence"
                                        className="inline-block w-full max-w-full overflow-hidden"
                                    >
                                        <div className="w-full overflow-hidden">
                                            <img
                                                src={bg2}
                                                alt="Executive Presence in Modern Workplace"
                                                className="aspect-video size-full object-cover"
                                            />
                                        </div>
                                    </Link>
                                    <div className="px-5 py-6 md:px-6">
                                        <div className="rb-4 mb-4 flex w-full items-center justify-start">
                                            <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                                                Leadership
                                            </p>
                                            <p className="inline text-sm font-semibold">8 min read</p>
                                        </div>
                                        <Link to="/blog/executive-presence" className="mb-2 block max-w-full">
                                            <h5 className="text-2xl font-bold md:text-4xl">
                                                Executive Presence: The Leadership Skill That Defines Influence
                                            </h5>
                                        </Link>
                                        <p>
                                            What truly distinguishes influential leaders is Executive Presence the ability to project confidence, credibility, and clarity in every interaction.
                                        </p>
                                        <Link to="/blog/executive-presence">
                                            <Button
                                                variant="link"
                                                size="link"
                                                iconRight={<RxChevronRight />}
                                                className="mt-6 flex items-center justify-center gap-x-2"
                                            >
                                                Read more
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex flex-col border border-border-primary">
                                    <Link
                                        to="/blog/personal-brand"
                                        className="inline-block w-full max-w-full overflow-hidden"
                                    >
                                        <div className="w-full overflow-hidden">
                                            <img
                                                src={bg3}
                                                alt="Build a Powerful Personal Brand"
                                                className="aspect-video size-full object-cover object-top"
                                            />
                                        </div>
                                    </Link>
                                    <div className="px-5 py-6 md:px-6">
                                        <div className="rb-4 mb-4 flex w-full items-center justify-start">
                                            <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                                                Growth
                                            </p>
                                            <p className="inline text-sm font-semibold">6 min read</p>
                                        </div>
                                        <Link to="/blog/personal-brand" className="mb-2 block max-w-full">
                                            <h5 className="text-2xl font-bold md:text-4xl">
                                                Build a Powerful Personal Brand Through Dressing, Behaviour & Digital Presence
                                            </h5>
                                        </Link>
                                        <p>
                                            Your personal brand is the total experience of you. Consistency across dressing, behaviour, and digital presence is how you build trust and become unforgettable.
                                        </p>
                                        <Link to="/blog/personal-brand">
                                            <Button
                                                variant="link"
                                                size="link"
                                                iconRight={<RxChevronRight />}
                                                className="mt-6 flex items-center justify-center gap-x-2"
                                            >
                                                Read more
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
