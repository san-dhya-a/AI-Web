import Image from "next/image";
import Link from "next/link";

const footerLinks = [
    {
        title: "O Programa",
        links: [
            { label: "Como Funciona", href: "#" },
            { label: "Regulamento", href: "#" },
            { label: "Fale Conosco", href: "#" },
            { label: "FAQ", href: "#" },
        ],
    },
    {
        title: "Notícias",
        links: [
            { label: "Eventos", href: "#" },
            { label: "Postos Petrobras", href: "#" },
            { label: "Novidades", href: "#" },
        ],
    },
    {
        title: "Resgate",
        links: [
            { label: "Carrinho", href: "#" },
            { label: "Pedidos", href: "#" },
            { label: "Extrato", href: "#" },
        ],
    },
    {
        title: "Campanhas",
        links: [
            { label: "Conquistas", href: "#" },
            { label: "Site bra", href: "#" },
            { label: "Missões", href: "#" },
            { label: "Treinamentos", href: "#" },
        ],
    },
    {
        title: "Minha Conta",
        links: [
            { label: "Cadastro", href: "#" },
            { label: "Política de Privacidade", href: "#" },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="bg-[#004415] text-white pt-10 pb-6">
            <div className="max-w-5xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-6">
                    {/* Logo */}
                    <div className="col-span-2 md:col-span-1">
                        <Image
                            src="/images/vibra.png"
                            alt="Vibra Logo"
                            width={96}
                            height={24}
                            className="h-6 w-auto"
                        />
                    </div>

                    {/* Link Columns */}
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-xs font-bold mb-4">{section.title}</h4>
                            <ul className="text-[11px] space-y-2 opacity-80">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Social Icons */}
                <div className="flex gap-5 mt-6">
                    <Image
                        src="/images/insta.png"
                        alt="Instagram"
                        width={12}
                        height={12}
                        className="h-3 w-auto brightness-0 invert"
                    />
                    <Image
                        src="/images/youtube.png"
                        alt="YouTube"
                        width={12}
                        height={12}
                        className="h-3 w-auto brightness-0 invert"
                    />
                </div>

                <hr className="border-green-700 my-4" />

                <div className="flex flex-col md:flex-row justify-between text-[10px]">
                    <p>© Copyright 2024 - Todos os direitos reservados a Vibra.</p>
                </div>
            </div>
        </footer>
    );
}
