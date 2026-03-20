"use client";

import Hero from "@/components/landing/Hero";
import LoginSection from "@/components/landing/LoginSection";
import Footer from "@/components/ui/footer";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getCookie } from "@/utils/cookieUtils";

import { GuestGuard } from "@/components/auth/Guardians";

export default function RootPage() {
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;
    return (
        <GuestGuard>
            <main className="min-h-screen flex flex-col">
                <Hero />
                <LoginSection />
                <Footer />
            </main>
        </GuestGuard>
    );
}
