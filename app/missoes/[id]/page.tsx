"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { acuminProBold, acuminProRegular } from "@/app/fonts";
import { MISSIONS_DATA } from "@/services/missoes-data";
import Header from "@/components/layout/header";
import BannerNews from "@/components/layout/banner-news";
import MissionStats from "@/components/missoes/MissionStats";
import Footer from "@/components/layout/footer";
import { AuthGuard } from "@/components/auth/Guardians";

export default function MissionDetailPage() {
    const params = useParams();
    const id = params.id as string;

    // Find the current mission from the shared data
    const mission = MISSIONS_DATA.find(m => m.id === id);

    // Fallback if mission not found
    const displayTitle = mission?.title || id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    const displayDescription = mission?.objective || "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.";
    const displayValidity = mission?.validity || "Até 03/05/2025";
    const displayReward = mission?.rewardValue || "32.000";
    const rewardUnit = mission?.rewardType === 'points' ? 'pontos' : 'diamantes';
    const rewardIcon = mission?.rewardType === 'points' ? "/assets/image/icon/moeda.svg" : null;

    return (
        <AuthGuard>
            <div className="min-h-screen flex flex-col bg-white">
                {/* Dummy message above banner section */}
                <div className="bg-white px-6 py-2">
                    <span className="text-[14px] text-gray-400">Missões.Interno</span>
                </div>

                <Header />

                <BannerNews 
                    title="MISSÕES" 
                    subtitle="PARTICIPE E GANHE PONTOS EXTRAS!" 
                    backgroundImage="/images/missoesbanner.png"
                />

                <MissionStats />

                <main className="flex-grow py-8">
                    <div className="container max-w-[1100px] mx-auto px-6">
                        {/* Information Section */}
                        <div className="bg-white">
                            <div className="mb-6 pt-0">
                                {mission?.isNew && (
                                    <span className="bg-[#f2f2f2] text-[#004415] text-[10px] font-bold px-3 py-1 mb-4 inline-block tracking-tighter">
                                        Missão Nova!
                                    </span>
                                )}
                                <h1 className={`${acuminProBold.className} text-[36px] text-[#004415] leading-none tracking-tighter mb-8`}>
                                    {displayTitle}
                                </h1>
                            </div>

                            {/* Banner Image */}
                            <div className="relative w-full h-[380px] mb-8 overflow-hidden border border-gray-100 shadow-sm">
                                <Image 
                                    src={mission?.bannerImage || "/images/banner 2.png"} 
                                    alt={displayTitle} 
                                    fill 
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                {/* Main Content (Left) */}
                                <div className="md:col-span-3">
                                    <h2 className={`${acuminProBold.className} text-[18px] text-[#004415] mb-8 underline decoration-2 underline-offset-[12px]`}>
                                        Objetivo da Missão:
                                    </h2>
                                    <div className={`${acuminProRegular.className} text-[14px] text-gray-700 leading-[1.4] space-y-8 pr-8`}>
                                        <p>{displayDescription}</p>
                                        <p>
                                            Nesta missão, você deve seguir as orientações da sua gerência e utilizar as melhores práticas de venda para atingir os objetivos propostos. Lembre-se que cada venda conta pontos preciosos para a sua classificação final.
                                        </p>
                                    </div>
                                </div>

                                {/* Sidebar (Right) */}
                                <div className="md:col-span-1 space-y-4 pt-4">
                                    {/* Rewards Card */}
                                    <div className="bg-[#f2f2f2] p-6">
                                        <p className={`${acuminProRegular.className} text-[11px] text-gray-500 mb-2 font-bold`}>O que você ganha:</p>
                                        <div className="flex items-center gap-2">
                                            {rewardIcon ? (
                                                <Image src={rewardIcon} alt="Points" width={20} height={20} />
                                            ) : (
                                                <div className="w-5 h-5 relative">
                                                    <svg viewBox="0 0 24 24" fill="#2B63E1" stroke="#2B63E1" strokeWidth="2"><path d="M6 3h12l4 6-10 12L2 9z"></path></svg>
                                                </div>
                                            )}
                                            <span className={`${acuminProBold.className} text-[#004415] text-[22px] leading-none`}>
                                                {displayReward} {rewardUnit}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Validity Card */}
                                    <div className="bg-[#f2f2f2] p-6">
                                        <p className={`${acuminProRegular.className} text-[11px] text-gray-500 mb-2 font-bold`}>Validade da Missão:</p>
                                        <p className={`${acuminProBold.className} text-[#004415] text-[22px] leading-none`}>
                                            Até {displayValidity}
                                        </p>
                                    </div>

                                    {/* Participation Steps */}
                                    <div className="bg-[#f2f2f2] p-6 flex flex-col gap-4">
                                        <p className={`${acuminProBold.className} text-[11px] text-[#004415] uppercase tracking-wider`}>Como participar:</p>
                                        <ul className={`${acuminProRegular.className} text-[11px] text-gray-600 space-y-4`}>
                                            <li className="flex gap-3">
                                                <span className="text-[#004415] font-black">01</span>
                                                <span>Confirme a sua participação.</span>
                                            </li>
                                            <li className="flex gap-3">
                                                <span className="text-[#004415] font-black">02</span>
                                                <span>Siga as instruções para completar a Missão.</span>
                                            </li>
                                            <li className="flex gap-3">
                                                <span className="text-[#004415] font-black">03</span>
                                                <span>Ganhe Pontos ou Diamantes ao concluir a Missão.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Action Bar */}
                            <div className="mt-16 flex flex-wrap gap-4 border-t border-gray-100 pt-10">
                                <Link 
                                    href="/missoes" 
                                    className={`${acuminProBold.className} bg-[#f2f2f2] text-[#004415] px-12 py-3.5 text-[15px] hover:bg-gray-200 transition-colors flex items-center gap-2`}
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                                    Voltar
                                </Link>
                                
                                <div className="ml-auto flex flex-wrap gap-4">
                                    <button className={`${acuminProBold.className} bg-[#f2f2f2] text-[#004415] px-8 py-3.5 text-[15px] hover:bg-gray-200 transition-colors flex items-center gap-2`}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
                                        Anexar Arquivo
                                    </button>
                                    <button className={`${acuminProBold.className} bg-[#004415] text-white px-8 py-3.5 text-[15px] hover:bg-[#369c1f] transition-colors`}>
                                        Materiais de apoio
                                    </button>
                                    <button className={`${acuminProBold.className} bg-[#004415] text-white px-8 py-3.5 text-[15px] hover:bg-[#369c1f] transition-colors`}>
                                        Regulamento
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </AuthGuard>
    );
}
