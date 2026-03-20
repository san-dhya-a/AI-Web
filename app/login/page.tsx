"use client";

import Hero from "@/components/landing/Hero";
import LoginSection from "@/components/landing/LoginSection";
import Footer from "@/components/ui/footer";

import { GuestGuard } from "@/components/auth/Guardians";

export default function LoginPage() {
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
