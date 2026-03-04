import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#003310] text-white py-8 px-6">
            <div className="max-w-7xl mx-auto flex flex-col gap-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Image
                            src="/images/vibra.png"
                            alt="Vibra Logo"
                            width={140}
                            height={35}
                            className="h-8 w-auto brightness-0 invert"
                        />
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-6 text-sm font-semibold">
                        <Link href="#" className="hover:underline">
                            Primeiro Acesso
                        </Link>
                        <Link href="#" className="hover:underline">
                            FAQ
                        </Link>
                        <Link href="#" className="hover:underline">
                            Política de Privacidade
                        </Link>
                    </div>
                </div>

                {/* Social and Icons */}
                <div className="flex gap-4">
                    <Link href="#" className="hover:opacity-80">
                        <Image src="/images/insta.png" alt="Instagram" width={20} height={20} className="brightness-0 invert" />
                    </Link>
                    <Link href="#" className="hover:opacity-80">
                        <Image src="/images/youtube.png" alt="YouTube" width={20} height={20} className="brightness-0 invert" />
                    </Link>
                </div>

                <hr className="border-white/20" />

                <div className="flex flex-col md:flex-row justify-between items-center text-[11px] opacity-70 gap-2">
                    <p>© Copyright 2024 - Todos os direitos reservados à Vibra.</p>
                    <p>A marca Petrobras é licenciada à Vibra.</p>
                </div>
            </div>
        </footer>
    );
}
