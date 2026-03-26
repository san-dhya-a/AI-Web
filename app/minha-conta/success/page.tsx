"use client";

import Header from "@/components/layout/header";
import BannerNews from "@/components/layout/banner-news";
import Footer from "@/components/layout/footer";
import SuccessView from "@/components/success/success-view";
import { useState, useEffect } from "react";
import { AuthGuard } from "@/components/auth/Guardians";

export default function MinhaContaSuccessPage() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <AuthGuard>
            <div className="bg-white font-sans">
                <Header />
                <BannerNews />
                <SuccessView
                    topText="A SUA CONTA FOI"
                    bottomText="ATUALIZADA COM SUCESSO!"
                    backHref="/"
                />
                <Footer />
            </div>
        </AuthGuard>
    );
}