"use client";

import Image from "next/image";
import { acuminProRegular, acuminProBold } from "@/app/fonts";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { eraseCookie } from "@/utils/cookieUtils";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    // Close menu when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogout = () => {
        eraseCookie("auth_token");
        eraseCookie("user_id");
        window.location.href = "/";
    };

    return (
        <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-[1100px] mx-auto px-6 h-[95px] flex items-center justify-between">
                {/* Left Side: Logo */}
                <div className="flex shrink-0">
                    <Image
                        src="/assets/image/icon/vibra.png"
                        alt="Vibra Logo"
                        width={220}
                        height={55}
                        className="h-12 w-auto cursor-pointer"
                        onClick={() => router.push("/home")}
                    />
                </div>

                {/* Right Side: User Profile (Hardcoded as requested) */}
                <div className="flex items-center">
                    <div className="relative" ref={menuRef}>
                        <div 
                            className="flex items-center gap-2 cursor-pointer group"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-gray-200/50 shadow-sm transition-all bg-white">
                                <Image
                                    src="/assets/image/icon/head.png"
                                    alt="Profile"
                                    width={40}
                                    height={40}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col text-left">
                                <p className={`text-[11px] text-gray-700 leading-tight ${acuminProRegular.className}`}>
                                    Olá, <span className={`font-bold text-black ${acuminProBold.className}`}>Marcelo Almeida</span>
                                </p>
                                <div className="flex items-center justify-start gap-1 mt-0.5">
                                    <div className="flex items-center justify-center shrink-0">
                                        <Image src="/assets/image/icon/moeda.svg" alt="PTS" width={14} height={14} className="w-3.5 h-3.5" />
                                    </div>
                                    <p className={`text-[11px] text-gray-600 font-medium leading-tight ${acuminProRegular.className}`}>
                                        Você tem <span className={`font-bold text-[#04BF58] text-[12px] ${acuminProBold.className}`}>345.400 PTS</span>
                                    </p>
                                    <svg className={`w-2 h-2 text-[#004415] transition-transform duration-300 ml-0.5 ${isMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Dropdown Menu */}
                        {isMenuOpen && (
                            <div className="absolute right-0 mt-4 w-[320px] bg-white rounded-[4px] shadow-[0_15px_40px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden z-[100]">
                                <div className="p-4 pb-3 flex items-start gap-4">
                                    <div className="w-[54px] h-[54px] rounded-full overflow-hidden border border-gray-100 shrink-0 bg-gray-50">
                                        <Image src="/assets/image/icon/head.png" alt="Profile Large" width={54} height={54} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex flex-col pt-0.5">
                                        <p className={`text-[12px] text-gray-700 ${acuminProRegular.className}`}>
                                            Olá, <span className="font-bold text-black">Marcelo Almeida</span>
                                        </p>
                                        <div className="flex items-center gap-1.5 mt-0.5">
                                            <Image src="/assets/image/icon/moeda.svg" alt="PTS" width={14} height={14} />
                                            <div className="flex items-baseline gap-1">
                                                <p className={`text-[15px] text-gray-700 font-medium ${acuminProRegular.className}`}>Você tem</p>
                                                <p className={`text-[16px] font-black text-[#04BF58] ${acuminProBold.className}`}>345.400 <span className="text-[12px] font-bold">PTS</span></p>
                                            </div>
                                        </div>
                                        <p className="text-[10px] text-gray-500 font-bold mt-2.5 leading-none">21.000 PTS a expirar em 30 dias.</p>
                                    </div>
                                </div>
                                <div className="px-4 border-t border-gray-50 my-1"></div>
                                <div className="px-4 py-4 bg-white space-y-6">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <svg className="w-5 h-5 text-[#001AFF]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4 10l8 12 8-12-8-8z" /></svg>
                                            <p className={`text-[18px] font-bold text-[#001AFF] ${acuminProBold.className}`}>323.900 <span className="text-[9px] uppercase font-black tracking-widest text-[#001AFF] ml-0.5">Diamantes</span></p>
                                        </div>
                                        <p className="text-[10px] text-[#001AFF] font-bold underline cursor-pointer hover:text-blue-700 transition-colors inline-block ml-[28px]">O que são DIAMANTES?</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest leading-none">Sua categoria</p>
                                        <div className="flex items-center gap-2">
                                            <svg className="w-5 h-5 text-[#FFD700]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                                            <p className={`text-[22px] font-bold text-[#004415] ${acuminProBold.className}`}>Especialista</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 pb-2 space-y-2">
                                    <button className="block w-full py-2.5 bg-[#F2F2F2] hover:bg-green-700 hover:text-white text-[#004415] text-[13px] font-bold text-center transition-colors rounded-[3px]" onClick={() => { setIsMenuOpen(false); router.push("/minha-conta"); }}>
                                        Minha Conta
                                    </button>
                                    <button className="block w-full py-2.5 bg-[#F2F2F2] text-[#004415] text-[13px] font-bold transition-colors rounded-[3px]">Meus Pedidos</button>
                                    <button className="block w-full py-2.5 bg-[#F2F2F2] text-[#004415] text-[13px] font-bold transition-colors rounded-[3px]">Extrato</button>
                                </div>
                                <div className="px-4 py-4">
                                    <button onClick={handleLogout} className={`w-full py-2.5 border border-[#004415] text-[#004415] text-[14px] font-bold hover:bg-green-700 hover:text-white transition-all rounded-[3px] ${acuminProBold.className}`}>
                                        Sair
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
