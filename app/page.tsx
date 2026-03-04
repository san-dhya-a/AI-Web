"use client";

import Hero from "@/components/landing/Hero";
import LoginSection from "@/components/landing/LoginSection";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <LoginSection />
      <Footer />
    </main>
  );
}
