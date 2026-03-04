import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#004415] text-white py-8 mt-auto">
            <div className="container max-w-6xl mx-auto px-6 lg:px-12">

                {/* Row 1: Logo | Center Links */}
                <div className="flex flex-col md:flex-row items-center md:items-center pb-4 gap-6 md:gap-0">
                    {/* Left: Logo */}
                    <div className="min-w-[140px]">
                        <Image
                            src="/assets/image/icon/vibra.png"
                            alt="Vibra Logo"
                            width={110}
                            height={28}
                            className="h-7 w-auto"
                            style={{ filter: 'invert(34%) sepia(91%) saturate(1519%) hue-rotate(76deg) brightness(97%) contrast(101%)' }}
                        />
                    </div>

                    {/* Center: Navigation Links */}
                    <div className="flex-1 flex justify-center">
                        <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-[13px] font-normal text-white/90 tracking-wide">
                            <Link href="#" className="hover:text-white transition-colors">Primeiro Acesso</Link>
                            <Link href="#" className="hover:text-white transition-colors">FAQ</Link>
                            <Link href="#" className="hover:text-white transition-colors">Política de Privacidade</Link>
                        </div>
                    </div>

                    {/* Right: Spacer for centering balance */}
                    <div className="hidden md:block min-w-[140px]" />
                </div>

                {/* Row 2: Social Icons */}
                <div className="flex justify-center md:justify-start gap-5 pb-8">
                    <Link href="#" className="hover:opacity-80 transition-opacity">
                        <Image src="/assets/image/icon/insta.png" alt="insta" width={20} height={20} className="h-5 w-auto brightness-0 invert" />
                    </Link>
                    <Link href="#" className="hover:opacity-80 transition-opacity">
                        <Image src="/assets/image/icon/youtube.png" alt="youtube" width={20} height={20} className="h-5 w-auto brightness-0 invert" />
                    </Link>
                </div>

                {/* Divider */}
                <hr className="border-white/10 mb-6" />

                {/* Bottom: Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center text-[10px] opacity-40 gap-3 text-center md:text-left">
                    <p>© Copyright 2024 - Todos os direitos reservados à Vibra.</p>
                    <p className="font-medium tracking-tight">A marca Petrobras é licenciada à Vibra.</p>
                </div>

            </div>
        </footer>
    );
}
