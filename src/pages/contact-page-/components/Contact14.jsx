"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";

export function Contact14() {
    return (
        <section id="aviana" className="px-[5%] py-8 md:py-12 lg:py-14">
            <div className="container">
                <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">

                    <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                        Get in touch
                    </h2>
                    <p className="md:text-md">Send us a message anytime</p>
                </div>
                <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-[0.5fr_1fr] md:gap-x-20 md:gap-y-16">
                    <div className="grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-10">
                        <div>
                            <div className="mb-3 md:mb-4">
                                <BiEnvelope className="size-8" />
                            </div>
                            <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                                Email
                            </h3>
                            <p className="mb-2">We respond within hours</p>
                            <a className="underline" href="#">
                                info@avianaacademy.in
                            </a>
                        </div>
                        <div>
                            <div className="mb-3 md:mb-4">
                                <BiPhone className="size-8" />
                            </div>
                            <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                                Phone
                            </h3>
                            <p className="mb-2">Call during business hours</p>
                            <div className="flex flex-col">
                                <a className="underline" href="#">
                                    +91 9731532666
                                </a>
                                <a className="underline" href="#">
                                    +91 9741904555
                                </a>
                                <a className="underline" href="#">
                                    +91 9845739709
                                </a>
                            </div>
                        </div>
                        <div>
                            <div className="mb-3 md:mb-4">
                                <BiMap className="size-8" />
                            </div>
                            <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                                Office
                            </h3>
                            <p className="mb-2">
                                Aviana Academy<br />
                                Unit No. 2201A, 22nd Floor<br />
                                Regus, World Trade Centre<br />
                                Brigade Gateway Campus<br />
                                Dr. Rajkumar Road, Malleswaram (W)<br />
                                Bengaluru – 560055<br />
                                Karnataka, India
                            </p>

                        </div>
                    </div>
                    <div className="w-full">
                        <iframe
                            className="size-full h-[400px] w-full md:h-[516px]"
                            src="https://maps.google.com/maps?q=Regus%2C%20World%20Trade%20Centre%2C%20Brigade%20Gateway%20Campus%2C%20Bengaluru&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
