import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const FloatingCTA = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div
            className={`fixed bottom-6 left-6 z-50 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
        >
            <Link
                to="/contact"
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all transform hover:scale-105 font-semibold"
            >
                <span className="text-sm">🔵</span>
                <span>Book a Free Consultation</span>
            </Link>
        </div>
    );
};
