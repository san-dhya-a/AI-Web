"use client";

import { useEffect, useState } from "react";
import Header from "@/components/layout/header";
import BannerNews from "@/components/layout/banner-news";
import Footer from "@/components/layout/footer";
import { acuminProBold, acuminProRegular } from "@/app/fonts";
import { AuthGuard } from "@/components/auth/Guardians";

export default function HomePage() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <AuthGuard>
            <div className={`bg-white min-h-screen flex flex-col ${acuminProRegular.className}`} suppressHydrationWarning>
                <Header />
                <BannerNews 
                    title="Bem-vindo" 
                    subtitle="Esta é a sua página inicial temporária. Você está logado com sucesso." 
                />

                <main className="flex-1 bg-white">
                    <div className="max-w-[1100px] mx-auto px-6 py-20 text-center">
                        <h2 className={`text-[32px] text-[#004415] mb-4 ${acuminProBold.className}`}>
                            Olá, Marcelo Almeida!
                        </h2>
                        <p className="text-[16px] text-gray-600 max-w-2xl mx-auto">
                            Você acessou a área restrita do site. Em breve, novos conteúdos e funcionalidades estarão disponíveis aqui.
                        </p>
                    </div>
                </main>

                <Footer />
            </div>
        </AuthGuard>
    );
}
