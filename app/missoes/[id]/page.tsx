"use client";

import { useParams } from "next/navigation";
import Header from "@/components/layout/header";
import BannerNews from "@/components/layout/banner-news";
import Footer from "@/components/ui/footer";
import { AuthGuard } from "@/components/auth/Guardians";

export default function MissionDetailPage() {
    const params = useParams();
    const id = params.id as string;

    return (
        <AuthGuard>
            <div className="min-h-screen flex flex-col bg-[#f2f2f2]">
                <Header />
                <BannerNews 
                    title="DETALHES DA MISSÃO" 
                    subtitle={`ID: ${id}`} 
                    backgroundImage="/images/missoesbanner.png"
                />
                
                <main className="flex-grow pt-8">
                    <div className="container max-w-[1100px] mx-auto px-6">
                        <div className="bg-white p-8 rounded-none border border-gray-100 shadow-sm">
                            <h2 className="text-[32px] font-bold text-[#004415] mb-4">Mission Detail Placeholder</h2>
                            <p className="text-gray-600">This page was restored from backup. Detailed content for mission {id} will be implemented shortly.</p>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </AuthGuard>
    );
}
