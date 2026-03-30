"use client";

import Image from "next/image";
import Button from "@/components/ui/button";
import { acuminProRegular, acuminProBold } from "@/app/fonts";
import { useRouter } from "next/navigation";

interface MissionCardProps {
    id: string;
    title: string;
    description: string;
    rewardValue: string;
    rewardType: 'points' | 'diamonds';
    validity: string;
    isNew?: boolean;
    variant: 'large' | 'small';
    badgeVariant?: 'grey' | 'green';
}

export default function MissionCard({
    id,
    title,
    description,
    rewardValue,
    rewardType,
    validity,
    isNew,
    variant,
    badgeVariant = 'grey'
}: MissionCardProps) {
    const isLarge = variant === 'large';
    const router = useRouter();

    const badgeStyles = badgeVariant === 'green'
        ? 'bg-[#369c1f] text-white'
        : 'bg-[#f2f2f2] text-gray-500';

    const handleCardClick = () => {
        router.push(`/missoes/${id}`);
    };

    return (
        <div 
            onClick={handleCardClick}
            className={`bg-white rounded-none border border-gray-100 transition-all duration-300 hover:border-[#369c1f] shadow-sm flex flex-col overflow-hidden group cursor-pointer ${isLarge ? 'h-[460px]' : 'h-[385px]'}`}
        >
            <div className={`${isLarge ? 'p-10 pb-4' : 'p-6 pb-2'} flex flex-col flex-grow`}>
                {isNew && (
                    <div className={`${badgeStyles} transition-colors duration-300 text-[10px] font-bold px-2 py-0.5 rounded inline-block mb-3`}>
                        Missão Nova!
                    </div>
                )}
                <h3 className={`${acuminProBold.className} text-[#004415] ${isLarge ? 'text-[36px] leading-[0.85]' : 'text-[24px] leading-[0.9]'} ${isLarge ? 'mb-3' : 'mb-2'} tracking-tighter`}>
                    {title}
                </h3>
                <p className={`${acuminProRegular.className} ${isLarge ? 'text-[14px]' : 'text-[11px]'} text-gray-700 ${isLarge ? 'mb-6' : 'mb-3'} leading-tight line-clamp-3`}>
                    {description}
                </p>
            </div>
 
            <div className="w-full">
                {/* Actions Container: Reward Bar and Button share the same width/alignment */}
                <div className={`${isLarge ? 'px-10 pb-8' : 'px-6 pb-6'}`}>
                    {/* Reward Bar - Full width with very small gap before button */}
                    <div className={`${isLarge ? 'py-3 mb-1.5' : 'py-2 mb-1'} bg-[#f2f2f2] w-full flex items-center justify-center`}>
                        {rewardType === 'points' ? (
                            <div className="flex items-center gap-2">
                                <div className={`${isLarge ? 'w-4 h-4' : 'w-3 h-3'} relative`}>
                                    <Image src="/assets/image/icon/moeda.svg" alt="Points" fill className="object-contain" />
                                </div>
                                <span className="text-[#369c1f] font-bold text-[13px]">Ganhe {rewardValue} Pontos!</span>
                            </div>
                        ) : (
                            <div className="flex items-center gap-2">
                                <div className={`${isLarge ? 'w-4 h-4' : 'w-3 h-3'} relative`}>
                                    <svg viewBox="0 0 24 24" fill="#2B63E1" stroke="#2B63E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12l4 6-10 12L2 9z"></path></svg>
                                </div>
                                <span className="text-blue-600 font-bold text-[13px]">Ganhe {rewardValue} Diamantes!</span>
                            </div>
                        )}
                    </div>

                    <Button fullWidth className={`bg-[#004415] group-hover:bg-[#369c1f] text-white font-bold transition-colors duration-300 ${isLarge ? 'py-4 text-[18px]' : 'py-3 text-[14px]'} rounded-none tracking-tighter shadow-none`}>
                        Quero participar!
                    </Button>
                    
                    <p className="text-center text-[9px] text-gray-400 mt-2">
                        Validade: de {validity}
                    </p>
                </div>
            </div>
        </div>
    );
}
