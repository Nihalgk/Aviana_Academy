"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    BiLogoFacebookCircle,
    BiLogoInstagram,
    BiLogoLinkedinSquare,
} from "react-icons/bi";

const useForm = () => {
    const [email, setEmail] = useState("");
    const handleSetEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();

    };
    return {
        email,
        handleSetEmail,
        handleSubmit,
    };
};

export function Footer1() {
    const formState = useForm();
    return (
        <footer id="aviana" className="px-[5%] py-8 md:py-12 lg:py-14 bg-black text-white">
            <div className="container">
                <div className="grid grid-cols-1 gap-x-[8vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[0.75fr_1fr] lg:gap-y-4 lg:pb-20">
                    <div className="flex flex-col">
                        <Link to="/" className="mb-5 md:mb-6">
                            <img
                                src="/images/home/logo.jpg"
                                alt="Aviana Academy Logo"
                                className="inline-block h-20 w-20 rounded-full object-cover"
                            />
                        </Link>
                        <p className="mb-2 font-bold">
                            Empowering Skills, Enabling Success
                        </p>
                        <p className="mb-5 md:mb-6">
                            Aviana Academy is a trusted soft skills and executive presence training partner in Bangalore, enabling professionals to grow with confidence, clarity, and credibility.
                        </p>
                        <div className="w-full max-w-md">
                            <form
                                className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] md:gap-y-4"
                                onSubmit={formState.handleSubmit}
                            >
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Your email"
                                    value={formState.email}
                                    onChange={formState.handleSetEmail}
                                />
                                <Button title="Subscribe" variant="secondary" size="sm">
                                    Subscribe
                                </Button>
                            </form>
                            <p className="text-xs">
                                By subscribing you agree to our Privacy Policy and consent to
                                receive updates from Aviana Academy.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 items-start gap-y-10 sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-6 md:gap-x-8 md:gap-y-4">
                        <div className="flex flex-col items-start justify-start">
                            <h2 className="mb-3 font-semibold md:mb-4">Our Services</h2>
                            <ul>
                                <li className="py-2 text-sm">
                                    <Link to="/corporate-training" className="flex items-center gap-3">
                                        <span>Corporate training</span>
                                    </Link>
                                </li>
                                <li className="py-2 text-sm">
                                    <Link to="/institutional-training" className="flex items-center gap-3">
                                        <span>Institutional training</span>
                                    </Link>
                                </li>
                                <li className="py-2 text-sm">
                                    <Link to="/individual-coaching" className="flex items-center gap-3">
                                        <span>Individual coaching</span>
                                    </Link>
                                </li>
                                <li className="py-2 text-sm">
                                    <Link to="/image-management" className="flex items-center gap-3">
                                        <span>Image management</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                            <h2 className="mb-3 font-semibold md:mb-4">Company</h2>
                            <ul>
                                <li className="py-2 text-sm">
                                    <Link to="/about-us" className="flex items-center gap-3">
                                        <span>About us</span>
                                    </Link>
                                </li>
                                <li className="py-2 text-sm">
                                    <Link to="/gallery" className="flex items-center gap-3">
                                        <span>Our gallery</span>
                                    </Link>
                                </li>
                                <li className="py-2 text-sm">
                                    <Link to="/blog" className="flex items-center gap-3">
                                        <span>Blog insights</span>
                                    </Link>
                                </li>
                                <li className="py-2 text-sm">
                                    <Link to="/contact" className="flex items-center gap-3">
                                        <span>Contact us</span>
                                    </Link>
                                </li>

                            </ul>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                            <h2 className="mb-3 font-semibold md:mb-4">Contact</h2>
                            <div className="flex flex-col gap-4 text-sm">
                                <div>
                                    <p className="font-semibold mb-1">Email</p>
                                    <a href="mailto:info@avianaacademy.in" className="underline hover:text-neutral-300">info@avianaacademy.in</a>
                                </div>
                                <div>
                                    <p className="font-semibold mb-1">Phone</p>
                                    <div className="flex flex-col gap-1">
                                        <a href="tel:+919731532666" className="hover:text-neutral-300">+91 9731532666</a>
                                        <a href="tel:+919741904555" className="hover:text-neutral-300">+91 9741904555</a>
                                        <a href="tel:+919845739709" className="hover:text-neutral-300">+91 9845739709</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                            <h2 className="mb-3 font-semibold md:mb-4">Follow us</h2>
                            <ul className="flex flex-col items-start">
                                <li className="py-2 text-sm">
                                    <a href="https://www.facebook.com/avianacoachingacademy/" className="flex items-center gap-3">
                                        <BiLogoFacebookCircle className="size-6" />
                                        <span>Facebook</span>
                                    </a>
                                </li>
                                <li className="py-2 text-sm">
                                    <a href="https://www.instagram.com/vani_avianaacademy?igsh=MWF6OHZqNWJqdmRudA%3D%3D&utm_source=qr" className="flex items-center gap-3">
                                        <BiLogoInstagram className="size-6" />
                                        <span>Instagram</span>
                                    </a>
                                </li>
                                <li className="py-2 text-sm">
                                    <a href="https://www.linkedin.com/in/vani-satish-059a51204/" className="flex items-center gap-3">
                                        <BiLogoLinkedinSquare className="size-6" />
                                        <span>LinkedIn</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="h-px w-full bg-white" />
                <div className="flex flex-col-reverse items-start justify-between pb-4 pt-6 text-sm md:flex-row md:items-center md:pb-0 md:pt-8">
                    <p className="mt-6 md:mt-0">© 2025 Aviana Academy. All rights reserved.</p>

                </div>
            </div>
        </footer>
    );
}
