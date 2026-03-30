"use client";

import MissionCard from "./MissionCard";

const MISSIONS_DATA = [
    {
        id: "vendedor-lubrax-nota-mil",
        title: "Vendedor Lubrax Nota Mil",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        rewardValue: "44.000",
        rewardType: "diamonds" as const,
        validity: "25 a 6/12/2024",
        isNew: true,
        variant: "large" as const,
        badgeVariant: "grey" as const,
        buttonVariant: "dark" as const
    },
    {
        id: "copa-america",
        title: "Copa América com Lubrax!",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        rewardValue: "10.000",
        rewardType: "points" as const,
        validity: "25 a 6/12/2024",
        isNew: true,
        variant: "large" as const,
        badgeVariant: "green" as const,
        buttonVariant: "bright" as const
    },
    {
        id: "missao-vendedor-nota-mil-1",
        title: "Missão Vendedor Nota Mil",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        rewardValue: "44.000",
        rewardType: "diamonds" as const,
        validity: "25 a 6/12/2024",
        variant: "small" as const,
        buttonVariant: "dark" as const
    },
    {
        id: "resgate-premiado-natal-1",
        title: "Resgate Premiado de Natal",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        rewardValue: "44.000",
        rewardType: "points" as const,
        validity: "25 a 6/12/2024",
        variant: "small" as const,
        buttonVariant: "dark" as const
    },
    {
        id: "performance-premiada-lubrax",
        title: "Performance Premiada Lubrax",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        rewardValue: "44.000",
        rewardType: "diamonds" as const,
        validity: "25 a 6/12/2024",
        variant: "small" as const,
        buttonVariant: "bright" as const
    },
    {
        id: "na-estrada-lubrax-valora",
        title: "Na Estrada com Lubrax Valora",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        rewardValue: "44.000",
        rewardType: "points" as const,
        validity: "25 a 6/12/2024",
        variant: "small" as const,
        buttonVariant: "dark" as const
    },
    {
        id: "resgate-premiado-natal-2",
        title: "Resgate Premiado de Natal",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        rewardValue: "44.000",
        rewardType: "points" as const,
        validity: "25 a 6/12/2024",
        variant: "small" as const,
        buttonVariant: "dark" as const
    },
    {
        id: "missao-vendedor-nota-mil-2",
        title: "Missão Vendedor Nota Mil",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        rewardValue: "44.000",
        rewardType: "diamonds" as const,
        validity: "25 a 6/12/2024",
        variant: "small" as const,
        buttonVariant: "dark" as const
    }
];

export default function MissionList() {
    return (
        <section className="bg-white pb-16">
            <div className="container max-w-[1100px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* First Row: 2 Large Cards (each spans 2 columns) */}
                    <div className="md:col-span-2">
                        <MissionCard {...MISSIONS_DATA[0]} />
                    </div>
                    <div className="md:col-span-2">
                        <MissionCard {...MISSIONS_DATA[1]} />
                    </div>

                    {/* Remaining 6 Small Cards */}
                    {MISSIONS_DATA.slice(2, 8).map((mission) => (
                        <div key={mission.id} className="md:col-span-1">
                            <MissionCard {...mission} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}