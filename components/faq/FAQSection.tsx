"use client";

import { useState } from "react";
import AccordionItem from "./AccordionItem";

export interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

export interface FAQGroup {
    id: string;
    subtitle: string;
    faqs: FAQItem[];
}

interface FAQSectionProps {
    group: FAQGroup;
}

export default function FAQSection({ group }: FAQSectionProps) {
    const [openId, setOpenId] = useState<string | null>(null);

    const toggleItem = (id: string) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <section className="mb-12">
            <h3 className="text-[#004415] font-bold text-[17px] md:text-[19px] mb-6">
                {group.subtitle}
            </h3>
            <div className="bg-white rounded-sm shadow-sm overflow-hidden border border-gray-100">
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
        </section>
    );
}
