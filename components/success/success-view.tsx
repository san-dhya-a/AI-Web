import Link from "next/link";
import React from "react";
import { acuminCondBlackItalic, acuminProBold, acuminProRegular } from "@/app/fonts";

interface SuccessViewProps {
    topText: React.ReactNode;
    bottomText: React.ReactNode;
    subtitle?: string;
    backHref?: string;
}

export default function SuccessView({
    topText,
    bottomText,
    subtitle = "Pronto!",
    backHref = "/",
}: SuccessViewProps) {
    return (
        <main className="bg-white w-full">
            <div className="max-w-[1100px] mx-auto px-6 pt-8 pb-32">
                {/* Main Success Messages */}
                <div className="mb-20 text-left">
                    <p className={`font-bold text-[#148e1c] text-[14px] mb-1 ${acuminProBold.className}`}>
                        {subtitle}
                    </p>
                    <h2
                        className={`text-[42px] md:text-[50px] tracking-tighter uppercase leading-[1.05] md:leading-[0.95] ${acuminCondBlackItalic.className}`}
                    >
                        <span className="text-[#004415]">{topText}</span> <br />
                        <span className="text-[#148e1c]">{bottomText}</span>
                    </h2>
                </div>

                {/* Action Button */}
                <div className="text-left">
                    <Link href={backHref}>
                        <button className={`flex items-center gap-2 bg-[#004415] text-white font-bold text-[14px] px-8 py-3 rounded-sm hover:bg-[#003310] transition-colors ${acuminProBold.className}`}>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Voltar
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
