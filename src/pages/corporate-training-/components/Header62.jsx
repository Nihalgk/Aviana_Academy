import { Button } from "@relume_io/relume-ui";
import React from "react";
import { Link } from "react-router-dom";

export function Header62() {
    return (
        <section id="hero" className="px-[5%] py-8 md:py-12 lg:py-14">
            <div className="container max-w-lg text-center">
                <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
                    Corporate Training That Builds Confident Leaders & High-Performing Teams
                </h1>
                <p className="md:text-md">
                    Practical leadership, communication, and behavioural skills training designed to create measurable impact across teams and organizations.
                </p>
                <div className="mt-6 flex items-center justify-center md:mt-8">
                    <Link to="/contact">
                        <Button variant="secondary" title="Request Corporate Training Details">
                            🔵 Request Corporate Training Details
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
