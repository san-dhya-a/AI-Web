"use client";

import { acuminProBold, acuminProRegular } from "@/app/fonts";

const CLOSED_MISSIONS = [
    {
        title: "Título da Missão que já foi encerrada",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        validity: "Validade: de 25 a 6/12/2024"
    },
    {
        title: "Título da Missão que já foi encerrada",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        validity: "Validade: de 25 a 6/12/2024"
    },
    {
        title: "Título da Missão que já foi encerrada",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        validity: "Validade: de 25 a 6/12/2024"
    }
];

export default function ClosedMissions() {
    return (
        <section className="bg-[#f2f2f2] pb-16 pt-12">
            <div className="container max-w-[1100px] mx-auto px-6">
                <h2 className={`${acuminProBold.className} text-[16px] text-[#004415] mb-8 font-black uppercase tracking-tight`}>
                    Missões Encerradas
                </h2>

                {/* Left-aligned flex container for cards */}
                <div className="flex flex-wrap gap-5">
                    {CLOSED_MISSIONS.map((mission, index) => (
                        <div 
                            key={index} 
                            className="bg-white px-6 py-8 border border-gray-100 shadow-sm flex flex-col items-center text-center w-[215px] h-[300px]"
                        >
                            <h3 className={`${acuminProBold.className} text-[18px] text-[#999999] mb-4 leading-[1.1] tracking-tighter`}>
                                {mission.title}
                            </h3>
                            <p className={`${acuminProRegular.className} text-[11px] text-[#999999] mb-8 leading-tight line-clamp-3 px-1`}>
                                {mission.description}
                            </p>

                            <div className="mt-auto w-full">
                                <div className={`${acuminProBold.className} w-full bg-[#f2f2f2] py-2.5 mb-2.5 text-[#999999] text-[14px]`}>
                                    Missão Encerrada
                                </div>

                                <p className={`${acuminProRegular.className} text-[9px] text-[#cccccc] font-medium`}>
                                    {mission.validity}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}