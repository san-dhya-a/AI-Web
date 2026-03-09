"use client";

import { useRouter } from "next/navigation";
import Header from "@/components/layout/header";
import Banner from "@/components/layout/banner";
import Footer from "@/components/layout/footer";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PatternFormat } from "react-number-format";
import { acuminProBold, acuminProRegular } from "@/app/fonts";
import { minhaContaSchema, type MinhaContaFormData } from "@/services/form-controller/schemas";

export default function MinhaContaPage() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<MinhaContaFormData>({
        resolver: zodResolver(minhaContaSchema),
        defaultValues: {
            cargo: "PDV",
            nomeCompleto: "Roberto da Silva Santos",
            cpfCnpj: "194.123.321-90",
            email: "roberto@gmail.com",
            cep: "22222-111",
            endereco: "Rua dos Ipês",
            numero: "345",
            complemento: "Casa 02",
            uf: "Rio de Janeiro",
            cidade: "Rio de Janeiro",
            bairro: "Santa Cruz",
            dddResidencial: "21",
            telefoneResidencial: "99999-2334",
            dddCelular: "21",
            telefoneCelular: "99999-2334",
            genero: "Homem",
            senhaAtual: "password",
            novaSenha: "password",
            confirmarNovaSenha: "password",
        }
    });

    const onSubmit = (data: MinhaContaFormData) => {
        console.log(data);
        router.push("/minha-conta/success");
    };

    return (
        <div className={`bg-white min-h-screen flex flex-col ${acuminProRegular.className}`}>
            <Header />
            <Banner />

            <main className="flex-1 bg-white">
                <form onSubmit={handleSubmit(onSubmit)} className="max-w-[1100px] mx-auto px-6 py-10">
                    <div className="flex flex-col md:flex-row gap-5 lg:gap-8">

                        {/* Left: Profile photo section */}
                        <div className="w-[180px] shrink-0">
                            <p className="text-[10px] font-bold text-[#004415] mb-8">* Campo Obrigatório</p>
                            <div className="flex flex-col items-center shrink-0 relative w-[130px] h-[130px] rounded-full overflow-hidden bg-gray-100 shadow-sm">
                                <Image
                                    src="/images/avator.png"
                                    alt="Profile"
                                    width={130}
                                    height={130}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = "data:image/svg+xml,%3Csvg xmlns='' fill='currentColor' viewBox='0 0 24 24'%3E%3Cpath d='M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z' /%3E%3C/svg%3E";
                                    }}
                                />
                                <button type="button" className="absolute bottom-0 left-0 w-full bg-[#004415]/90 text-white text-[11px] py-1.5 font-bold hover:bg-[#004415] transition-colors">
                                    Editar Foto
                                </button>
                            </div>
                        </div>

                        {/* Right: Forms positioned next to profile picture with flex-1 */}
                        <div className="flex-1 w-full">
                            <div className="space-y-8 pt-[20px]">

                                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 mt-3">
                                    <div className="flex flex-col gap-1.5">
                                        <label className={`text-[12px] font-normal text-black ${acuminProRegular.className}`}>Seu cargo</label>
                                        <div className="relative">
                                            <input
                                                {...register("cargo")}
                                                defaultValue="PDV"
                                                readOnly
                                                className="bg-white border border-gray-300 focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-4 h-9 text-[13px] text-black w-full font-normal"
                                            />
                                        </div>
                                        {errors.cargo && <span className="text-red-500 text-[10px]">{errors.cargo.message}</span>}
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className={`text-[12px] font-normal text-black ${acuminProRegular.className}`}>Nome Completo *</label>
                                        <input
                                            {...register("nomeCompleto")}
                                            className="bg-[#f0f0f0] border-none focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-4 h-9 text-[13px] text-black w-full font-normal"
                                        />
                                        {errors.nomeCompleto && <span className="text-red-500 text-[10px]">{errors.nomeCompleto.message}</span>}
                                    </div>
                                </div>
                                {/* CPF + Email */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-1.5">
                                        <label className={`text-[12px] font-normal text-black ${acuminProRegular.className}`}>CPF ou CNPJ da loja *</label>
                                        <Controller
                                            name="cpfCnpj"
                                            control={control}
                                            render={({ field }) => (
                                                <PatternFormat
                                                    format={field.value.length > 14 ? "##.###.###/####-##" : "###.###.### - ##"}
                                                    onValueChange={(values) => field.onChange(values.formattedValue)}
                                                    value={field.value}
                                                    className="bg-[#f0f0f0] border-none focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-4 h-9 text-[13px] text-black w-full font-normal"
                                                />
                                            )}
                                        />
                                        {errors.cpfCnpj && <span className="text-red-500 text-[10px]">{errors.cpfCnpj.message}</span>}
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className={`text-[12px] font-normal text-black ${acuminProRegular.className}`}>E-mail *</label>
                                        <input
                                            {...register("email")}
                                            type="email"
                                            className="bg-[#f0f0f0] border-none focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-4 h-9 text-[13px] text-black w-full font-normal"
                                        />
                                        {errors.email && <span className="text-red-500 text-[10px]">{errors.email.message}</span>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8 pt-8 mt-2">
                        {/* CEP + Endereço */}
                        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6">
                            <div className="flex flex-col gap-1.5">
                                <label className={`text-[12px] font-normal text-black ${acuminProRegular.className}`}>CEP *</label>
                                <Controller
                                    name="cep"
                                    control={control}
                                    render={({ field }) => (
                                        <PatternFormat
                                            format="##### - ###"
                                            onValueChange={(values) => field.onChange(values.formattedValue)}
                                            value={field.value}
                                            className="bg-[#f0f0f0] border-none focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-4 h-9 text-[13px] text-black w-full font-normal"
                                        />
                                    )}
                                />
                                {errors.cep && <span className="text-red-500 text-[10px]">{errors.cep.message}</span>}
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className={`text-[12px] font-normal text-black ${acuminProRegular.className}`}>Endereço *</label>
                                <input
                                    {...register("endereco")}
                                    className="bg-[#f0f0f0] border-none focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-4 h-9 text-[13px] text-black w-full font-normal"
                                />
                                {errors.endereco && <span className="text-red-500 text-[10px]">{errors.endereco.message}</span>}
                            </div>
                        </div>

                        {/* Número + Complemento + UF + Cidade + Bairro */}
                        <div className="grid grid-cols-2 lg:grid-cols-[80px_120px_160px_1fr_1fr] gap-6">
                            <div className="flex flex-col gap-1.5">
                                <label className={`text-[12px] font-normal text-black ${acuminProRegular.className}`}>Número *</label>
                                <input
                                    {...register("numero")}
                                    className="bg-[#f0f0f0] border-none focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-3 h-9 text-[13px] text-black w-full font-normal"
                                />
                                {errors.numero && <span className="text-red-500 text-[10px]">{errors.numero.message}</span>}
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className={`text-[12px] font-normal text-black ${acuminProRegular.className}`}>Complemento *</label>
                                <input
                                    {...register("complemento")}
                                    className="bg-[#f0f0f0] border-none focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-4 h-9 text-[13px] text-black w-full font-normal"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className={`text-[12px] font-normal text-black ${acuminProRegular.className}`}>UF *</label>
                                <div className="relative">
                                    <select
                                        {...register("uf")}
                                        className="bg-[#f0f0f0] border-none focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-4 h-9 text-[13px] text-black w-full appearance-none pr-8 font-normal"
                                    >
                                        <option value="Rio de Janeiro">Rio de Janeiro</option>
                                        {/* other states */}
                                    </select>
                                    <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#004415]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className={`text-[12px] font-normal text-black ${acuminProRegular.className}`}>Cidade *</label>
                                <input
                                    {...register("cidade")}
                                    className="bg-[#f0f0f0] border-none focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-4 h-9 text-[13px] text-black w-full font-normal"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className={`text-[12px] font-normal text-black ${acuminProRegular.className}`}>Bairro *</label>
                                <input
                                    {...register("bairro")}
                                    className="bg-[#f0f0f0] border-none focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-4 h-9 text-[13px] text-black w-full font-normal"
                                />
                            </div>
                        </div>

                        {/* Telefone Residencial + Celular + Gênero */}
                        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1.2fr] gap-6">
                            <div className="flex flex-col gap-1.5">
                                <label className={`text-[12px] font-normal text-black ${acuminProRegular.className}`}>Telefone Residencial</label>
                                <div className="flex gap-2">
                                    <input
                                        {...register("dddResidencial")}
                                        className="bg-[#f0f0f0] border-none focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-3 h-9 text-[13px] text-black w-12 text-center font-normal"
                                        maxLength={2}
                                    />
                                    <Controller
                                        name="telefoneResidencial"
                                        control={control}
                                        render={({ field }) => (
                                            <PatternFormat
                                                format="##### - ####"
                                                onValueChange={(values) => field.onChange(values.formattedValue)}
                                                value={field.value}
                                                className="bg-[#f0f0f0] border-none focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-4 h-9 text-[13px] text-black flex-1 font-normal"
                                            />
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className={`text-[12px] font-normal text-black ${acuminProRegular.className}`}>Telefone Celular *</label>
                                <div className="flex gap-2">
                                    <input
                                        {...register("dddCelular")}
                                        className="bg-[#f0f0f0] border-none focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-3 h-9 text-[13px] text-black w-12 text-center font-normal"
                                        maxLength={2}
                                    />
                                    <Controller
                                        name="telefoneCelular"
                                        control={control}
                                        render={({ field }) => (
                                            <PatternFormat
                                                format="##### - ####"
                                                onValueChange={(values) => field.onChange(values.formattedValue)}
                                                value={field.value}
                                                className="bg-[#f0f0f0] border-none focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-4 h-9 text-[13px] text-black flex-1 font-normal"
                                            />
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className={`text-[12px] font-normal text-black ${acuminProRegular.className}`}>Gênero *</label>
                                <div className="relative">
                                    <select
                                        {...register("genero")}
                                        className="bg-[#f0f0f0] border-none focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-4 h-9 text-[13px] text-black w-full appearance-none pr-8 font-normal"
                                    >
                                        <option value="Homem">Homem</option>
                                        <option value="Mulher">Mulher</option>
                                        <option value="Outro">Outro</option>
                                    </select>
                                    <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#004415]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="pt-10 mt-8 border-t border-gray-200">
                            <h3 className={`text-[#004415] font-bold text-[16px] mb-8 ${acuminProBold.className}`}>Redefinir Senha</h3>

                            <div className="space-y-6 w-full">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-1.5 w-full">
                                        <label className={`text-[12px] font-normal text-black ${acuminProRegular.className}`}>Senha Atual *</label>
                                        <input
                                            {...register("senhaAtual")}
                                            type="password"
                                            placeholder="********"
                                            className="bg-[#f0f0f0] border-none focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-4 h-9 text-[13px] text-black w-full font-normal"
                                        />
                                    </div>
                                    <div className="hidden md:block"></div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-1.5 w-full">
                                        <div className="flex justify-between items-center w-full">
                                            <label className={`text-[12px] font-normal text-black ${acuminProRegular.className}`}>Nova Senha *</label>
                                            <span className="text-[10px] text-[#3e8a36] font-bold">Mínimo de 06 caracteres</span>
                                        </div>
                                        <input
                                            {...register("novaSenha")}
                                            type="password"
                                            placeholder="********"
                                            className="bg-[#f0f0f0] border-none focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-4 h-9 text-[13px] text-black w-full font-normal"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-1.5 w-full">
                                        <div className="flex justify-between items-center min-h-[18px]">
                                            <label className={`text-[12px] font-normal text-black ${acuminProRegular.className}`}>Confirmar nova Senha *</label>
                                        </div>
                                        <input
                                            {...register("confirmarNovaSenha")}
                                            type="password"
                                            placeholder="********"
                                            className="bg-[#f0f0f0] border-none focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-4 h-9 text-[13px] text-black w-full font-normal"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="flex items-center justify-between pt-16 mt-4">
                        <button
                            type="button"
                            onClick={() => router.back()}
                            className={`flex items-center gap-2 bg-[#f4f4f4] text-[#004415] text-[15px] font-bold px-5 py-3 hover:bg-gray-200 transition-colors ${acuminProBold.className}`}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
                            </svg>
                            Voltar
                        </button>

                        <button
                            type="submit"
                            className={`bg-[#004415] text-white font-bold text-[15px] px-10 py-3 hover:bg-[#003310] transition-colors ${acuminProBold.className}`}
                        >
                            Salvar Alterações
                        </button>
                    </div>
                </form>
            </main>
            <Footer />
        </div >
    );
}
