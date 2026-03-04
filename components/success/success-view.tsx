import Link from "next/link";

export default function SuccessView() {
    return (
        <main className="flex-1 bg-white flex flex-col justify-start min-h-[50vh]">
            <div className="max-w-5xl mx-auto px-6 py-12 md:py-20 w-full">
                {/* Main Success Messages */}
                <div className="mb-12">
                    <p className="font-bold text-[#148e1c] text-base mb-1 md:text-lg">
                        Pronto!
                    </p>
                    <h2
                        className="text-[2.5rem] md:text-[3.5rem] font-extrabold italic tracking-tighter uppercase leading-[1.05] md:leading-[1]"
                    >
                        <span className="text-[#004415]">A SUA CONTA FOI</span> <br />
                        <span className="text-[#148e1c]">ATUALIZADA COM SUCESSO!</span>
                    </h2>
                </div>

                {/* Action Button */}
                <div className="mt-8">
                    <Link href="/">
                        <button className="flex items-center gap-2 bg-[#004415] text-white font-bold text-sm px-6 py-2.5 rounded-sm hover:opacity-90 transition-opacity">
                            <span className="text-lg">←</span>
                            Voltar
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
