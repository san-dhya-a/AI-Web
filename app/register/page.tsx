"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "@/components/layout/header";
import Banner from "@/components/layout/banner";
import Footer from "@/components/layout/footer";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PatternFormat } from "react-number-format";
import { acuminProBold, acuminProRegular } from "@/app/fonts";
import { registerSchema, type RegisterFormData } from "@/services/form-controller/schemas";
import { apiController } from "@/services/api-controller";
import { ENDPOINTS } from "@/services/data-holder";
import { getCookie } from "@/utils/cookieUtils";

export default function RegisterPage() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [profileImg, setProfileImg] = useState<string | null>(null);

    useEffect(() => {
        setIsMounted(true);
        // Guard: If logged in, redirect to home
        if (getCookie("auth_token")) {
            router.push("/home");
        }
    }, [router]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImg(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            cargo: "PDV",
            nomeCompleto: "",
            cpfCnpj: "",
            email: "",
            cep: "",
            endereco: "",
            numero: "",
            complemento: "",
            uf: "",
            cidade: "",
            bairro: "",
            dddResidencial: "",
            telefoneResidencial: "",
            dddCelular: "",
            telefoneCelular: "",
            genero: "Homem",
            password: "",
            confirmPassword: "",
        }
    });

    const onSubmit = async (data: RegisterFormData) => {
        try {
            setIsSubmitting(true);
            const payload = {
                ...data,
                telefoneResidencial: `${data.dddResidencial || ""}${data.telefoneResidencial || ""}`.replace(/\D/g, ""),
                telefoneCelular: `${data.dddCelular || ""}${data.telefoneCelular || ""}`.replace(/\D/g, ""),
                profilePicture: profileImg,
            };

            const response = await apiController.post(ENDPOINTS.REGISTER, payload);

            if (response.error) {
                alert(response.message || "Erro ao realizar cadastro.");
            } else {
                alert("Cadastro realizado com sucesso! Agora você pode fazer o login.");
                router.push("/");
            }
        } catch (err: any) {
            alert(err.message || "Error during registration.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const onError = (errors: any) => {
        const errorEntries = Object.entries(errors);
        if (errorEntries.length > 0) {
            const [firstPath, firstError]: [string, any] = errorEntries[0];
            const message = firstError?.message || `Erro no campo ${firstPath}`;
            alert(`Não foi possível cadastrar: ${message}`);
        }
    };

    if (!isMounted) return null;

    return (
        <div className={`bg-white min-h-screen flex flex-col ${acuminProRegular.className}`} suppressHydrationWarning>
            <Header />
            <Banner title="Register" subtitle="Crie sua conta para começar" />

            <main className="flex-1 bg-white">
                <form onSubmit={handleSubmit(onSubmit, onError)} className="max-w-[1100px] mx-auto px-6 py-10">
                    <div className="flex flex-col md:flex-row gap-5 lg:gap-8">
                        <div className="w-[180px] shrink-0">
                            <p className="text-[10px] font-bold text-[#004415] mb-8">* Campo Obrigatório</p>

                            <div className="flex flex-col items-center shrink-0 relative w-[130px] h-[130px] rounded-full overflow-hidden bg-gray-100 shadow-sm mb-6 group">
                                <Image
                                    src={profileImg || "/images/avator.png"}
                                    alt="Profile"
                                    width={130}
                                    height={130}
                                    className="w-full h-full object-cover"
                                />
                                <label className="absolute bottom-0 left-0 w-full bg-[#004415]/90 text-white text-[11px] py-1.5 font-bold cursor-pointer hover:bg-[#004415] transition-colors text-center">
                                    Upload Photo
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={handleImageChange}
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="flex-1 w-full">
                            <div className="space-y-8 pt-[20px]">
                                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 mt-3">
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[12px] font-normal text-black">Your role *</label>
                                        <div className="relative">
                                            <select
                                                {...register("cargo")}
                                                className="bg-[#f0f0f0] border-none focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-4 h-9 text-[13px] text-black w-full appearance-none pr-8 font-normal"
                                            >
                                                <option value="PDV">PDV</option>
                                                <option value="Manager">Manager</option>
                                                <option value="Other">Other</option>
                                            </select>
                                            <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#004415]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[12px] font-normal text-black">Full Name *</label>
                                        <input
                                            {...register("nomeCompleto")}
                                            className="bg-[#f0f0f0] border-none focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-4 h-9 text-[13px] text-black w-full font-normal"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[12px] font-normal text-black">CPF or Store CNPJ *</label>
                                        <Controller
                                            name="cpfCnpj"
                                            control={control}
                                            render={({ field }) => (
                                                <PatternFormat
                                                    format={(field.value || "").length > 14 ? "##.###.###/####-##" : "###.###.###-##"}
                                                    onValueChange={(values) => field.onChange(values.value)}
                                                    value={field.value}
                                                    className="bg-[#f0f0f0] border-none focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-4 h-9 text-[13px] text-black w-full font-normal"
                                                />
                                            )}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[12px] font-normal text-black">E-mail *</label>
                                        <input
                                            {...register("email")}
                                            type="email"
                                            className="bg-[#f0f0f0] border-none focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-4 h-9 text-[13px] text-black w-full font-normal"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8 pt-8 mt-2">
                        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[12px] font-normal text-black">Zip Code *</label>
                                <Controller
                                    name="cep"
                                    control={control}
                                    render={({ field }) => (
                                        <PatternFormat
                                            format="#####-###"
                                            onValueChange={(values) => field.onChange(values.value)}
                                            value={field.value}
                                            className="bg-[#f0f0f0] border-none focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-4 h-9 text-[13px] text-black w-full font-normal"
                                        />
                                    )}
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[12px] font-normal text-black">Address *</label>
                                <input
                                    {...register("endereco")}
                                    className="bg-[#f0f0f0] border-none focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-4 h-9 text-[13px] text-black w-full font-normal"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-[80px_120px_160px_1fr_1fr] gap-6">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[12px] font-normal text-black">Number *</label>
                                <input
                                    {...register("numero")}
                                    className="bg-[#f0f0f0] border-none focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-3 h-9 text-[13px] text-black w-full font-normal"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[12px] font-normal text-black">Complement</label>
                                <input
                                    {...register("complemento")}
                                    className="bg-[#f0f0f0] border-none focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-4 h-9 text-[13px] text-black w-full font-normal"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[12px] font-normal text-black">UF *</label>
                                <div className="relative">
                                    <select
                                        {...register("uf")}
                                        className="bg-[#f0f0f0] border-none focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-4 h-9 text-[13px] text-black w-full appearance-none pr-8 font-normal"
                                    >
                                        <option value="">Selecione</option>
                                        <option value="AC">AC</option>
                                        <option value="AL">AL</option>
                                        <option value="AP">AP</option>
                                        <option value="AM">AM</option>
                                        <option value="BA">BA</option>
                                        <option value="CE">CE</option>
                                        <option value="DF">DF</option>
                                        <option value="ES">ES</option>
                                        <option value="GO">GO</option>
                                        <option value="MA">MA</option>
                                        <option value="MT">MT</option>
                                        <option value="MS">MS</option>
                                        <option value="MG">MG</option>
                                        <option value="PA">PA</option>
                                        <option value="PB">PB</option>
                                        <option value="PR">PR</option>
                                        <option value="PE">PE</option>
                                        <option value="PI">PI</option>
                                        <option value="RJ">RJ</option>
                                        <option value="RN">RN</option>
                                        <option value="RS">RS</option>
                                        <option value="RO">RO</option>
                                        <option value="RR">RR</option>
                                        <option value="SC">SC</option>
                                        <option value="SP">SP</option>
                                        <option value="SE">SE</option>
                                        <option value="TO">TO</option>
                                    </select>
                                    <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#004415]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[12px] font-normal text-black">City *</label>
                                <input
                                    {...register("cidade")}
                                    className="bg-[#f0f0f0] border-none focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-4 h-9 text-[13px] text-black w-full font-normal"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[12px] font-normal text-black">Neighborhood *</label>
                                <input
                                    {...register("bairro")}
                                    className="bg-[#f0f0f0] border-none focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-4 h-9 text-[13px] text-black w-full font-normal"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1.2fr] gap-6">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[12px] font-normal text-black">Landline Phone</label>
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
                                                format="####-####"
                                                onValueChange={(values) => field.onChange(values.value)}
                                                value={field.value}
                                                className="bg-[#f0f0f0] border-none focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-4 h-9 text-[13px] text-black flex-1 font-normal"
                                            />
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[12px] font-normal text-black">Cell Phone *</label>
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
                                                format="#####-####"
                                                onValueChange={(values) => field.onChange(values.value)}
                                                value={field.value}
                                                className="bg-[#f0f0f0] border-none focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-4 h-9 text-[13px] text-black flex-1 font-normal"
                                            />
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[12px] font-normal text-black">Gender *</label>
                                <div className="relative">
                                    <select
                                        {...register("genero")}
                                        className="bg-[#f0f0f0] border-none focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-4 h-9 text-[13px] text-black w-full appearance-none pr-8 font-normal"
                                    >
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#004415]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="pt-10 mt-8 border-t border-gray-200">
                            <h3 className={`text-[#004415] font-bold text-[16px] mb-8 ${acuminProBold.className}`}>Security *</h3>
                            <div className="space-y-6 w-full">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-1.5 w-full">
                                        <div className="flex justify-between items-center w-full">
                                            <label className="text-[12px] font-normal text-black">Password *</label>
                                            <span className="text-[10px] text-[#3e8a36] font-bold">Minimum 06 characters</span>
                                        </div>
                                        <input
                                            {...register("password")}
                                            type="password"
                                            className="bg-[#f0f0f0] border-none focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-4 h-9 text-[13px] text-black w-full font-normal"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1.5 w-full">
                                        <label className="text-[12px] font-normal text-black">Confirm Password *</label>
                                        <input
                                            {...register("confirmPassword")}
                                            type="password"
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
                            onClick={() => router.push("/")}
                            className={`flex items-center gap-2 bg-[#f4f4f4] text-[#004415] text-[15px] font-bold px-5 py-3 hover:bg-gray-200 transition-colors ${acuminProBold.className}`}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
                            </svg>
                            Login
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`bg-[#004415] text-white font-bold text-[15px] px-10 py-3 hover:bg-[#003310] transition-colors ${acuminProBold.className} ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                            {isSubmitting ? "Cadastrando..." : "Register"}
                        </button>
                    </div>
                </form>
            </main>
            <Footer />
        </div>
    );
}
