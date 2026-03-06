import Link from "next/link";
import { acuminBoldItalic, acuminProBold, acuminCondBlackItalic, acuminProRegular } from "@/app/fonts";

interface BannerProps {
    title?: string;
    subtitle?: string;
}

export default function Banner({
    title = "MINHA CONTA",
    subtitle = "Consulte e edite os seus dados se for necessário."
}: BannerProps) {
    return (
        <section className="bg-[#efefef]">
            {/* Nav Row */}
            <div className="border-b border-gray-200/50">
                <div className="max-w-[1100px] mx-auto px-6 h-[40px] flex items-center justify-end gap-10">
                    {/* Navigation */}
                    <nav>
                        <ul className={`flex items-center gap-6 text-[11px] font-bold text-[#004415] ${acuminProBold.className}`}>
                            <li>
                                <Link href="#" className="hover:opacity-80 transition-opacity flex items-center gap-1">
                                    O Programa
                                    <svg className="w-[10px] h-[10px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:opacity-80 transition-opacity flex items-center gap-1">
                                    Campanhas
                                    <svg className="w-[10px] h-[10px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:opacity-80 transition-opacity flex items-center gap-1">
                                    Notícias
                                    <svg className="w-[10px] h-[10px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:opacity-80 transition-opacity">
                                    Treinamentos
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:opacity-80 transition-opacity">
                                    Site bra
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Search + Icons */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center bg-white rounded-full px-4 py-[4px] shadow-sm border border-gray-100">
                            <input
                                type="text"
                                placeholder="O que está procurando?"
                                className={`bg-transparent text-[10px] w-[180px] outline-none placeholder:text-gray-400 font-medium ${acuminProRegular.className}`}
                            />
                            <button className="ml-1">
                                <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>
                        <button className="relative hover:opacity-80 transition-opacity text-gray-500 bg-white p-1 rounded-full border border-gray-100 shadow-sm">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <span className="absolute top-[3px] right-[3px] w-[4px] h-[4px] bg-red-500 rounded-full border border-white"></span>
                        </button>
                        <button className="hover:opacity-80 transition-opacity text-gray-500 bg-white p-1 rounded-full border border-gray-100 shadow-sm">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Banner Title */}
            <div className="max-w-[1100px] mx-auto px-6 pt-6 pb-3 text-left">
                <h1 className={`text-[46px] md:text-[50px] italic mb-0 text-[#004415] uppercase leading-[0.9] tracking-tighter ${acuminCondBlackItalic.className}`}>
                    {title}
                </h1>
                <p className={`text-[12px] text-[#004415] font-medium ${acuminProRegular.className}`}>
                    {subtitle}
                </p>
            </div>
        </section>
    );
}



