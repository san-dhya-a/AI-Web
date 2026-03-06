"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Banner from "@/components/layout/banner";
import { acuminProBold, acuminProRegular } from "@/app/fonts";

const contactSchema = z.object({
    nome: z.string().min(1, "Nome é obrigatório"),
    email: z.string().min(1, "E-mail é obrigatório").email("E-mail inválido"),
    cpfCnpj: z.string()
        .min(1, "CPF/CNPJ é obrigatório")
        .refine((val) => {
            const numbers = val.replace(/\D/g, "");
            return numbers.length === 11 || numbers.length === 14;
        }, {
            message: "CPF deve ter 11 dígitos ou CNPJ 14 dígitos",
        }),
    mensagem: z.string().min(1, "Mensagem é obrigatória"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const maskCpfCnpj = (value: string) => {
    let v = value.replace(/\D/g, "");
    if (v.length > 14) v = v.slice(0, 14);

    if (v.length <= 11) {
        v = v.replace(/(\d{3})(\d)/, "$1.$2");
        v = v.replace(/(\d{3})(\d)/, "$1.$2");
        v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    } else {
        v = v.replace(/^(\d{2})(\d)/, "$1.$2");
        v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
        v = v.replace(/\.(\d{3})(\d)/, ".$1/$2");
        v = v.replace(/(\d{4})(\d{1,2})$/, "$1-$2");
    }
    return v;
};

export default function FaleConoscoPage() {
    const router = useRouter();
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

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
        console.log("Form submitted:", { ...data, file: selectedFile });
        reset();
        setSelectedFile(null);
        router.push("/fale-conosco/success");
    };

    return (
        <div className={`bg-white min-h-screen flex flex-col ${acuminProRegular.className}`}>
            <Header />
            <Banner title="FALE CONOSCO" subtitle="" />

            <main className="flex-1 w-full bg-white">
                <div className="w-full max-w-[1100px] mx-auto px-6 py-8 md:py-12">
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        {/* Row: Nome, Email, CPF/CNPJ */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 mt-2">
                            {/* Nome */}
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="nome" className={`text-[12px] font-normal text-black ${acuminProRegular.className}`}>
                                    Nome
                                </label>
                                <input
                                    id="nome"
                                    type="text"
                                    placeholder="José dos Santos"
                                    {...register("nome")}
                                    className={`w-full bg-[#f4f4f4] border-none focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-4 h-11 text-[13px] text-black font-normal transition ${errors.nome ? "ring-1 ring-red-400 bg-red-50" : ""}`}
                                />
                                {errors.nome && <p className="text-[10px] text-red-500">{errors.nome.message}</p>}
                            </div>

                            {/* Email */}
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="email" className={`text-[12px] font-normal text-black ${acuminProRegular.className}`}>
                                    E-mail
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="jose@gmail.com"
                                    {...register("email")}
                                    className={`w-full bg-[#f4f4f4] border-none focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-4 h-11 text-[13px] text-black font-normal transition ${errors.email ? "ring-1 ring-red-400 bg-red-50" : ""}`}
                                />
                                {errors.email && <p className="text-[10px] text-red-500">{errors.email.message}</p>}
                            </div>

                            {/* CPF/CNPJ */}
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="cpfCnpj" className={`text-[12px] font-normal text-black ${acuminProRegular.className}`}>
                                    CPF/CNPJ
                                </label>
                                <input
                                    id="cpfCnpj"
                                    type="text"
                                    placeholder="123.456.789-10"
                                    maxLength={18}
                                    {...register("cpfCnpj", {
                                        onChange: (e) => {
                                            e.target.value = maskCpfCnpj(e.target.value);
                                        }
                                    })}
                                    className={`w-full bg-[#f4f4f4] border-none focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-4 h-11 text-[13px] text-black font-normal transition ${errors.cpfCnpj ? "ring-1 ring-red-400 bg-red-50" : ""}`}
                                />
                                {errors.cpfCnpj && <p className="text-[10px] text-red-500">{errors.cpfCnpj.message}</p>}
                            </div>
                        </div>

                        {/* Mensagem */}
                        <div className="flex flex-col gap-1.5 mb-2 mt-[2.5rem]">
                            <label htmlFor="mensagem" className={`text-[#004415] font-bold text-[16px] mb-2 ${acuminProBold.className}`}>
                                Sua mensagem
                            </label>
                            <textarea
                                id="mensagem"
                                rows={6}
                                placeholder="Escreva aqui a sua mensagem."
                                {...register("mensagem")}
                                className={`w-full bg-[#f4f4f4] border-none focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-4 py-3 text-[13px] text-black font-normal resize-none transition ${errors.mensagem ? "ring-1 ring-red-400 bg-red-50" : ""}`}
                            />
                            {errors.mensagem && <p className="text-[10px] text-red-500">{errors.mensagem.message}</p>}
                        </div>

                        {/* Anexar arquivo area */}
                        <div className="flex flex-col items-end mb-10 mt-3">
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={(e) => {
                                    if (e.target.files && e.target.files.length > 0) {
                                        setSelectedFile(e.target.files[0]);
                                    }
                                }}
                                className="hidden"
                                accept="image/*,.pdf,.doc,.docx"
                            />
                            <button
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                                className={`flex items-center gap-2 bg-[#f4f7f5] text-[#004415] text-[13px] font-bold px-5 py-2 hover:bg-[#e8ece9] transition-colors rounded-sm ${acuminProBold.className}`}
                            >
                                <svg className="w-[14px] h-[14px] text-[#004415]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                </svg>
                                Anexar arquivo
                            </button>
                            {selectedFile && (
                                <div className="flex items-center gap-1 mt-2">
                                    <svg className="w-[14px] h-[14px] text-[#1a7f1a]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className={`text-[#1a7f1a] text-[12px] font-bold ${acuminProBold.className}`}>{selectedFile.name}</span>
                                </div>
                            )}
                        </div>

                        {/* FAQ Note */}
                        <p className={`text-[13px] text-black mt-2 mb-10 ${acuminProRegular.className}`}>
                            Antes de enviar sua dúvida, acesse nossa área de perguntas frequentes{" "}
                            <Link href="/faq" className={`font-bold underline text-black hover:text-[#004415] transition ${acuminProBold.className}`}>
                                clicando aqui.
                            </Link>
                        </p>

                        {/* Actions */}
                        <div className="flex items-center justify-between pt-4 pb-16">
                            <button
                                type="button"
                                onClick={() => router.back()}
                                className={`flex items-center gap-2 bg-[#f4f7f5] text-[#004415] text-[15px] font-bold px-7 py-[10px] hover:bg-[#e8ece9] rounded-sm transition-colors ${acuminProBold.className}`}
                            >
                                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Voltar
                            </button>

                            <button
                                type="submit"
                                disabled={!isValid || isSubmitting}
                                className={`bg-[#004415] text-white font-bold text-[15px] px-[42px] py-[10px] rounded-sm hover:bg-[#003310] transition-colors ${(!isValid || isSubmitting) ? "opacity-75 cursor-not-allowed" : "cursor-pointer"} ${acuminProBold.className}`}
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
