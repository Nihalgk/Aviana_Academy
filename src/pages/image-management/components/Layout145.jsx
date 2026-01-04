"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout145() {
    return (
        <section id="aviana" className="px-[5%] py-8 md:py-12 lg:py-14">
            <div className="container">
                <div className="mb-12 md:mb-18 lg:mb-20">
                    <div className="mx-auto flex max-w-lg flex-col items-center text-center">
                        <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                            Strategic Use of Colour
                        </h2>
                        <div className="text-left w-full max-w-md mx-auto mb-6 md:mb-8">
                            <p className="mb-4">
                                Personal Colour Analysis identifies the colours that best suit your skin tone, features, and professional goals.
                            </p>
                            <p className="mb-4">
                                The right colours enhance presence, reduce styling effort, and help you appear confident and well put-together in every setting.
                            </p>
                            <p>
                                Using colour thoughtfully to communicate authority, approachability, and confidence in professional settings.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <img
                        src="/images/image management/st3.jpeg"
                        className="w-full h-[300px] md:h-[500px] object-cover object-[50%_20%] rounded-2xl saturate-[1.25] contrast-[1.15] brightness-[1.05] shadow-2xl"
                        alt="Strategic Use of Colour"
                    />
                </div>
            </div>
        </section >
    );
}
