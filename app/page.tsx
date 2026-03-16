"use client";

import Hero from "@/components/landing/Hero";
import LoginSection from "@/components/landing/LoginSection";
import Footer from "@/components/ui/footer";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getCookie } from "@/utils/cookieUtils";

export default function RootPage() {
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        // Guard: If already logged in, redirect to home
        if (getCookie("auth_token")) {
            router.push("/home");
        }
    }, [router]);

    if (!isMounted) return null;
    return (
        <main className="min-h-screen flex flex-col">
            <Hero />
            <LoginSection />
            <Footer />
        </main>
    );
}
