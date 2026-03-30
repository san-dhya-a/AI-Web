"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Header from "@/components/layout/header";
import BannerNews from "@/components/layout/banner-news";
import Footer from "@/components/layout/footer";
import { AuthGuard } from "@/components/auth/Guardians";
import { acuminProBold, acuminProRegular } from "@/app/fonts";
import MissionStats from "@/components/missoes/MissionStats";

export default function MissionDetailPage() {
    const params = useParams();
    const router = useRouter();
    const id = params.id as string;

    // Format title from ID (dummy logic)
    const formattedTitle = id
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return (
        <AuthGuard>
            <div className="min-h-screen flex flex-col bg-white">
                <Header />
                <BannerNews 
                    title="MISSÕES" 
                    subtitle="PARTICIPE E GANHE PONTOS EXTRAS!" 
                    backgroundImage="/images/missoesbanner.png"
                />
                
                <main className="flex-grow pb-16">
                    {/* Mission Stats directly below Banner */}
                    <div className="bg-[#f2f2f2]/30 text-black">
                        <MissionStats />
                    </div>

                    <div className="container max-w-[1100px] mx-auto px-6">
                        {/* Mission Title Header */}
                        <div className="mb-6 pt-4">
                            <span className="bg-[#f2f2f2] text-gray-500 text-[10px] font-bold px-2 py-0.5 rounded-sm inline-block mb-3 uppercase tracking-wider">
                                Missão Nova!
                            </span>
                            <h1 className={`${acuminProBold.className} text-[#004415] text-[48px] leading-[0.8] tracking-tighter`}>
                                {formattedTitle}
                            </h1>
                        </div>

                        {/* Banner Image */}
                        <div className="relative w-full h-[380px] mb-12 overflow-hidden border border-gray-100 shadow-sm">
                            <Image 
                                src="/images/banner 2.png" 
                                alt="Mission Banner" 
                                fill 
                                className="object-cover"
                                priority
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                            {/* Main Content (Left) */}
                            <div className="md:col-span-3">
                                <h2 className={`${acuminProBold.className} text-[18px] text-[#004415] mb-8 underline decoration-2 underline-offset-[12px]`}>
                                    Objetivo da Missão:
                                </h2>
                                <div className={`${acuminProRegular.className} text-[14px] text-gray-700 leading-[1.4] space-y-8 pr-8`}>
                                    <p>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                    </p>
                                    <p>
                                        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                                    </p>
                                    <p>
                                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                    </p>
                                </div>
                            </div>

                            {/* Sidebar (Right) */}
                            <div className="md:col-span-1 space-y-4">
                                {/* Rewards Card */}
                                <div className="bg-[#f2f2f2] p-8">
                                    <p className={`${acuminProRegular.className} text-[11px] text-gray-500 mb-2 font-bold`}>O que você ganha:</p>
                                    <div className="flex items-center gap-2">
                                        <Image src="/assets/image/icon/moeda.svg" alt="Points" width={20} height={20} />
                                        <span className={`${acuminProBold.className} text-[#004415] text-[22px] leading-none`}>32.000 pontos</span>
                                    </div>
                                </div>

                                {/* Validity Card */}
                                <div className="bg-[#f2f2f2] p-8">
                                    <p className={`${acuminProRegular.className} text-[11px] text-gray-500 mb-2 font-bold`}>Validade da Missão:</p>
                                    <p className={`${acuminProBold.className} text-[#004415] text-[22px] leading-none`}>Até 03/05/2025</p>
                                </div>

                                {/* Participation Steps */}
                                <div className="bg-[#f2f2f2] p-8 flex flex-col gap-4">
                                    <p className={`${acuminProBold.className} text-[11px] text-[#004415] uppercase tracking-wider`}>Como participar:</p>
                                    <ul className={`${acuminProRegular.className} text-[11px] text-gray-600 space-y-4`}>
                                        <li className="flex gap-3">
                                            <span className="font-extrabold text-[#369c1f]">01</span>
                                            <span className="font-bold">Confirme a sua participação.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="font-extrabold text-[#369c1f]">02</span>
                                            <span className="font-bold">Siga as instruções para completar a Missão.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="font-extrabold text-[#369c1f]">03</span>
                                            <span className="font-bold">Ganhe Pontos ou Diamantes ao concluir a Missão.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons Row */}
                        <div className="mt-20 flex flex-wrap items-center gap-4 border-t border-gray-100 pt-10">
                            <button 
                                onClick={() => router.back()}
                                className="flex items-center gap-2 px-10 py-3.5 bg-[#f2f2f2] text-[#004415] font-bold text-[14px] hover:bg-gray-200 transition-colors"
                            >
                                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M15 19l-7-7 7-7" />
                                </svg>
                                Voltar
                            </button>

                            <div className="flex-grow"></div>

                            <button className="flex items-center gap-2 px-10 py-3.5 bg-[#f2f2f2] text-[#004415] font-bold text-[14px] hover:bg-gray-200 transition-colors">
                                <svg className="w-5 h-5 mr-1 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.414a4 4 0 00-5.656-5.656l-6.415 6.415a6 6 0 108.486 8.486L20.5 13" />
                                </svg>
                                Anexar Arquivo
                            </button>

                            <button className="px-10 py-3.5 bg-[#004415] text-white font-bold text-[14px] hover:bg-[#003310] transition-colors rounded-none">
                                Materiais de apoio
                            </button>

                            <button className="px-10 py-3.5 bg-[#004415] text-white font-bold text-[14px] hover:bg-[#003310] transition-colors rounded-none">
                                Regulamento
                            </button>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </AuthGuard>
    );
}
