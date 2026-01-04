"use client";

import { Button } from "@relume_io/relume-ui";
import { Link } from "react-router-dom";

export function Header62() {
    return (
        <section id="aviana" className="px-[5%] py-8 md:py-12 lg:py-14">
            <div className="container max-w-lg text-center">

                <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
                    See what we build
                </h1>
                <p className="md:text-md">
                    Start your transformation with Aviana Academy. Our team is ready to
                    discuss which program fits your goals.
                </p>
                <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">

                    <Link to="/contact">
                        <Button title="Contact" variant="secondary">
                            Contact
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
