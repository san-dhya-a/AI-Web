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
        <section className="bg-[#f2f2f2] pb-10 pt-8">
            <div className="container max-w-[1100px] mx-auto px-4">
                <h2 className={`${acuminProBold.className} text-[16px] text-[#004415] mb-6 font-black uppercase`}>
                    Missões Encerradas
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {CLOSED_MISSIONS.map((mission, index) => (
                        <div key={index} className="bg-white p-10 border border-gray-100 shadow-sm flex flex-col items-center text-center transition-all duration-300 h-[320px]">
                            <h3 className={`${acuminProBold.className} text-[24px] text-[#999999] mb-4 leading-tight tracking-tighter`}>
                                {mission.title}
                            </h3>
                            <p className={`${acuminProRegular.className} text-[12px] text-[#999999] mb-10 leading-normal line-clamp-3 px-2`}>
                                {mission.description}
                            </p>
                            
                            <div className="mt-auto w-full">
                                <div className={`${acuminProBold.className} w-full bg-[#f2f2f2] py-3 mb-2 text-[#999999] text-[16px]`}>
                                    Missão Encerrada
                                </div>
                                
                                <p className={`${acuminProRegular.className} text-[9px] text-[#cccccc]`}>
                                    Validade: de 25 a 6/12/2024
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
