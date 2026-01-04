"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { RxChevronDown } from "react-icons/rx";
import { Link } from "react-router-dom";

const useNavbarLogic = () => {
    const menuRef = useRef(null);
    const buttonRef = useRef(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const isMobile = useMediaQuery("(max-width: 991px)");
    const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
    const openOnMobileDropdownMenu = () => {
        setIsDropdownOpen((prev) => !prev);
    };
    const openOnDesktopDropdownMenu = () => {
        !isMobile && setIsDropdownOpen(true);
    };
    const closeOnDesktopDropdownMenu = () => {
        !isMobile && setIsDropdownOpen(false);
    };
    useEffect(() => {
        if (typeof window === "undefined") return;
        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setIsMobileMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
    const animateDropdownMenu = isDropdownOpen ? "open" : "close";
    const animateDropdownMenuIcon = isDropdownOpen ? "rotate" : "initial";
    return {
        menuRef,
        buttonRef,
        toggleMobileMenu,
        openOnDesktopDropdownMenu,
        closeOnDesktopDropdownMenu,
        openOnMobileDropdownMenu,
        animateMobileMenu,
        animateDropdownMenu,
        animateDropdownMenuIcon,
    };
};

export function Navbar14() {
    const useActive = useNavbarLogic();
    return (
        <section
            id="navbar"
            className="fixed inset-0 bottom-auto z-[1000] mx-auto mt-5 flex w-full bg-transparent px-[5%] md:mt-6 lg:mx-[5%] lg:w-auto lg:px-0"
        >
            <div className="mx-auto flex min-h-16 w-full max-w-xxl items-center justify-between gap-x-4 gap-y-4 border border-neutral-800 bg-black text-white px-5 md:min-h-18 md:px-8 rounded-3xl">
                <Link to="/" className="flex items-center gap-3">
                    <img
                        src="/images/home/logo.jpg"
                        alt="Aviana Academy"
                        className="h-14 w-auto rounded-full"
                    />
                    <span className="text-xl font-bold">Aviana Academy</span>
                </Link>
                <button
                    ref={useActive.buttonRef}
                    className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
                    onClick={useActive.toggleMobileMenu}
                >
                    <motion.span
                        className="my-[3px] h-0.5 w-6 bg-white"
                        animate={useActive.animateMobileMenuButtonSpan}
                        variants={{
                            open: { translateY: 8, transition: { delay: 0.1 } },
                            rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
                            closed: {
                                translateY: 0,
                                rotate: 0,
                                transition: { duration: 0.2 },
                            },
                        }}
                    />
                    <motion.span
                        className="my-[3px] h-0.5 w-6 bg-white"
                        animate={useActive.animateMobileMenu}
                        variants={{
                            open: { width: 0, transition: { duration: 0.1 } },
                            closed: {
                                width: "1.5rem",
                                transition: { delay: 0.3, duration: 0.2 },
                            },
                        }}
                    />
                    <motion.span
                        className="my-[3px] h-0.5 w-6 bg-white"
                        animate={useActive.animateMobileMenuButtonSpan}
                        variants={{
                            open: { translateY: -8, transition: { delay: 0.1 } },
                            rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
                            closed: {
                                translateY: 0,
                                rotate: 0,
                                transition: { duration: 0.2 },
                            },
                        }}
                    />
                </button>
                <motion.div
                    variants={{
                        open: { height: "var(--height, 100vh)" },
                        close: { height: "auto" },
                    }}
                    initial="close"
                    exit="close"
                    animate={useActive.animateMobileMenu}
                    className="absolute left-0 right-0 top-full w-full overflow-hidden lg:static lg:left-auto lg:right-auto lg:top-auto lg:w-auto lg:overflow-visible lg:[--height:auto]"
                >
                    <motion.div
                        variants={{
                            open: { y: 0 },
                            close: { y: "var(--translate-y, -100%)" },
                        }}
                        animate={useActive.animateMobileMenu}
                        initial="close"
                        exit="close"
                        transition={{ duration: 0.3 }}
                        className="absolute left-0 right-0 top-0 mx-auto min-w-[200px] justify-self-center bg-black px-[5%] text-center lg:static lg:inset-auto lg:mx-0 lg:px-0 lg:text-left lg:[--translate-y:0%]"
                    >
                        <div
                            ref={useActive.menuRef}
                            className="flex w-full flex-col border border-t-0 border-neutral-800 bg-black p-5 md:p-8 lg:w-auto lg:flex-row lg:border-none lg:bg-none lg:p-0"
                        >
                            <div
                                onMouseEnter={useActive.openOnDesktopDropdownMenu}
                                onMouseLeave={useActive.closeOnDesktopDropdownMenu}
                            >
                                <div className="flex w-full items-center justify-center gap-4 py-3 text-left text-md lg:flex-none lg:justify-start lg:gap-2 lg:px-4 lg:py-2 lg:text-base">
                                    <Link to="/our-services" className="flex-grow lg:flex-grow-0">
                                        Our Services
                                    </Link>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            useActive.openOnMobileDropdownMenu();
                                        }}
                                        className="p-2"
                                    >
                                        <motion.span
                                            variants={{
                                                rotated: { rotate: 180 },
                                                initial: { rotate: 0 },
                                            }}
                                            animate={useActive.animateDropdownMenuIcon}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <RxChevronDown />
                                        </motion.span>
                                    </button>
                                </div>
                                <AnimatePresence>
                                    <motion.nav
                                        animate={useActive.animateDropdownMenu}
                                        initial="close"
                                        exit="close"
                                        variants={{
                                            open: {
                                                opacity: "var(--opacity-open, 100%)",
                                                y: 0,
                                                visibility: "visible",
                                                height: "auto",
                                            },
                                            close: {
                                                opacity: "var(--opacity-close, 0)",
                                                y: "var(--y-close, 0%)",
                                                visibility: "hidden",
                                                height: "var(--height, 0)",
                                            },
                                        }}
                                        transition={{ duration: 0.2 }}
                                        className="bg-black text-white lg:absolute lg:z-50 lg:border lg:border-white lg:p-2 lg:[--y-close:25%] lg:[--height:auto]"
                                    >
                                        <Link
                                            to="/corporate-training"
                                            className="block py-3 text-center lg:px-4 lg:py-2 lg:text-left lg:text-base"
                                        >
                                            Corporate training
                                        </Link>
                                        <Link
                                            to="/institutional-training"
                                            className="block py-3 text-center lg:px-4 lg:py-2 lg:text-left lg:text-base"
                                        >
                                            Institutional training
                                        </Link>
                                        <Link
                                            to="/individual-coaching"
                                            className="block py-3 text-center lg:px-4 lg:py-2 lg:text-left lg:text-base"
                                        >
                                            Individual coaching
                                        </Link>
                                        <Link
                                            to="/image-management"
                                            className="block py-3 text-center lg:px-4 lg:py-2 lg:text-left lg:text-base"
                                        >
                                            Image management
                                        </Link>
                                    </motion.nav>
                                </AnimatePresence>
                            </div>
                            <Link
                                to="/about-us"
                                className="relative block py-3 text-center text-md lg:px-4 lg:py-2 lg:pt-3 lg:text-left lg:text-base"
                            >
                                About us
                            </Link>
                            <Link
                                to="/gallery"
                                className="relative block py-3 text-center text-md lg:px-4 lg:py-2 lg:pt-3 lg:text-left lg:text-base"
                            >
                                Gallery
                            </Link>
                            <Link
                                to="/blog"
                                className="relative block py-3 text-center text-md lg:px-4 lg:py-2 lg:pt-3 lg:text-left lg:text-base"
                            >
                                Blog
                            </Link>
                            <div className="rt-4 mt-4 flex flex-col items-center gap-4 lg:ml-8 lg:mt-0 lg:flex-row">
                                <Link to="/contact" className="w-full">
                                    <Button
                                        title="Contact"
                                        variant="secondary"
                                        size="sm"
                                        className="w-full bg-white text-black border-none hover:bg-red-600 hover:text-white"
                                    >
                                        Contact
                                    </Button>
                                </Link>
                                <Link to="/" className="w-full">
                                    <Button title="Home" size="sm" className="w-full bg-white text-black hover:bg-neutral-200 border-none">
                                        Home
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
