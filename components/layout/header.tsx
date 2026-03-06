import Image from "next/image";

export default function Header() {
    return (
        <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
            {/* Logo + User Info */}
            <div className="max-w-[1100px] mx-auto px-6 h-[80px] flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <Image
                        src="/images/vibra.png"
                        alt="Vibra Logo"
                        width={180}
                        height={45}
                        className="h-10 w-auto"
                    />
                </div>

                {/* User Info Card pushed to right */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-gray-200">
                        <Image
                            src="/images/head.png"
                            alt="Profile"
                            width={40}
                            height={40}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col text-left">
                        <p className="text-[11px] font-medium text-gray-600 leading-tight">
                            Olá, <span className="font-bold text-[#004415]">Marcelo Almeida</span>
                        </p>
                        <div className="flex items-center justify-start gap-1.5 mt-0.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                            <p className="text-[11px] text-gray-600 font-medium leading-tight">
                                Você tem <span className="font-bold text-[#004415]">345.400 PTS</span>
                            </p>
                            <svg className="w-3 h-3 text-[#004415]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}


