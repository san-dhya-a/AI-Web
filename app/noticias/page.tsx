"use client";

import { useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Banner from "@/components/layout/banner";
import Image from "next/image";
import Link from "next/link";
import { acuminProBold, acuminProRegular, acuminCondBlackItalic } from "@/app/fonts";
import { newsData } from "./constants";

export default function NoticiasPage() {
    const [activeTab, setActiveTab] = useState("Eventos");
    const tabs = ["Novidades", "Eventos", "Postos Petrobras"];

    return (
        <div className={`bg-white min-h-screen flex flex-col ${acuminProRegular.className}`}>
            <Header />
            <Banner
                title="NOTÍCIAS"
                subtitle="FIQUE POR DENTRO DO QUE INTERESSA"
                backgroundImage="/images/banner1.png"
            />
            <main className="flex-1 w-full max-w-[1100px] mx-auto px-6 py-12">
                {/* Navigation Buttons */}
                <div className="flex gap-4 mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-1 py-4 px-6 text-[20px] font-bold border-2 transition-none ${activeTab === tab
                                ? "bg-[#004415] text-white border-[#004415]"
                                : "bg-white text-[#004415] border-[#004415]"
                                } active:bg-[#369c1f] active:border-[#369c1f] ${acuminProBold.className} rounded-none`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                
                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Featured News (Top 2) */}
                    {newsData.filter(item => item.isFeatured).map((item) => (
                        <Link href={`/noticias/detalhe?id=${item.id}`} key={item.id} className="md:col-span-2 relative h-[320px] group overflow-hidden block">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
                            <div className="absolute top-4 left-4 bg-[#004415]/80 text-white text-[10px] px-2 py-1 font-bold">
                                {item.date}
                            </div>
                            <div className="absolute bottom-10 left-8 right-8">
                                <h2 className={`text-white text-[28px] md:text-[34px] leading-[0.9] font-black uppercase italic ${acuminCondBlackItalic.className}`}>
                                    {item.title}
                                </h2>
                            </div>
                        </Link>
                    ))}
                    {/* Regular News */}
                    {newsData.filter(item => !item.isFeatured).map((item) => (
                        <div key={item.id} className="flex flex-col group border border-gray-100 pb-10 shadow-sm hover:shadow-md transition-shadow bg-white">
                            <Link href={`/noticias/detalhe?id=${item.id}`} className="relative h-[160px] overflow-hidden mb-6 block">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </Link>
                            <div className="px-6 flex flex-col items-start gap-4">
                                <div className="bg-[#f2f2f2] text-[#004415] text-[10px] px-2 py-1 font-bold uppercase tracking-wider">
                                    {item.date}
                                </div>
                                <h3 className={`text-[#004415] text-[20px] leading-[1.15] font-bold ${acuminProBold.className}`}>
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}