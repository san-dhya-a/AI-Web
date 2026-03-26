import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BannerNews from "@/components/layout/banner-news";
import { acuminProBold, acuminProRegular } from "@/app/fonts";

const sections = [
    {
        id: "sec-1",
        title: 'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC',
        paragraphs: [
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
            "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        ],
    },
    {
        id: "sec-2",
        title: "Section 1.10.33",
        paragraphs: [
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
            "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
        ],
    },
    {
        id: "sec-3",
        title: 'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC',
        paragraphs: [
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
            "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        ],
    },
];

export default function RegulamentoPage() {
    return (
        <div className={`bg-white min-h-screen flex flex-col ${acuminProRegular.className}`}>
            <Header />
            <BannerNews
                title="REGULAMENTO"
                subtitle="Consulte as regras e condições de participação do programa."
            />

            <main className="flex-1 w-full max-w-[1100px] mx-auto px-6 py-12 md:py-16">
                {/* Content Sections */}
                <div className="space-y-12">
                    {sections.map((section) => (
                        <section key={section.id} className="space-y-4">
                            <h2 className={`text-[12px] font-bold text-black uppercase ${acuminProBold.className}`}>
                                {section.title}
                            </h2>
                            {section.paragraphs.map((para, idx) => (
                                <p
                                    key={idx}
                                    className="text-[14px] text-gray-700 leading-relaxed font-normal"
                                >
                                    {para}
                                </p>
                            ))}
                        </section>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
