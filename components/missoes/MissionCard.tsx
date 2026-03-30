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
    buttonVariant?: 'dark' | 'bright';
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
    badgeVariant = 'grey',
    buttonVariant = 'dark'
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
            className={`bg-white rounded-none border border-gray-100 transition-all duration-300 hover:border-[#369c1f] shadow-sm flex flex-col overflow-hidden group cursor-pointer ${isLarge ? 'h-[420px]' : 'h-[340px]'}`}
        >
            <div className={`${isLarge ? 'p-10' : 'p-8'} flex flex-col flex-grow`}>
                {/* Badge Area with fixed height to maintain title alignment */}
                <div>
                    {isNew && (
                        <div className={`${badgeStyles} w-fit transition-colors duration-300 text-[9px] font-bold px-1.5 py-0.5 rounded-none inline-block`}>
                            Missão Nova!
                        </div>
                    )}
                </div>

                <h3 className={`${acuminProBold.className} text-[#004415] ${isLarge ? 'text-[32px] mb-6' : 'text-[21px] mb-4'} leading-[1.1] tracking-tighter`}>
                    {title}
                </h3>
                <p className={`${acuminProRegular.className} ${isLarge ? 'text-[14px]' : 'text-[12px]'} text-gray-700 leading-normal line-clamp-4`}>
                    {description}
                </p>

                {/* Actions Row - Anchored to bottom of card */}
                <div className="mt-auto w-full">
                    {/* Reward Bar */}
                    <div className={`${isLarge ? 'py-3 mb-2' : 'py-2.5 mb-1'} bg-[#f2f2f2] w-full flex items-center justify-center`}>
                        {rewardType === 'points' ? (
                            <div className="flex items-center gap-1.5">
                                <div className={`${isLarge ? 'w-4 h-4' : 'w-3.5 h-3.5'} relative`}>
                                    <Image src="/assets/image/icon/moeda.svg" alt="Points" fill className="object-contain" />
                                </div>
                                <span className={`${isLarge ? 'text-[14px]' : 'text-[12px]'} text-[#369c1f] font-bold`}>Ganhe {rewardValue} Pontos!</span>
                            </div>
                        ) : (
                            <div className="flex items-center gap-1.5">
                                <div className={`${isLarge ? 'w-4 h-4' : 'w-3.5 h-3.5'} relative`}>
                                    <svg viewBox="0 0 24 24" fill="#2B63E1" stroke="#2B63E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12l4 6-10 12L2 9z"></path></svg>
                                </div>
                                <span className={`${isLarge ? 'text-[14px]' : 'text-[12px]'} text-blue-600 font-bold`}>Ganhe {rewardValue} Diamantes!</span>
                            </div>
                        )}
                    </div>

                    <Button
                        fullWidth
                        className={`${buttonVariant === 'bright' ? 'bg-[#369c1f] hover:bg-[#2d821a]' : 'bg-[#004415] hover:bg-[#369c1f]'} text-white font-bold transition-colors duration-300 ${isLarge ? 'py-3.5 text-[18px]' : 'py-3 text-[16px]'} rounded-none tracking-tighter shadow-none border-none`}
                    >
                        Quero participar!
                    </Button>

                    <p className="text-center text-[8px] text-gray-400 mt-1">
                        Validade: de {validity}
                    </p>
                </div>
            </div>
        </div>
    );
}