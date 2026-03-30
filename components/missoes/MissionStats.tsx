"use client";

import Image from "next/image";
import { acuminProBold, acuminProRegular } from "@/app/fonts";

const STATS_DATA = [
    {
        label: "Missões disponíveis",
        value: "07",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="#369c1f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
            </svg>
        ),
        isGreen: true
    },
    {
        label: "Missões completas",
        value: "37",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="#004415" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <polyline points="9 11 12 14 22 4"></polyline>
            </svg>
        ),
        isGreen: true
    },
    {
        label: "Pontos ganhos em Missões",
        value: "554.200",
        iconPath: "/assets/image/icon/moeda.svg",
        isGreen: true
    },
    {
        label: "Diamantes ganhos em Missões",
        value: "21.334",
        icon: (
            <svg viewBox="0 0 24 24" fill="#2B63E1" className="w-8 h-8">
                <path d="M6 3h12l4 6-10 12L2 9z"></path>
            </svg>
        ),
        isBlue: true
    }
];

export default function MissionStats() {
    return (
        <section className="py-4 bg-white">
            <div className="container max-w-[1100px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {STATS_DATA.map((stat, index) => (
                        <div key={index} className="bg-white p-6 border border-gray-100 shadow-sm flex items-center justify-between group hover:bg-[#f2f2f2] transition-all duration-300 cursor-pointer">
                            <div className="flex flex-col">
                                <span className={`${acuminProBold.className} text-[28px] leading-none ${stat.isGreen ? 'text-[#369c1f]' : stat.isBlue ? 'text-blue-600' : 'text-gray-900'} mb-1`}>
                                    {stat.value}
                                </span>
                                <span className={`${acuminProRegular.className} text-[11px] text-gray-500 font-bold tracking-tight`}>
                                    {stat.label}
                                </span>
                            </div>
                            <div className="w-10 h-10 flex items-center justify-center shrink-0">
                                {stat.iconPath ? (
                                    <div className="w-8 h-8 relative transition-opacity">
                                        <Image src={stat.iconPath} alt={stat.label} fill className="object-contain" />
                                    </div>
                                ) : (
                                    <div className="transition-opacity">
                                        {stat.icon}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
