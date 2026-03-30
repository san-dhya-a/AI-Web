"use client";

import { acuminProBold, acuminProRegular } from "@/app/fonts";

export default function MissionInfo() {
    return (
        <section className="pb-8 bg-transparent">
            <div className="container max-w-[1100px] mx-auto px-6">
                <div className="bg-white p-8 border border-gray-100 shadow-sm transition-all duration-300 hover:border-[#369c1f]">
                    <h2 className={`${acuminProBold.className} text-[18px] text-[#004415] mb-4 font-black`}>
                        O que são Missões?
                    </h2>
                    <p className={`${acuminProRegular.className} text-[13px] text-gray-700 leading-relaxed max-w-4xl`}>
                        Missões são desafios de curta duração que você pode participar. Elas NÃO são obrigatórias. Para ganhar os Pontos ou Diamantes de cada Missão, basta cumprir o objetivo no prazo determinado. Leia com atenção a regra da Missão antes de participar e boa sorte!
                    </p>
                </div>
            </div>
        </section>
    );
}
