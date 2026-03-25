"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Banner from "@/components/layout/banner";
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

    // Filter out the current article AND all featured articles from "Other News"
    // as per the latest screenshot which shows items 3, 4, 5, 6 (all regular news)
    const relatedNews = newsData
        .filter(item => !item.isFeatured && item.id !== currentNoticia.id)
        .slice(0, 4);

    return (
        <main className="flex-1 w-full max-w-[1100px] mx-auto px-6 py-12">
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

                <div className="relative w-full aspect-video md:aspect-[21/9] mb-12 overflow-hidden">
                    <Image
                        src={currentNoticia.detailImage || currentNoticia.image}
                        alt={currentNoticia.title}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className={`text-[#333] text-[18px] leading-[1.6] space-y-6 max-w-[900px] ${acuminProRegular.className}`}>
                    <p className="font-bold">Ut enim ad minima veniam</p>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    </p>
                    <p>
                        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </p>
                    <p>
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    </p>

                    <p className="font-bold">Neque quisquam</p>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    </p>
                </div>
            </article>

            {/* Article Navigation */}
            <div className="flex justify-between items-center mb-24">
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

            {/* Related News Section */}
            <section>
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
            </section>
        </main>
    );
}

export default function NoticiaDetalhePage() {
    return (
        <div className={`bg-white min-h-screen flex flex-col ${acuminProRegular.className}`}>
            <Header />
            <Banner
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
