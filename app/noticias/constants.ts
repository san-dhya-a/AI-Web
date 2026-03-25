export interface NewsItem {
    id: number;
    date: string;
    title: string;
    image: string;
    detailImage?: string;
    isFeatured?: boolean;
}

export const newsData: NewsItem[] = [
    {
        id: 1,
        date: "12/02/2025",
        title: "Lubrax é a marca de Lubrificantes mais lembrada do Brasil",
        image: "/images/card1.png",
        isFeatured: true,
    },
    {
        id: 2,
        date: "12/02/2025",
        title: "Liderança muda de mãos, mas Time Lubrax segue no topo da tabela",
        image: "/images/card2.png",
        detailImage: "/images/banner 2.png",
        isFeatured: true,
    },
    {
        id: 3,
        date: "12/02/2025",
        title: "Vibra apresenta Lubrax Unitractor e novo Diesel Petrobras Grid",
        image: "/images/img1.png",
    },
    {
        id: 4,
        date: "12/02/2025",
        title: "Lubrax, 50 anos de proximidade com os brasileiros",
        image: "/images/img2.png",
    },
    {
        id: 5,
        date: "12/02/2025",
        title: "Time Lubrax volta a Buenos Aires de olho na liderança do campeonato",
        image: "/images/img3.png",
    },
    {
        id: 6,
        date: "12/02/2025",
        title: "Lubrax é o lubrificante mais lembrado no Top Of Mind 2021",
        image: "/images/img4.png",
    },
    {
        id: 7,
        date: "12/02/2025",
        title: "Lubrax é o lubrificante mais lembrado no Top Of Mind 2021",
        image: "/images/img5.png",
    },
    {
        id: 8,
        date: "12/02/2025",
        title: "Time Lubrax volta a Buenos Aires de olho na liderança do campeonato",
        image: "/images/img6.png",
    },
];
