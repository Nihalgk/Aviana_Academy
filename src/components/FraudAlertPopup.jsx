import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FraudAlertPopup = () => {
    const [isOpen, setIsOpen] = useState(true);
    const modalRef = useRef(null);
    const previousFocusRef = useRef(null);

    // Close handlers
    const closePopup = () => setIsOpen(false);

    // Auto-close after 30 seconds
    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                setIsOpen(false);
            }, 30000);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    // Accessibility: Escape key and focus trap
    useEffect(() => {
        if (isOpen) {
            // Save previous focus
            previousFocusRef.current = document.activeElement;
            // Focus the modal or first focusable element
            if (modalRef.current) {
                modalRef.current.focus();
            }

            const handleKeyDown = (e) => {
                if (e.key === 'Escape') {
                    closePopup();
                }
                
                // Basic focus trap
                if (e.key === 'Tab') {
                    const focusableElements = modalRef.current.querySelectorAll(
                        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                    );
                    const firstElement = focusableElements[0];
                    const lastElement = focusableElements[focusableElements.length - 1];

                    if (e.shiftKey) {
                        if (document.activeElement === firstElement) {
                            lastElement.focus();
                            e.preventDefault();
                        }
                    } else {
                        if (document.activeElement === lastElement) {
                            firstElement.focus();
                            e.preventDefault();
                        }
                    }
                }
            };

            document.addEventListener('keydown', handleKeyDown);
            
            // Prevent scrolling on body
            document.body.style.overflow = 'hidden';

            return () => {
                document.removeEventListener('keydown', handleKeyDown);
                document.body.style.overflow = 'auto';
                if (previousFocusRef.current) {
                    previousFocusRef.current.focus();
                }
            };
        }
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closePopup}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        ref={modalRef}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="fraud-alert-title"
                        tabIndex={-1}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: 'spring', duration: 0.5, bounce: 0.3 }}
                        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden outline-none"
                    >
                        {/* Red accent bar at top */}
                        <div className="h-2 bg-red-600 w-full" />
                        
                        <div className="p-6 sm:p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-xl">
                                    ⚠️
                                </div>
                                <h2 id="fraud-alert-title" className="text-xl sm:text-2xl font-bold text-gray-900">
                                    Important Notice
                                </h2>
                            </div>

                            <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                                <p>
                                    <strong className="text-gray-900 font-semibold">Aviana Academy</strong> is an independent corporate training and learning company.
                                </p>
                                
                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                                    <p className="mb-2">We have only <strong className="text-red-700">ONE</strong> branch/office, located at:</p>
                                    <p className="font-medium text-gray-900 leading-relaxed">
                                        Aviana Academy<br />
                                        Unit No. 2201A, World Trade Center (WTC)<br />
                                        Orion Mall, Brigade Gateway Campus<br />
                                        Bengaluru – 560055
                                    </p>
                                </div>

                                <p>
                                    We are <strong className="text-gray-900">not associated</strong> with "Aviana Softskills" or any similarly named company or branch, at any other location.
                                </p>

                                <div className="mt-6 pt-4 border-t border-gray-100">
                                    <p className="mb-3 text-sm text-gray-500">
                                        If anyone claims to represent Aviana Academy from any other address, please verify with us directly before making any payment:
                                    </p>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 font-medium text-gray-900">
                                        <a href="tel:+919845739709" className="flex items-center gap-2 hover:text-red-700 transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-red-600">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                            </svg>
                                            +91 98457 39709
                                        </a>
                                        <a href="mailto:info@avianaacademy.in" className="flex items-center gap-2 hover:text-red-700 transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-red-600">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                            </svg>
                                            info@avianaacademy.in
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-2 text-right">
                                <button
                                    onClick={closePopup}
                                    className="w-full sm:w-auto px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-sm transition-colors focus:ring-4 focus:ring-red-100 outline-none"
                                >
                                    Got it, thanks
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default FraudAlertPopup;
