import Image from "next/image";
import Link from "next/link";
import { acuminProBold, acuminProRegular } from "@/app/fonts";

const footerLinks = [
    {
        title: "O Programa",
        links: [
            { label: "Como Funciona", href: "#" },
            { label: "Regulamento", href: "/regulamento" },
            { label: "Fale Conosco", href: "/fale-conosco" },
            { label: "FAQ", href: "/faq" },
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
        <footer className={`bg-[#004415] text-white pt-12 pb-8 ${acuminProRegular.className}`} suppressHydrationWarning>
            <div className="max-w-[1100px] mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between pb-8">
                    {/* Logo & Social Links (Left Side) */}
                    <div className="flex flex-col justify-between w-[200px]">
                        <div>
                            <Image
                                src="/images/vibra.png"
                                alt="Vibra Logo"
                                width={100}
                                height={26}
                                className="h-6 w-auto"
                            />
                        </div>
                        <div className="flex gap-4 mt-8 md:mt-[6.5rem]">
                            <Image
                                src="/images/insta.png"
                                alt="Instagram"
                                width={18}
                                height={18}
                                className="h-[14px] w-auto brightness-0 invert hover:opacity-80 transition cursor-pointer"
                            />
                            <Image
                                src="/images/youtube.png"
                                alt="YouTube"
                                width={18}
                                height={18}
                                className="h-[14px] w-auto brightness-0 invert hover:opacity-80 transition cursor-pointer"
                            />
                        </div>
                    </div>

                    {/* Link Columns (Right Side) */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 md:gap-x-12 mt-8 md:mt-0 flex-1 pl-0 md:pl-20">
                        {footerLinks.map((section) => (
                            <div key={section.title}>
                                <h4 className={`text-[12px] font-semibold mb-[20px] text-white leading-tight ${acuminProBold.className}`}>
                                    {section.title}
                                </h4>
                                <ul className={`text-[11.5px] space-y-[14px] text-white/90 font-normal ${acuminProRegular.className}`}>
                                    {section.links.map((link) => (
                                        <li key={link.label}>
                                            <Link href={link.href} className="hover:underline hover:text-white transition">
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Divider & Copyright */}
                <hr className="border-[#005a1c] mb-6 mt-2" />

                <div className="flex flex-col md:flex-row justify-between text-[10px] text-white/80 font-normal">
                    <p className={`font-normal ${acuminProRegular.className}`}>© Copyright 2024 - Todos os direitos reservados a brs.</p>
                </div>
            </div>
        </footer>
    );
}
