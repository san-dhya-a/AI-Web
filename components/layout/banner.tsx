import Link from "next/link";

export default function Banner() {
    return (
        <section className="bg-gray-100 border-b border-gray-200">
            {/* Nav Row — inside the banner container */}
            <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-end gap-6">
                <nav>
                    <ul className="flex items-center gap-8 text-[13px] font-semibold text-gray-800">
                        <li>
                            <Link href="#" className="hover:text-green-800 transition-colors flex items-center gap-1">
                                O Programa
                                <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-green-800 transition-colors flex items-center gap-1">
                                Campanhas
                                <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-green-800 transition-colors flex items-center gap-1">
                                Notícias
                                <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-green-800 transition-colors">
                                Treinamentos
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-green-800 transition-colors">
                                Site bra
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Search + Icons */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center bg-white rounded-full px-3 py-1.5 border border-gray-200">
                        <input
                            type="text"
                            placeholder="O que está procurando?"
                            className="bg-transparent text-[12px] w-36 outline-none placeholder:text-gray-400"
                        />
                        <button className="ml-1">
                            <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                    <button className="relative hover:opacity-80 transition-opacity">
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                    </button>
                    <button className="hover:opacity-80 transition-opacity">
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Banner Title — also inside the same banner container */}
            <div className="max-w-5xl mx-auto px-6 pt-8 pb-12">
                <h1 className="text-4xl md:text-5xl font-black italic tracking-tight mb-2 text-[#004415] uppercase">
                    Minha conta
                </h1>
                <p className="text-sm text-[#004415]">
                    Consulte e edite os seus dados se for necessário.
                </p>
            </div>
        </section>
    );
}



