"use client";

import { useRef, useEffect, useState } from "react";

interface AccordionItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

export default function AccordionItem({ question, answer, isOpen, onClick }: AccordionItemProps) {
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<number | undefined>(0);

    useEffect(() => {
        if (isOpen) {
            const contentEl = contentRef.current;
            if (contentEl) {
                setHeight(contentEl.scrollHeight);
            }
        } else {
            setHeight(0);
        }
    }, [isOpen]);

    return (
        <div className="bg-white border-b border-gray-200 last:border-b-0 overflow-hidden">
            <button
                type="button"
                className="w-full flex justify-between items-center px-4 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004415] focus-visible:ring-opacity-50 group hover:bg-gray-50 transition-colors duration-150"
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <span className="text-[13px] md:text-[14px] font-bold text-gray-900 pr-6 leading-snug tracking-tight">
                    {question}
                </span>
                <span className="flex-shrink-0 text-gray-500 group-hover:text-gray-900 transition-colors duration-200">
                    <svg
                        className={`w-4 h-4 transform transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            <div
                ref={contentRef}
                style={{ height: height !== undefined ? `${height}px` : "auto" }}
                className={`transition-all duration-300 ease-in-out ${isOpen ? "opacity-100" : "opacity-0"}`}
            >
                <div className="px-4 pb-5 pt-0 text-[13px] md:text-[14px] text-gray-600 leading-relaxed">
                    {answer}
                </div>
            </div>
        </div>
    );
}
