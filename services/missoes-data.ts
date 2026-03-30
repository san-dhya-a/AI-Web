export interface Mission {
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
    bannerImage?: string;
    objective?: string;
}

export const MISSIONS_DATA: Mission[] = [
    {
        id: "vendedor-lubrax-nota-mil",
        title: "Vendedor Lubrax Nota Mil",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        rewardValue: "44.000",
        rewardType: "diamonds",
        validity: "25 a 6/12/2024",
        isNew: true,
        variant: "large",
        badgeVariant: "grey",
        buttonVariant: "dark",
        bannerImage: "/images/banner 2.png",
        objective: "O que é o Objetivo da missão: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
    },
    {
        id: "copa-america",
        title: "Copa América com Lubrax!",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        rewardValue: "10.000",
        rewardType: "points",
        validity: "25 a 6/12/2024",
        isNew: true,
        variant: "large",
        badgeVariant: "grey",
        buttonVariant: "dark",
        bannerImage: "/images/banner 2.png",
        objective: "Participe da torcida Lubrax na Copa América e concorra a prêmios incríveis! O objetivo é simples: mostre seu conhecimento sobre os produtos Lubrax e acumule pontos para chegar ao topo do ranking."
    },
    {
        id: "missao-vendedor-nota-mil-1",
        title: "Missão Vendedor Nota Mil",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        rewardValue: "44.000",
        rewardType: "diamonds",
        validity: "25 a 6/12/2024",
        variant: "small",
        buttonVariant: "dark",
        objective: "Destaque-se como o melhor vendedor da sua região e ganhe diamantes extras!"
    },
    {
        id: "resgate-premiado-natal-1",
        title: "Resgate Premiado de Natal",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        rewardValue: "44.000",
        rewardType: "points",
        validity: "25 a 6/12/2024",
        variant: "small",
        buttonVariant: "dark",
        objective: "Neste Natal, seus pontos valem muito mais. Resgate prêmios exclusivos e ilumine suas festas."
    },
    {
        id: "performance-premiada-lubrax",
        title: "Performance Premiada Lubrax",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        rewardValue: "44.000",
        rewardType: "diamonds",
        validity: "25 a 6/12/2024",
        variant: "small",
        buttonVariant: "dark",
        objective: "Acelere sua performance com Lubrax e conquiste o pódio dos vendedores nota mil."
    },
    {
        id: "na-estrada-lubrax-valora",
        title: "Na Estrada com Lubrax Valora",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        rewardValue: "44.000",
        rewardType: "points",
        validity: "25 a 6/12/2024",
        variant: "small",
        buttonVariant: "dark",
        objective: "Cada quilômetro percorrido é uma chance de ganhar mais pontos com a linha Lubrax Valora."
    },
    {
        id: "resgate-premiado-natal-2",
        title: "Resgate Premiado de Natal",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        rewardValue: "44.000",
        rewardType: "points",
        validity: "25 a 6/12/2024",
        variant: "small",
        buttonVariant: "dark"
    },
    {
        id: "missao-vendedor-nota-mil-2",
        title: "Missão Vendedor Nota Mil",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        rewardValue: "44.000",
        rewardType: "diamonds",
        validity: "25 a 6/12/2024",
        variant: "small",
        buttonVariant: "dark"
    }
];
