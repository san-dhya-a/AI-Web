"use client";

import Header from "@/components/layout/header";
import BannerNews from "@/components/layout/banner-news";
import Footer from "@/components/layout/footer";
import MissionStats from "@/components/missoes/MissionStats";
import MissionInfo from "@/components/missoes/MissionInfo";
import MissionList from "@/components/missoes/MissionList";
import ClosedMissions from "../../components/missoes/ClosedMissions";
import { AuthGuard } from "@/components/auth/Guardians";

export default function MissoesPage() {
    return (
        <AuthGuard>
            <div className="min-h-screen flex flex-col bg-white">
                <Header />
                <BannerNews
                    title="MISSÕES"
                    subtitle="PARTICIPE E GANHE PONTOS EXTRAS!"
                    backgroundImage="/images/missoesbanner.png"
                />

                <main className="flex-grow">
                    <MissionStats />
                    <MissionInfo />
                    <MissionList />
                    <ClosedMissions />
                </main>

                <Footer />
            </div>
        </AuthGuard>
    );
}
