"use client";

import MissionCard from "./MissionCard";

const MISSIONS_DATA = [
    // Row 1: 2 Large
    {
        id: "vendedor-lubrax-nota-mil",
        title: "Vendedor Lubrax Nota Mil",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        rewardValue: "44.000",
        rewardType: "diamonds" as const,
        validity: "25 a 6/12/2024",
        isNew: true,
        variant: "large" as const,
        badgeVariant: "grey" as const
    },
    {
        id: "copa-america-com-lubrax",
        title: "Copa América com Lubrax!",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        rewardValue: "10.000",
        rewardType: "points" as const,
        validity: "25 a 6/12/2024",
        isNew: true,
        variant: "large" as const,
        badgeVariant: "green" as const
    },
    // Row 2: 4 Small
    {
        id: "missao-vendedor-nota-mil-1",
        title: "Missão Vendedor Nota Mil",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        rewardValue: "44.000",
        rewardType: "diamonds" as const,
        validity: "25 a 6/12/2024",
        variant: "small" as const
    },
    {
        id: "resgate-premiado-natal-1",
        title: "Resgate Premiado de Natal",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        rewardValue: "44.000",
        rewardType: "points" as const,
        validity: "25 a 6/12/2024",
        variant: "small" as const
    },
    {
        id: "performance-premiada-lubrax",
        title: "Performance Premiada Lubrax",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        rewardValue: "44.000",
        rewardType: "diamonds" as const,
        validity: "25 a 6/12/2024",
        variant: "small" as const
    },
    {
        id: "estrada-lubrax-valora",
        title: "Na Estrada com Lubrax Valora",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        rewardValue: "44.000",
        rewardType: "points" as const,
        validity: "25 a 6/12/2024",
        variant: "small" as const
    },
    // Row 3: 2 Small
    {
        id: "resgate-premiado-natal-2",
        title: "Resgate Premiado de Natal",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        rewardValue: "44.000",
        rewardType: "points" as const,
        validity: "25 a 6/12/2024",
        variant: "small" as const
    },
    {
        id: "missao-vendedor-nota-mil-2",
        title: "Missão Vendedor Nota Mil",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        rewardValue: "44.000",
        rewardType: "diamonds" as const,
        validity: "25 a 6/12/2024",
        variant: "small" as const
    }
];

export default function MissionList() {
    return (
        <section className="pb-16 bg-transparent">
            <div className="container max-w-[1100px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {MISSIONS_DATA.map((mission) => (
                        <div key={mission.id} className={mission.variant === 'large' ? 'md:col-span-2' : 'md:col-span-1'}>
                            <MissionCard {...mission} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
