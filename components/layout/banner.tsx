import Link from "next/link";
import Image from "next/image";
import { acuminBoldItalic, acuminProBold, acuminCondBlackItalic, acuminProRegular } from "@/app/fonts";

interface BannerProps {
    title?: string;
    subtitle?: string;
    isMounted?: boolean;
    backgroundImage?: string;
}

export default function Banner({
    title = "MINHA CONTA",
    subtitle = "Consulte e edite os seus dados se for necessário.",
    backgroundImage,
}: BannerProps) {
    return (
        <>
            {/* Nav Row */}
            <div className="bg-[#f2f2f2] sticky top-[95px] z-40" suppressHydrationWarning>
                <div className="max-w-[1100px] mx-auto px-6 h-[45px] flex items-center justify-end gap-10">
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
                            <li className="relative group/noticias">
                                <Link href="/noticias" className="hover:text-[#369c1f] transition-colors flex items-center gap-1">
                                    Notícias
                                    <svg className="w-[10px] h-[10px] transform group-hover/noticias:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </Link>
                                {/* Dropdown Menu */}
                                <div className="absolute top-[45px] left-0 w-[180px] bg-[#f2f2f2] hidden group-hover/noticias:block transition-all duration-200 z-[100] shadow-lg border-t-2 border-[#004415]">
                                    <ul className="py-0">
                                        <li>
                                            <Link href="/noticias" className="block px-6 py-3 hover:bg-gray-200 transition-colors">
                                                Eventos
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/noticias" className="block px-6 py-3 hover:bg-gray-200 transition-colors border-t border-gray-200">
                                                Postos Petrobras
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/noticias" className="block px-6 py-3 hover:bg-gray-200 transition-colors border-t border-gray-200">
                                                Novidades
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
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
                                className={`bg-transparent text-[10px] w-[180px] outline-none placeholder:text-gray-400 ${acuminProRegular.className}`}
                                suppressHydrationWarning
                            />
                            <button className="ml-1">
                                <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>
                        <button className="relative hover:opacity-80 transition-opacity text-[#666666] bg-white p-1.5 rounded-full border border-gray-100 shadow-sm flex items-center justify-center">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <span className="absolute top-[2px] right-[2px] w-[5px] h-[5px] bg-[#FF0000] rounded-full border border-white"></span>
                        </button>
                        <button className="hover:opacity-80 transition-opacity text-[#666666] bg-white p-1.5 rounded-full border border-gray-100 shadow-sm flex items-center justify-center">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Banner Title */}
            <section className={`relative ${backgroundImage ? 'h-[150px] md:h-[180px]' : 'bg-[#f2f2f2] border-b border-gray-100'}`} suppressHydrationWarning>
                {backgroundImage && (
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={backgroundImage}
                            alt="Banner Background"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/20"></div> {/* Subtle overlay for better text contrast if needed */}
                    </div>
                )}
                <div className={`relative z-10 max-w-[1100px] mx-auto px-6 ${backgroundImage ? 'h-full flex flex-col justify-center' : 'pt-5 pb-5 text-left'}`}>
                    <h1 className={`text-[46px] md:text-[50px] italic mb-0 uppercase leading-[0.9] tracking-tighter ${acuminCondBlackItalic.className} ${backgroundImage ? 'text-white' : 'text-[#004415]'}`}>
                        {title}
                    </h1>
                    {subtitle && (
                        <p className={`text-[12px] font-medium mt-1 inline-block ${acuminProRegular.className} ${backgroundImage ? 'text-white' : 'text-[#004415]'}`}>
                            {subtitle}
                        </p>
                    )}
                </div>
            </section>
        </>
    );
}



