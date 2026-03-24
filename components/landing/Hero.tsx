"use client";

import Image from "next/image";
import { acuminCondBlackItalic, acuminBoldItalic } from "@/app/fonts";

export default function Hero() {
    return (
        <section className={`relative bg-white overflow-hidden min-h-[300px] ${acuminCondBlackItalic.variable} ${acuminBoldItalic.variable}`}>

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
            <div className="container max-w-6xl mx-auto px-6 lg:px-12 relative z-10 mt-12">
                <div className="flex flex-col py-6 lg:w-[60%]">
                    {/* Logo */}
                    <div className="pt-6 mb-20">
                        <Image
                            src="/assets/image/icon/vibra.png"
                            alt="Vibra Logo"
                            width={160}
                            height={48}
                            className="h-9 w-auto"
                        />
                    </div>
                    {/* Heading + Subtitle */}
                    <div className="flex flex-col gap-[8px] pb-[20px]">
                        <h1 className="font-acumin-cond-black-italic italic font-black text-[66px] lg:text-[72px] tracking-tight leading-[0.85] uppercase">
                            <span className="text-[#004415]">BORA GANHAR</span><br />
                            <span className="text-[#369c1f]">AINDA MAIS?</span>
                        </h1>

                        <div className="space-y-1">
                            <p className="font-acumin-pro-bold text-[#004415] text-[18px]">
                                Incentivo &amp; Relacionamento do jeito Vibra
                            </p>
                            <p className="font-acumin-pro-regular text-[#004415] text-[15px]">
                                Tudo que você precisa em um único lugar.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
