export interface NewsItem {
    id: number;
    date: string;
    title: string;
    image: string;
    detailImage?: string;
    isFeatured?: boolean;
    paragraphs: string[];
}

export const newsData: NewsItem[] = [
    {
        id: 1,
        date: "12/02/2025",
        title: "Lubrax é a marca de Lubrificantes mais lembrada do Brasil",
        image: "/images/card1.png",
        isFeatured: true,
        paragraphs: [
            "A Lubrax consolidou sua posição de liderança absoluta no mercado brasileiro, sendo eleita mais uma vez como a marca de lubrificantes mais lembrada pelos consumidores em todo o país. Este reconhecimento reflete décadas de investimento em tecnologia de ponta e inovação constante.",
            "Com uma linha completa que atende desde veículos de passeio até pesados e maquinário industrial, a Lubrax se destaca pela confiabilidade e performance superior. Nossos laboratórios trabalham incansavelmente para garantir que cada gota de óleo ofereça a máxima proteção ao motor.",
            "Agradecemos aos nossos parceiros e clientes por confiarem na qualidade Petrobras. Continuaremos desafiando os limites da engenharia química para entregar produtos que movam o Brasil com eficiência e sustentabilidade."
        ]
    },
    {
        id: 2,
        date: "12/02/2025",
        title: "Liderança muda de mãos, mas Time Lubrax segue no topo da tabela",
        image: "/images/card2.png",
        isFeatured: true,
        paragraphs: [
            "A última etapa do campeonato trouxe reviravoltas emocionantes nas pistas. Embora a liderança individual tenha mudado de mãos em uma disputa acirrada, o Time Lubrax demonstrou uma consistência impressionante e segue firme no topo da tabela de equipes.",
            "Nossos pilotos enfrentaram condições climáticas adversas e um traçado extremamente desafiador, mas a estratégia de box e a confiabilidade mecânica foram os diferenciais. O trabalho em equipe foi fundamental para garantir pontos importantes para a reta final da temporada.",
            "Estamos focados nos próximos desafios. A preparação física e técnica está mais intensa do que nunca, e a equipe está confiante de que o suporte tecnológico dos nossos lubrificantes continuará sendo nossa maior vantagem competitiva."
        ]
    },
    {
        id: 3,
        date: "12/02/2025",
        title: "Vibra apresenta Lubrax Unitractor e novo Diesel Petrobras Grid",
        image: "/images/img1.png",
        paragraphs: [
            "A Vibra Energia lançou oficialmente o novo Lubrax Unitractor, uma solução revolucionária para o setor agrícola, juntamente com a evolução do Diesel Petrobras Grid. Estes produtos prometem aumentar a vida útil dos equipamentos e reduzir os custos operacionais.",
            "O Unitractor foi desenvolvido especificamente para atender às demandas severas do campo, oferecendo proteção superior para transmissões, sistemas hidráulicos e freios úmidos. Já o Diesel Grid traz uma nova fórmula que garante maior limpeza do sistema de injeção.",
            "Com este lançamento, reafirmamos nosso compromisso com o agronegócio brasileiro, fornecendo a energia e a lubrificação necessárias para que o produtor rural alcance novos patamares de produtividade."
        ]
    },
    {
        id: 4,
        date: "12/02/2025",
        title: "Lubrax, 50 anos de proximidade com os brasileiros",
        image: "/images/img2.png",
        paragraphs: [
            "Celebrar meio século de história é um marco que poucas marcas atingem com tanta vitalidade. Há 50 anos, a Lubrax faz parte da rotina de milhões de brasileiros, cuidando de seus veículos e facilitando o desenvolvimento de grandes indústrias.",
            "Desde o primeiro frasco fabricado, nossa missão sempre foi a proximidade. Estivemos presentes em cada mudança tecnológica, acompanhando desde os motores clássicos até os modernos sistemas híbridos e elétricos de hoje.",
            "Olhamos para o futuro com orgulho do passado. Os próximos 50 anos serão de ainda mais inovação, sempre mantendo o foco no que há de mais importante: a confiança de quem dirige este país."
        ]
    },
    {
        id: 5,
        date: "12/02/2025",
        title: "Time Lubrax volta a Buenos Aires de olho na liderança do campeonato",
        image: "/images/img3.png",
        paragraphs: [
            "A equipe Lubrax cruzou a fronteira e desembarcou em Buenos Aires para uma das provas mais icônicas do calendário. O objetivo é claro: recuperar pontos vitais e retomar o controle do campeonato em solo argentino.",
            "O Autódromo Oscar y Juan Gálvez é conhecido por exigir o máximo dos pneus e da aerodinâmica. Nossa equipe técnica trabalhou em ajustes específicos para lidar com as longas retas e curvas de alta velocidade características do traçado.",
            "A expectativa é de um grande espetáculo para os fãs. Com um histórico positivo nesta pista, nossos pilotos estão motivados a subir ao lugar mais alto do pódio e celebrar com a torcida local."
        ]
    },
    {
        id: 6,
        date: "12/02/2025",
        title: "Lubrax é o lubrificante mais lembrado no Top Of Mind 2021",
        image: "/images/img4.png",
        paragraphs: [
            "O prêmio Top Of Mind de 2021 reafirmou a Lubrax como a marca que não sai da cabeça (e do motor) dos brasileiros. Em um ano de grandes desafios, manter essa conexão emocional com o público demonstra a força da nossa marca.",
            "Este resultado é fruto de uma comunicação transparente e de produtos que entregam o que prometem. Ser a primeira marca lembrada é uma responsabilidade que nos motiva a buscar a excelência em todos os pontos de contato com o consumidor.",
            "Dedicamos este reconhecimento a cada revendedor, frentista e mecânico que recomenda nossa qualidade diariamente nos postos e oficinas de todo o Brasil."
        ]
    },
    {
        id: 7,
        date: "12/02/2025",
        title: "Lubrax é o lubrificante mais lembrado no Top Of Mind 2021",
        image: "/images/img5.jpg",
        paragraphs: [
            "Pelo segundo ano consecutivo, a Lubrax domina a categoria de lubrificantes na pesquisa nacional de lembrança de marca. A consistência no topo demonstra que nossa estratégia de foco no cliente e qualidade superior está no caminho certo.",
            "Mesmo com a entrada de novos competidores globais, a tradição e a brasilidade da Lubrax continuam sendo fatores decisivos na hora da escolha. A marca se tornou sinônimo de segurança e desempenho para o motorista.",
            "Continuaremos investindo em campanhas que reforcem nossa autoridade técnica, sem nunca perder de vista a linguagem simples e direta que nos aproxima de todos os tipos de condutores."
        ]
    },
    {
        id: 8,
        date: "12/02/2025",
        title: "Time Lubrax volta a Buenos Aires de olho na liderança do campeonato",
        image: "/images/img6.jpeg",
        paragraphs: [
            "O retorno triunfal do Time Lubrax a Buenos Aires foi marcado por uma recepção calorosa e treinos promissores. A equipe ajustou os últimos detalhes na suspensão para garantir o máximo de aderência nas zebras argentinas.",
            "Com dados de telemetria baseados em performances passadas, acreditamos que temos o set-up ideal para a corrida de domingo. Os pilotos estão em sintonia com os engenheiros para extrair cada milésimo de segundo do carro.",
            "A vitória em Buenos Aires seria o impulso perfeito para as etapas finais. Estamos prontos para lutar por cada centímetro da pista e trazer um resultado histórico para casa."
        ]
    },
];
