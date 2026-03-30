"use client";

import { acuminProBold, acuminProRegular } from "@/app/fonts";

const CLOSED_MISSIONS = [
    {
        title: "Título da Missão que já foi encerrada",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        validity: "Validade: até 01/10/2024"
    },
    {
        title: "Título da Missão que já foi encerrada",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        validity: "Validade: até 01/10/2024"
    },
    {
        title: "Título da Missão que já foi encerrada",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        validity: "Validade: até 01/10/2024"
    }
];

export default function ClosedMissions() {
    return (
        <section className="bg-[#f2f2f2] pb-16 pt-8">
            <div className="container max-w-[1100px] mx-auto px-6">
                <h2 className={`${acuminProBold.className} text-[16px] text-[#004415] mb-6 font-black uppercase`}>
                    Missões Encerradas
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {CLOSED_MISSIONS.map((mission, index) => (
                        <div key={index} className="bg-white p-6 border border-gray-100 shadow-sm flex flex-col items-center text-center opacity-70 transition-all duration-300 hover:opacity-100 h-[260px]">
                            <h3 className={`${acuminProBold.className} text-[20px] text-[#004415]/60 mb-2 leading-[0.9] tracking-tighter`}>
                                {mission.title}
                            </h3>
                            <p className={`${acuminProRegular.className} text-[10px] text-gray-400 mb-6 leading-tight line-clamp-2 px-2`}>
                                {mission.description}
                            </p>
                            
                            <div className="mt-auto w-full">
                                <div className="w-full bg-[#f2f2f2] py-2 mb-1.5 text-gray-500 text-[11px] font-bold">
                                    Missão Encerrada
                                </div>
                                
                                <p className="text-[8px] text-gray-300">
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
