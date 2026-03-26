"use client";

import { useState, useRef, useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BannerNews from "@/components/layout/banner-news";

interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

interface FAQGroup {
    id: string;
    subtitle: string;
    faqs: FAQItem[];
}

const faqData: FAQGroup[] = [
    {
        id: "group-1",
        subtitle: "Excepteur sint occaecat cupidatat non proident.",
        faqs: [
            {
                id: "q1-1",
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
                answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
                id: "q1-2",
                question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
                answer: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
            },
            {
                id: "q1-3",
                question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
                answer: "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."
            },
            {
                id: "q1-4",
                question: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur?",
                answer: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            },
            {
                id: "q1-5",
                question: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum?",
                answer: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus."
            }
        ]
    },
    {
        id: "group-2",
        subtitle: "Excepteur sint occaecat cupidatat non proident.",
        faqs: [
            {
                id: "q2-1",
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
                answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
            },
            {
                id: "q2-2",
                question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
                answer: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
            },
            {
                id: "q2-3",
                question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
                answer: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            },
            {
                id: "q2-4",
                question: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur?",
                answer: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."
            },
            {
                id: "q2-5",
                question: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum?",
                answer: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur."
            }
        ]
    },
    {
        id: "group-3",
        subtitle: "Excepteur sint occaecat cupidatat non proident.",
        faqs: [
            {
                id: "q3-1",
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
                answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
            },
            {
                id: "q3-2",
                question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
                answer: "Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem."
            },
            {
                id: "q3-3",
                question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
                answer: "Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
            },
            {
                id: "q3-4",
                question: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur?",
                answer: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
            },
            {
                id: "q3-5",
                question: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum?",
                answer: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et."
            }
        ]
    }
];

function AccordionItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
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
        <div className="border-b border-gray-200 overflow-hidden bg-transparent">
            <button
                type="button"
                className="w-full flex justify-between items-center py-5 text-left focus:outline-none group transition-colors duration-150"
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
                <div className="pb-5 pt-0 text-[13px] md:text-[14px] text-gray-600 leading-relaxed max-w-[90%]">
                    {answer}
                </div>
            </div>
        </div>
    );
}

export default function FAQPage() {
    const [openId, setOpenId] = useState<string | null>(null);

    const toggleItem = (id: string) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <div className="bg-white min-h-screen flex flex-col font-sans">
            <Header />
            <BannerNews title="FAQ" subtitle="" />

            <main className="flex-1 w-full max-w-[1100px] mx-auto px-6 py-12 md:py-16">
                <div>
                    {faqData.map((group) => (
                        <div key={group.id} className="mb-12 last:mb-0">
                            <h3 className="text-[#004415] font-bold text-[17px] md:text-[19px] mb-6">
                                {group.subtitle}
                            </h3>
                            <div className="bg-transparent overflow-hidden">
                                {group.faqs.map((faq) => (
                                    <AccordionItem
                                        key={faq.id}
                                        question={faq.question}
                                        answer={faq.answer}
                                        isOpen={openId === faq.id}
                                        onClick={() => toggleItem(faq.id)}
                                    />
                                ))}
                            </div>
                            <hr className="border-gray-200 mt-12" />
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
