"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta13() {
    return (
        <section id="aviana" className="relative px-[5%] py-8 md:py-12 lg:py-14">
            <div className="container grid grid-rows-1 items-start gap-y-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:gap-y-16">
                <div>
                    <h1 className="text-5xl font-bold md:text-7xl lg:text-8xl">
                        Ready to strengthen your institution
                    </h1>
                </div>
                <div>
                    <p className="md:text-md">
                        Let's discuss how our programs fit your needs. We build solutions
                        that last.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                        <Button title="Connect">Connect</Button>
                        <Button title="Details" variant="secondary">
                            Details
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
