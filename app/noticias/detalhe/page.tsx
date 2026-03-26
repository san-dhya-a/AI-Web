"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BannerNews from "@/components/layout/banner-news";
import Image from "next/image";
import Link from "next/link";
import { acuminProBold, acuminProRegular } from "@/app/fonts";
import { newsData } from "../constants";

function NoticiaDetalheContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const id = searchParams.get("id");

    // Get current article or fallback to first one
    const currentNoticia = newsData.find(n => n.id === Number(id)) || newsData[0];

    // Filter out the current article AND all featured articles (Items 1 and 2) from "Other News"
    // as per the latest screenshot which shows items 3, 4, 5, 6
    const relatedNews = newsData
        .filter(item => !item.isFeatured && item.id !== currentNoticia.id)
        .slice(0, 4);

    return (
        <>
            <main className="w-full max-w-[1100px] mx-auto px-6 py-12">
                {/* News Article */}
                <article className="mb-16">
                    <div className="flex flex-col items-start gap-4 mb-8">
                        <div className="bg-[#f2f2f2] text-[#004415] text-[12px] px-3 py-1 font-bold uppercase tracking-wider">
                            Novidades
                        </div>
                        <h1 className={`text-[#004415] text-[36px] md:text-[48px] leading-[1.1] font-bold ${acuminProBold.className}`}>
                            {currentNoticia.title}
                        </h1>
                    </div>

                    <div className="relative w-full aspect-video mb-12 overflow-hidden border border-gray-100">
                        <Image
                            src="/images/banner 2.png"
                            alt={currentNoticia.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className={`text-[#333] text-[18px] leading-[1.6] space-y-6 max-w-[900px] ${acuminProRegular.className}`}>
                        {currentNoticia.paragraphs ? (
                            currentNoticia.paragraphs.map((para, index) => (
                                <p key={index} className={index === 0 ? "font-bold" : ""}>
                                    {para}
                                </p>
                            ))
                        ) : (
                            <>
                                <p className="font-bold">Ut enim ad minima veniam</p>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                </p>
                            </>
                        )}
                    </div>
                </article>

                {/* Article Navigation */}
                <div className="flex justify-between items-center mb-0">
                    <button 
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-[#004415] text-[20px] font-bold bg-[#f2f2f2] px-10 py-4 hover:bg-gray-200 transition-colors rounded-none"
                    >
                        <span className="text-[24px]">←</span> Voltar
                    </button>
                    <button className="bg-[#004415] text-white text-[20px] font-bold px-10 py-4 hover:bg-[#005c1d] transition-colors rounded-none">
                        Próxima notícia
                    </button>
                </div>
            </main>

            {/* Related News Section with full-width background */}
            <section className="bg-[#f2f2f2] py-20 mt-16">
                <div className="max-w-[1100px] mx-auto px-6">
                    <h2 className={`text-[#004415] text-[28px] font-bold mb-8 ${acuminProBold.className}`}>
                        Outras notícias para você:
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {relatedNews.map((item) => (
                            <Link href={`/noticias/detalhe?id=${item.id}`} key={item.id} className="flex flex-col group border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white pb-6 h-full">
                                <div className="relative h-[160px] overflow-hidden mb-6">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="px-6 flex flex-col items-start gap-4 flex-1">
                                    <div className="bg-[#f2f2f2] text-[#004415] text-[10px] px-2 py-1 font-bold uppercase tracking-wider">
                                        {item.date}
                                    </div>
                                    <h3 className={`text-[#004415] text-[18px] md:text-[20px] leading-[1.15] font-bold ${acuminProBold.className} line-clamp-3`}>
                                        {item.title}
                                    </h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default function NoticiaDetalhePage() {
    return (
        <div className={`bg-white min-h-screen flex flex-col ${acuminProRegular.className}`}>
            <Header />
            <BannerNews
                title="NOTÍCIAS"
                subtitle="FIQUE POR DENTRO DO QUE INTERESSA"
                backgroundImage="/images/banner1.png"
            />
            <Suspense fallback={<div className="flex-1 flex items-center justify-center">Loading...</div>}>
                <NoticiaDetalheContent />
            </Suspense>
            <Footer />
        </div>
    );
}
