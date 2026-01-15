"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export function Team12() {
    return (
        <section id="aviana" className="px-[5%] py-8 md:py-12 lg:py-14">
            <div className="container">
                <div className="mx-auto max-w-lg text-center">
                    <div className="mb-12 md:mb-18 lg:mb-20">
                        <p className="mb-3 font-semibold md:mb-4">Leadership</p>
                        <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                            Meet the team
                        </h2>
                        <p className="md:text-md">
                            The people behind Aviana Academy drive every decision we make
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-16">
                    <div className="flex flex-col text-center">
                        <div className="relative mb-5 size-full overflow-hidden md:mb-6">
                            <img
                                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                alt="James Mitchell - Founder & CEO - Aviana Academy Expert"
                                loading="lazy"
                                className="aspect-[3/2] size-full object-cover"
                            />
                        </div>
                        <div className="mb-3 md:mb-4">
                            <h5 className="text-md font-semibold md:text-lg">
                                James Mitchell
                            </h5>
                            <h6 className="md:text-md">Founder, CEO</h6>
                        </div>
                        <p>
                            Twenty years building leaders across industries. Started Aviana
                            with one belief.
                        </p>
                        <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center">
                            <a href="#">
                                <BiLogoLinkedinSquare className="size-6" />
                            </a>
                            <a href="#">
                                <FaXTwitter className="size-6 p-0.5" />
                            </a>
                            <a href="#">
                                <BiLogoLinkedinSquare className="size-6" />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col text-center">
                        <div className="relative mb-5 size-full overflow-hidden md:mb-6">
                            <img
                                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                alt="Sarah Chen - Chief Learning Officer - Aviana Academy Expert"
                                loading="lazy"
                                className="aspect-[3/2] size-full object-cover"
                            />
                        </div>
                        <div className="mb-3 md:mb-4">
                            <h5 className="text-md font-semibold md:text-lg">Sarah Chen</h5>
                            <h6 className="md:text-md">Chief Learning Officer</h6>
                        </div>
                        <p>
                            Designed curriculum for Fortune 500 companies. Shapes how we teach
                            leadership.
                        </p>
                        <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center">
                            <a href="#">
                                <BiLogoLinkedinSquare className="size-6" />
                            </a>
                            <a href="#">
                                <FaXTwitter className="size-6 p-0.5" />
                            </a>
                            <a href="#">
                                <BiLogoLinkedinSquare className="size-6" />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col text-center">
                        <div className="relative mb-5 size-full overflow-hidden md:mb-6">
                            <img
                                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                alt="Marcus Rodriguez - Head of Operations - Aviana Academy Expert"
                                loading="lazy"
                                className="aspect-[3/2] size-full object-cover"
                            />
                        </div>
                        <div className="mb-3 md:mb-4">
                            <h5 className="text-md font-semibold md:text-lg">
                                Marcus Rodriguez
                            </h5>
                            <h6 className="md:text-md">Head of Operations</h6>
                        </div>
                        <p>
                            Ensures every program runs with precision. Keeps our promise to
                            clients.
                        </p>
                        <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center">
                            <a href="#">
                                <BiLogoLinkedinSquare className="size-6" />
                            </a>
                            <a href="#">
                                <FaXTwitter className="size-6 p-0.5" />
                            </a>
                            <a href="#">
                                <BiLogoLinkedinSquare className="size-6" />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col text-center">
                        <div className="relative mb-5 size-full overflow-hidden md:mb-6">
                            <img
                                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                alt="Elena Vasquez - Senior Coach - Aviana Academy Expert"
                                loading="lazy"
                                className="aspect-[3/2] size-full object-cover"
                            />
                        </div>
                        <div className="mb-3 md:mb-4">
                            <h5 className="text-md font-semibold md:text-lg">
                                Elena Vasquez
                            </h5>
                            <h6 className="md:text-md">Senior Coach</h6>
                        </div>
                        <p>
                            Mentors emerging leaders through transformation. Believes in human
                            potential.
                        </p>
                        <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center">
                            <a href="#">
                                <BiLogoLinkedinSquare className="size-6" />
                            </a>
                            <a href="#">
                                <FaXTwitter className="size-6 p-0.5" />
                            </a>
                            <a href="#">
                                <BiLogoLinkedinSquare className="size-6" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-14 md:mt-20 lg:mt-24">
                    <div className="mx-auto flex max-w-md flex-col items-center">
                        <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                            We're hiring
                        </h4>
                        <p className="md:text-md">Digital Strategy</p>
                        <div className="mt-6 md:mt-8">
                            <Button title="View positions" variant="secondary">
                                View positions
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
