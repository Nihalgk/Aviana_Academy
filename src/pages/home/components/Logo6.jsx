import React, { useEffect, useRef, useState } from "react";

export function Logo6() {
    const scrollRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current && !isPaused) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
                const maxScrollLeft = scrollWidth - clientWidth;

                if (scrollLeft >= maxScrollLeft - 1) {
                    scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
                } else {
                    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
                }
            }
        }, 1500);

        return () => clearInterval(interval);
    }, [isPaused]);

    return (
        <section id="aviana" className="px-[5%] py-8 md:py-10 lg:py-12 bg-white">
            <div className="container mx-auto max-w-4xl">
                <style>{`
                    .scrollbar-hide::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>
                <h2 className="mx-auto mb-6 w-full max-w-lg text-center text-sm font-bold leading-[1.2] md:mb-8 md:text-base md:leading-[1.2] lg:mb-10">
                    Trusted by the world's best organizations
                </h2>
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-6 pb-2 scroll-smooth scrollbar-hide"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className="flex-none w-48 h-28 flex items-center justify-center">
                        <img
                            src="/images/about-us/mahe.jpeg"
                            className="w-full h-full object-contain mix-blend-multiply"
                            alt="Mahe Manipal Logo - Corporate Training Client"
                            loading="lazy"
                        />
                    </div>
                    <div className="flex-none w-48 h-28 flex items-center justify-center">
                        <img
                            src="/images/about-us/log9.jpeg"
                            className="w-full h-full object-contain mix-blend-multiply"
                            alt="Log9 Materials Logo - Leadership Development Client"
                            loading="lazy"
                        />
                    </div>
                    <div className="flex-none w-48 h-28 flex items-center justify-center">
                        <img
                            src="/images/about-us/gal.jpeg"
                            className="w-full h-full object-contain mix-blend-multiply"
                            alt="Galabar Logo - Soft Skills Training Client"
                            loading="lazy"
                        />
                    </div>
                    <div className="flex-none w-48 h-28 flex items-center justify-center">
                        <img
                            src="/images/about-us/ot.jpeg"
                            className="w-full h-full object-contain mix-blend-multiply"
                            alt="OT Logo - Executive Presentation Training Client"
                            loading="lazy"
                        />
                    </div>
                    <div className="flex-none w-48 h-28 flex items-center justify-center">
                        <img
                            src="/images/about-us/gims.jpeg"
                            className="w-full h-full object-contain mix-blend-multiply"
                            alt="GIMS Logo - Institutional Training Partner"
                            loading="lazy"
                        />
                    </div>
                    <div className="flex-none w-48 h-28 flex items-center justify-center">
                        <img
                            src="/images/about-us/del.jpeg"
                            className="w-full h-full object-contain mix-blend-multiply"
                            alt="DEL Logo - Corporate Coaching Client"
                            loading="lazy"
                        />
                    </div>
                    <div className="flex-none w-48 h-28 flex items-center justify-center">
                        <img
                            src="/images/about-us/jp.jpeg"
                            className="w-full h-full object-contain mix-blend-multiply"
                            alt="JP Logo - Business Communication Training Client"
                            loading="lazy"
                        />
                    </div>
                    <div className="flex-none w-48 h-28 flex items-center justify-center">
                        <img
                            src="/images/about-us/pre.jpeg"
                            className="w-full h-full object-contain mix-blend-multiply"
                            alt="PRE Logo - Performance Enhancement Client"
                            loading="lazy"
                        />
                    </div>
                    <div className="flex-none w-48 h-28 flex items-center justify-center">
                        <img
                            src="/images/about-us/itars.png"
                            className="w-full h-full object-contain mix-blend-multiply"
                            alt="Itars Logo - Leadership Workshops"
                            loading="lazy"
                        />
                    </div>
                    <div className="flex-none w-48 h-28 flex items-center justify-center">
                        <img
                            src="/images/about-us/mentora.png"
                            className="w-full h-full object-contain mix-blend-multiply"
                            alt="Mentora Logo - Training & Development Partner"
                            loading="lazy"
                        />
                    </div>
                </div>
                <p className="mt-6 max-w-2xl text-left text-xs text-neutral-500 italic">
                    <span className="font-semibold">Disclaimer:</span> Our clients include individuals employed by these organisations. This does not imply any endorsement by the respective companies. All logos and trademarks displayed belong to their respective owners, and no ownership or affiliation is claimed.
                </p>
            </div>
        </section>
    );
}
