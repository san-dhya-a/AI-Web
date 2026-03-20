"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "@/components/layout/header";
import Banner from "@/components/layout/banner";
import Footer from "@/components/layout/footer";
import { acuminProBold, acuminProRegular } from "@/app/fonts";
import { getCookie } from "@/utils/cookieUtils";
export default function HomePage() {
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        // Guard: If NOT logged in, redirect to root (Login)
        if (!getCookie("auth_token")) {
            router.push("/");
        }
    }, [router]);

    if (!isMounted) return null;

    return (
        <div className={`bg-white min-h-screen flex flex-col ${acuminProRegular.className}`} suppressHydrationWarning>
            <Header />
            <Banner 
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
    );
}
