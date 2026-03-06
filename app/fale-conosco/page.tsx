"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

// Zod schema
const contactSchema = z.object({
    nome: z.string().min(1, "Nome é obrigatório"),
    email: z.string().min(1, "E-mail é obrigatório").email("E-mail inválido"),
    cpfCnpj: z.string()
        .min(1, "CPF/CNPJ é obrigatório")
        .refine((val) => val.replace(/\D/g, "").length === 11 || val.replace(/\D/g, "").length === 14, {
            message: "CPF deve ter 11 dígitos ou CNPJ 14 dígitos",
        }),
    mensagem: z.string().min(1, "Mensagem é obrigatória"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function FaleConoscoPage() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        mode: "onChange",
    });

    const onSubmit = async (data: ContactFormData) => {
        // Simulate a network request
        await new Promise((res) => setTimeout(res, 800));
        console.log("Form submitted:", data);
        reset();
        router.push("/fale-conosco/success");
    };

    return (
        <div className="bg-[#f8f9fa] min-h-screen flex flex-col font-sans">
            <Header />

            <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-12 md:py-16">
                {/* Page Title */}
                <div className="mb-10">
                    <h1 className="text-[2.5rem] md:text-[3.5rem] font-extrabold italic tracking-tighter text-[#004415]">
                        FALE CONOSCO
                    </h1>
                </div>

                {/* Form Card */}
                <div className="bg-white rounded-md shadow-sm p-8 md:p-12">
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        {/* Row: Nome, Email, CPF/CNPJ */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            {/* Nome */}
                            <div className="flex flex-col gap-1.5">
                                <label
                                    htmlFor="nome"
                                    className="text-sm font-medium text-gray-800"
                                >
                                    Nome
                                </label>
                                <input
                                    id="nome"
                                    type="text"
                                    placeholder="José dos Santos"
                                    {...register("nome")}
                                    className={`w-full rounded px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#004415]/30 transition ${errors.nome
                                        ? "bg-red-50 ring-1 ring-red-400"
                                        : "bg-[#f4f4f4]"
                                        }`}
                                />
                                {errors.nome && (
                                    <p className="text-xs text-red-500 mt-0.5">
                                        {errors.nome.message}
                                    </p>
                                )}
                            </div>

                            {/* Email */}
                            <div className="flex flex-col gap-1.5">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-medium text-gray-800"
                                >
                                    E-mail
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="jose@gmail.com"
                                    {...register("email")}
                                    className={`w-full rounded px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#004415]/30 transition ${errors.email
                                        ? "bg-red-50 ring-1 ring-red-400"
                                        : "bg-[#f4f4f4]"
                                        }`}
                                />
                                {errors.email && (
                                    <p className="text-xs text-red-500 mt-0.5">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>

                            {/* CPF/CNPJ */}
                            <div className="flex flex-col gap-1.5">
                                <label
                                    htmlFor="cpfCnpj"
                                    className="text-sm font-medium text-gray-800"
                                >
                                    CPF/CNPJ
                                </label>
                                <input
                                    id="cpfCnpj"
                                    type="text"
                                    placeholder="123.456.789-10"
                                    maxLength={18}
                                    {...register("cpfCnpj", {
                                        onChange: (e) => {
                                            let value = e.target.value.replace(/\D/g, "");
                                            if (value.length <= 11) {
                                                // CPF mask
                                                value = value
                                                    .replace(/(\d{3})(\d)/, "$1.$2")
                                                    .replace(/(\d{3})(\d)/, "$1.$2")
                                                    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
                                                    .replace(/(-\d{2})\d+?$/, "$1");
                                            } else {
                                                // CNPJ mask
                                                value = value
                                                    .replace(/^(\d{2})(\d)/, "$1.$2")
                                                    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
                                                    .replace(/\.(\d{3})(\d)/, ".$1/$2")
                                                    .replace(/(\d{4})(\d)/, "$1-$2")
                                                    .replace(/(-\d{2})\d+?$/, "$1");
                                            }
                                            e.target.value = value;
                                        }
                                    })}
                                    className={`w-full rounded px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#004415]/30 transition ${errors.cpfCnpj
                                        ? "bg-red-50 ring-1 ring-red-400"
                                        : "bg-[#f4f4f4]"
                                        }`}
                                />
                                {errors.cpfCnpj && (
                                    <p className="text-xs text-red-500 mt-0.5">
                                        {errors.cpfCnpj.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Mensagem */}
                        <div className="flex flex-col gap-1.5 mb-2">
                            <label
                                htmlFor="mensagem"
                                className="text-base font-bold text-[#004415]"
                            >
                                Sua mensagem
                            </label>
                            <textarea
                                id="mensagem"
                                rows={6}
                                placeholder="Escreva aqui a sua mensagem."
                                {...register("mensagem")}
                                className={`w-full rounded px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#004415]/30 resize-none transition ${errors.mensagem
                                    ? "bg-red-50 ring-1 ring-red-400"
                                    : "bg-[#f4f4f4]"
                                    }`}
                            />
                            {errors.mensagem && (
                                <p className="text-xs text-red-500 mt-0.5">
                                    {errors.mensagem.message}
                                </p>
                            )}
                        </div>

                        {/* Anexar arquivo area */}
                        <div className="flex flex-col items-end mb-10">
                            <button
                                type="button"
                                className="flex items-center gap-2 bg-[#f4f7f5] text-[#004415] font-semibold text-sm px-5 py-2.5 rounded transition hover:bg-[#e8ece9]"
                            >
                                <svg
                                    className="w-4 h-4 text-[#004415]"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                                    />
                                </svg>
                                Anexar arquivo
                            </button>
                            <div className="flex items-center gap-1.5 mt-2.5 mr-1">
                                <svg
                                    className="w-4 h-4 text-[#1a7f1a]"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-[#1a7f1a] text-sm font-bold">imagem.jpg</span>
                            </div>
                        </div>

                        {/* FAQ Note */}
                        <p className="text-sm text-gray-700 mb-8">
                            Antes de enviar sua dúvida, acesse nossa área de perguntas
                            frequentes{" "}
                            <Link
                                href="/faq"
                                className="font-bold underline text-gray-900 hover:text-[#004415] transition"
                            >
                                clicando aqui.
                            </Link>
                        </p>

                        {/* Actions */}
                        <div className="flex items-center justify-between">
                            <Link
                                href="/"
                                className="flex items-center gap-2 bg-[#f4f7f5] text-[#004415] text-sm font-bold px-8 py-3 rounded hover:bg-[#e8ece9] transition"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2.5}
                                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                    />
                                </svg>
                                Voltar
                            </Link>

                            <button
                                type="submit"
                                disabled={!isValid || isSubmitting}
                                className={`px-12 py-3 rounded text-sm font-bold text-white transition bg-[#004415] hover:bg-[#005a1c] ${(!isValid || isSubmitting) ? "opacity-75 cursor-not-allowed" : "cursor-pointer"
                                    }`}
                            >
                                {isSubmitting ? "Enviando..." : "Enviar"}
                            </button>
                        </div>
                    </form>
                </div>
            </main>

            <Footer />
        </div>
    );
}
