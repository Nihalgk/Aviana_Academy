import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const WhatsAppButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const phoneNumber = '919845739709'; // Indian number format without '+' for API

    const messages = [
        {
            id: 1,
            label: "Enquire about training programs",
            text: "Hi, I would like to enquire about your training programs."
        },
        {
            id: 2,
            label: "Book a coaching session",
            text: "Hi, I am interested in booking a personal coaching session."
        },
        {
            id: 3,
            label: "General query",
            text: "Hi, I have a general query. Please assist."
        }
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleMessageClick = (text) => {
        const encodedText = encodeURIComponent(text);
        const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;
        window.open(url, '_blank');
        setIsOpen(false);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            {/* Menu Options */}
            {isOpen && (
                <div className="flex flex-col gap-2 transition-all duration-300 ease-in-out">
                    {messages.map((msg) => (
                        <button
                            key={msg.id}
                            onClick={() => handleMessageClick(msg.text)}
                            className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg hover:bg-gray-50 transition-colors text-sm font-medium border border-gray-100 whitespace-nowrap text-left"
                            style={{ animation: 'fadeIn 0.2s ease-out' }}
                        >
                            {msg.label}
                        </button>
                    ))}
                </div>
            )}

            {/* Main Toggle Button */}
            <button
                onClick={toggleMenu}
                className={`flex items-center justify-center p-4 rounded-full shadow-xl transition-all duration-300 ${isOpen ? 'bg-gray-600 rotate-90' : 'bg-[#25D366] hover:bg-[#20bd5a] hover:scale-110'
                    }`}
                aria-label="Contact on WhatsApp"
            >
                {isOpen ? (
                    <IoClose className="text-white text-2xl" />
                ) : (
                    <FaWhatsapp className="text-white text-3xl" />
                )}
            </button>
        </div>
    );
};

export default WhatsAppButton;
