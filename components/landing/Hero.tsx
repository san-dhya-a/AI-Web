"use client";

import Image from "next/image";
import { acuminCondBlackItalic, acuminBoldItalic } from "@/app/fonts";

export default function Hero() {
    return (
        <section className={`relative bg-white overflow-hidden min-h-[380px] ${acuminCondBlackItalic.variable} ${acuminBoldItalic.variable}`}>

            {/* Right Banner Image — absolutely placed to fill viewport's right edge */}
            <div className="hidden lg:block absolute right-0 top-0 h-full w-[42%]">
                <Image
                    src="/assets/image/banner/image1.png"
                    alt="banner"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>

            {/* Standard container — same as rest of the site */}
            <div className="container max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col justify-between min-h-[380px] py-8 lg:w-[56%]">

                    {/* Logo */}
                    <div>
                        <Image
                            src="/assets/image/icon/vibra.png"
                            alt="Vibra Logo"
                            width={120}
                            height={36}
                            className="h-7 w-auto"
                        />
                    </div>

                    {/* Heading + Subtitle */}
                    <div className="flex flex-col gap-3 pb-6">
                        <h1 className="font-acumin-cond-black-italic text-[40px] xl:text-[52px] tracking-tighter text-[#004415] leading-[0.88] uppercase">
                            BORA GANHAR
                            <span className="block text-[#268200]">AINDA MAIS?</span>
                        </h1>

                        <div className="space-y-1 mt-2">
                            <p className="font-acumin-bold-italic text-[#268200] text-base">
                                Incentivo &amp; Relacionamento do jeito Vibra
                            </p>
                            <p className="font-sans text-gray-500 text-sm">
                                Tudo que você precisa em um único lugar.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
}
