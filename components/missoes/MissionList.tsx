"use client";

import MissionCard from "./MissionCard";
import { MISSIONS_DATA } from "@/services/missoes-data";

export default function MissionList() {
    return (
        <section className="bg-white pb-14 mt-6">
            <div className="container max-w-[1100px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {MISSIONS_DATA.map((mission) => (
                        <div 
                            key={mission.id} 
                            className={mission.variant === 'large' ? "md:col-span-2" : "md:col-span-1"}
                        >
                            <MissionCard {...mission} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}