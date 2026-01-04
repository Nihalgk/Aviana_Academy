import React from "react";

export function AudienceSection() {
    return (
        <section className="px-[5%] py-12 md:py-16 bg-background-secondary">
            <div className="container max-w-lg text-center">
                <h2 className="mb-6 text-2xl font-bold md:text-3xl lg:text-4xl text-black">
                    Our individual coaching is suited for:
                </h2>
                <ul className="mx-auto w-fit space-y-4 text-left text-black md:text-lg">
                    <li className="flex items-start gap-3">
                        <span className="mt-2 block h-2 w-2 shrink-0 rounded-full bg-black" />
                        <span>Students & fresh graduates preparing for professional life</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-2 block h-2 w-2 shrink-0 rounded-full bg-black" />
                        <span>Working professionals seeking growth, confidence, or direction</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-2 block h-2 w-2 shrink-0 rounded-full bg-black" />
                        <span>Managers & leaders strengthening presence and communication</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-2 block h-2 w-2 shrink-0 rounded-full bg-black" />
                        <span>Individuals focused on personal branding & image</span>
                    </li>
                </ul>
                <p className="mt-8 font-semibold text-lg md:text-xl text-black">
                    Each journey is different. The coaching adapts to you.
                </p>
            </div>
        </section>
    );
}
