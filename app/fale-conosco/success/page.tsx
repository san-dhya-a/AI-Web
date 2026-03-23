"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/header";
import Banner from "@/components/layout/banner";
import Footer from "@/components/layout/footer";
import SuccessView from "@/components/success/success-view";
import { AuthGuard } from "@/components/auth/Guardians";

export default function FaleConoscoSuccessPage() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <AuthGuard>
            <div className="bg-white min-h-screen flex flex-col font-sans">
                <Header />
                <Banner
                    title="FALE CONOSCO"
                    subtitle="Dúvidas, críticas ou sugestões? Entre em contato conosco."
                />
                <SuccessView
                    topText="A SUA MENSAGEM FOI"
                    bottomText="ENVIADA COM SUCESSO!"
                    backHref="/home"
                />
                <Footer />
            </div>
        </AuthGuard>
    );
}
