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
import { minhaContaSchema, type MinhaContaFormData } from "@/services/form-controller/schemas";
import { apiController } from "@/services/api-controller";
import { ENDPOINTS } from "@/services/data-holder";
import { getCookie } from "@/utils/cookieUtils";
import { useRef } from "react";


export default function MinhaContaPage() {
    const router = useRouter();
    const [userData, setUserData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [fetchError, setFetchError] = useState<string | null>(null);
    const [isMounted, setIsMounted] = useState(false);
    const [profileImageUrl, setProfileImageUrl] = useState<string>("/assets/image/icon/avatar.png");
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<MinhaContaFormData>({
        resolver: zodResolver(minhaContaSchema),
        defaultValues: {
            cargo: "",
            nomeCompleto: "",
            cpfCnpj: "",
            email: "",
            cep: "",
            endereco: "",
            numero: "",
            complemento: "",
            uf: "Rio de Janeiro",
            cidade: "",
            bairro: "",
            dddResidencial: "",
            telefoneResidencial: "",
            dddCelular: "",
            telefoneCelular: "",
            genero: "Homem",
            senhaAtual: "",
            novaSenha: "",
            confirmarNovaSenha: "",
        }
    });

    const fetchUserData = async () => {
        if (!isMounted) return;
        
        try {
            const token = getCookie("auth_token");
            if (!token) {
                router.push("/");
                return;
            }

            setIsLoading(true);
            const response = await apiController.get(ENDPOINTS.GET_ACCOUNT);

            if (response.success && response.data) {
                const data = response.data;
                setUserData(data);

                const splitPhone = (phone: string | null) => {
                    if (!phone) return { ddd: "", number: "" };
                    const cleaned = phone.replace(/\D/g, "");
                    if (cleaned.length >= 10) {
                        return {
                            ddd: cleaned.substring(0, 2),
                            number: cleaned.substring(2)
                        };
                    }
                    return { ddd: "", number: cleaned };
                };

                const resTel = splitPhone(data.telefone_residencial || data.telefoneResidencial);
                const celTel = splitPhone(data.telefone_celular || data.telefoneCelular);

                const formValues = {
                    cargo: data.cargo || "PDV",
                    nomeCompleto: data.nome_completo || data.nome_Completo || data.nomeCompleto || data.nomecompleto || "",
                    cpfCnpj: data.cpf_cnpj || data.cpfCnpj || data.cpf_Cnpj || data.cpfcnpj || "",
                    email: data.email || data.Email || "",
                    cep: data.cep || data.Cep || "",
                    endereco: data.endereco || data.Endereco || data.logradouro || "",
                    numero: data.numero || data.Numero || "",
                    complemento: data.complemento || data.Complemento || "",
                    uf: data.uf || data.Uf || data.estado || "Rio de Janeiro",
                    cidade: data.cidade || data.Cidade || "",
                    bairro: data.bairro || data.Bairro || "",
                    dddResidencial: resTel.ddd,
                    telefoneResidencial: resTel.number,
                    dddCelular: celTel.ddd,
                    telefoneCelular: celTel.number,
                    genero: data.genero === "Feminino" ? "Mulher" : 
                           data.genero === "Masculino" ? "Homem" : 
                           data.genero === "Outro" ? "Outro" : 
                           (data.genero || "Homem"),
                    senhaAtual: "",
                    novaSenha: "",
                    confirmarNovaSenha: ""
                };
                reset(formValues);

                if (data.photo || data.fotoPerfil) {
                    const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/api$/, "");
                    setProfileImageUrl(`${baseUrl}${data.photo || data.fotoPerfil}`);
                }
            }
        } catch (err: any) {
            console.error("[Profile Fetch Error]", err);
            setFetchError("Falha ao carregar dados do usuário.");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (isMounted) {
            fetchUserData();
        }
    }, [isMounted]);


    const onSubmit = async (data: MinhaContaFormData) => {
        setIsUploading(true);
        try {
            const formData = new FormData();
            
            // Append text fields
            formData.append("cargo", data.cargo);
            formData.append("nomeCompleto", data.nomeCompleto);
            formData.append("cpfCnpj", data.cpfCnpj.replace(/\D/g, ""));
            formData.append("email", data.email);
            formData.append("cep", data.cep.replace(/\D/g, ""));
            formData.append("endereco", data.endereco);
            formData.append("numero", data.numero);
            formData.append("complemento", data.complemento || "");
            formData.append("uf", data.uf);
            formData.append("cidade", data.cidade);
            formData.append("bairro", data.bairro);
            
            const telRes = `${data.dddResidencial || ""}${data.telefoneResidencial || ""}`.replace(/\D/g, "");
            const telCel = `${data.dddCelular || ""}${data.telefoneCelular || ""}`.replace(/\D/g, "");
            formData.append("telefoneResidencial", telRes);
            formData.append("telefoneCelular", telCel);
            formData.append("genero", data.genero);

            // Password fields (only if provided)
            if (data.novaSenha && data.novaSenha.trim() !== "") {
                formData.append("senhaAtual", data.senhaAtual || "");
                formData.append("novaSenha", data.novaSenha);
            }

            // Append image file if selected (key must match backend multer expectation)
            if (selectedFile) {
                formData.append("fotoPerfil", selectedFile);
            }

            console.log("Sending unified multipart update...");
            await apiController.putForm(ENDPOINTS.UPDATE_ACCOUNT, formData);
            
            console.log("Update successful, Updating UI state...");
            if (previewUrl) {
                setProfileImageUrl(previewUrl);
                setPreviewUrl(null);
                setSelectedFile(null);
            }
            
            router.push("/minha-conta/success");
        } catch (err: any) {
            console.error("Detailed API Error:", JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
            alert(err.message || "Erro ao salvar alterações.");
        } finally {
            setIsUploading(false);
        }
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        // Store file for later submission
        setSelectedFile(file);

        // Preview locally (Temporarily)
        const objectUrl = URL.createObjectURL(file);
        setPreviewUrl(objectUrl);
    };

    const handleEditPhotoClick = () => {
        fileInputRef.current?.click();
    };

    const onError = (errors: any) => {
        console.error("Form validation errors (JSON):", JSON.stringify(errors, null, 2));
        console.error("Form validation errors (Object):", errors);
        Object.keys(errors).forEach(key => {
            console.error(`Field "${key}" error:`, errors[key]);
        });
        
        // Final fallback alert to tell user something is wrong
        const firstErrorPath = Object.keys(errors)[0];
        const firstErrorMessage = errors[firstErrorPath]?.message || "Verifique os campos obrigatórios";
        alert(`Não foi possível salvar: ${firstErrorMessage}`);
    };

    return (
        <div 
            className={`bg-white min-h-screen flex flex-col ${isMounted ? acuminProRegular.className : ""}`}
            suppressHydrationWarning
        >
            <Header />
            <Banner />

            <main className="flex-1 bg-white">
                {!isMounted || isLoading ? (
                    <div className="flex items-center justify-center min-h-[400px]">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#004415]"></div>
                    </div>
                ) : fetchError ? (
                    <div className="flex flex-col items-center justify-center min-h-[400px] text-red-600">
                        <p>{fetchError}</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="mt-4 text-[#004415] font-bold underline"
                        >
                            Tentar novamente
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit, onError)} className="max-w-[1100px] mx-auto px-6 py-10">
                        <div className="flex flex-col md:flex-row gap-5 lg:gap-8">
                            <div className="w-[180px] shrink-0">
                                <p className="text-[10px] font-bold text-[#004415] mb-8">* Campo Obrigatório</p>
                                <div className="flex flex-col items-center shrink-0 relative w-[130px] h-[130px] rounded-full overflow-hidden bg-gray-200 shadow-sm border-2 border-white group">
                                    <Image
                                        src={previewUrl || profileImageUrl}
                                        alt="Profile"
                                        width={130}
                                        height={130}
                                        unoptimized={true}
                                        priority
                                        className={`w-full h-full object-cover transition-opacity duration-300 ${isUploading ? 'opacity-50' : 'opacity-100'}`}
                                    />
                                    {isUploading && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-6 h-6 border-2 border-[#004415] border-t-transparent rounded-full animate-spin"></div>
                                        </div>
                                    )}
                                    <button 
                                        type="button" 
                                        onClick={handleEditPhotoClick}
                                        disabled={isUploading}
                                        className="absolute bottom-0 left-0 w-full bg-[#004415]/90 text-white text-[11px] py-1.5 font-bold hover:bg-[#004415] transition-colors disabled:bg-gray-400"
                                    >
                                        {isUploading ? "Enviando..." : "Editar Foto"}
                                    </button>
                                    <input 
                                        type="file" 
                                        ref={fileInputRef} 
                                        className="hidden" 
                                        accept="image/*"
                                        onChange={handleImageChange}
                                    />
                                </div>
                            </div>

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
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="flex flex-col gap-1.5">
                                            <label className={`text-[12px] font-normal text-black ${acuminProRegular.className}`}>CPF ou CNPJ da loja *</label>
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
                            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6">
                                <div className="flex flex-col gap-1.5">
                                    <label className={`text-[12px] font-normal text-black ${acuminProRegular.className}`}>CEP *</label>
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
                                    <label className={`text-[12px] font-normal text-black ${acuminProRegular.className}`}>Complemento</label>
                                    <input
                                        {...register("complemento")}
                                        className="bg-[#f0f0f0] border-none focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-4 h-9 text-[13px] text-black w-full font-normal"
                                    />
                                    {errors.complemento && <span className="text-red-500 text-[10px]">{errors.complemento.message}</span>}
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className={`text-[12px] font-normal text-black ${acuminProRegular.className}`}>UF *</label>
                                    <div className="relative">
                                        <select
                                            {...register("uf")}
                                            className="bg-[#f0f0f0] border-none focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-4 h-9 text-[13px] text-black w-full appearance-none pr-8 font-normal"
                                        >
                                            <option value="">Selecione</option>
                                            <option value="AC">Acre</option>
                                            <option value="AL">Alagoas</option>
                                            <option value="AP">Amapá</option>
                                            <option value="AM">Amazonas</option>
                                            <option value="BA">Bahia</option>
                                            <option value="CE">Ceará</option>
                                            <option value="DF">Distrito Federal</option>
                                            <option value="ES">Espírito Santo</option>
                                            <option value="GO">Goiás</option>
                                            <option value="MA">Maranhão</option>
                                            <option value="MT">Mato Grosso</option>
                                            <option value="MS">Mato Grosso do Sul</option>
                                            <option value="MG">Minas Gerais</option>
                                            <option value="PA">Pará</option>
                                            <option value="PB">Paraíba</option>
                                            <option value="PR">Paraná</option>
                                            <option value="PE">Pernambuco</option>
                                            <option value="PI">Piauí</option>
                                            <option value="RJ">Rio de Janeiro</option>
                                            <option value="RN">Rio Grande do Norte</option>
                                            <option value="RS">Rio Grande do Sul</option>
                                            <option value="RO">Rondônia</option>
                                            <option value="RR">Roraima</option>
                                            <option value="SC">Santa Catarina</option>
                                            <option value="SP">São Paulo</option>
                                            <option value="SE">Sergipe</option>
                                            <option value="TO">Tocantins</option>
                                        </select>
                                        <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#004415]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                    {errors.uf && <span className="text-red-500 text-[10px]">{errors.uf.message}</span>}
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className={`text-[12px] font-normal text-black ${acuminProRegular.className}`}>Cidade *</label>
                                    <input
                                        {...register("cidade")}
                                        className="bg-[#f0f0f0] border-none focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-4 h-9 text-[13px] text-black w-full font-normal"
                                    />
                                    {errors.cidade && <span className="text-red-500 text-[10px]">{errors.cidade.message}</span>}
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className={`text-[12px] font-normal text-black ${acuminProRegular.className}`}>Bairro *</label>
                                    <input
                                        {...register("bairro")}
                                        className="bg-[#f0f0f0] border-none focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-4 h-9 text-[13px] text-black w-full font-normal"
                                    />
                                    {errors.bairro && <span className="text-red-500 text-[10px]">{errors.bairro.message}</span>}
                                </div>
                            </div>

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
                                                    format="####-####"
                                                    onValueChange={(values) => field.onChange(values.value)}
                                                    value={field.value}
                                                    className="bg-[#f0f0f0] border-none focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-4 h-9 text-[13px] text-black flex-1 font-normal"
                                                />
                                            )}
                                        />
                                    </div>
                                    {(errors.dddResidencial || errors.telefoneResidencial) && (
                                        <span className="text-red-500 text-[10px]">
                                            {errors.dddResidencial?.message || errors.telefoneResidencial?.message}
                                        </span>
                                    )}
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
                                                    format="#####-####"
                                                    onValueChange={(values) => field.onChange(values.value)}
                                                    value={field.value}
                                                    className="bg-[#f0f0f0] border-none focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-4 h-9 text-[13px] text-black flex-1 font-normal"
                                                />
                                            )}
                                        />
                                    </div>
                                    {(errors.dddCelular || errors.telefoneCelular) && (
                                        <span className="text-red-500 text-[10px]">
                                            {errors.dddCelular?.message || errors.telefoneCelular?.message}
                                        </span>
                                    )}
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
                                    {errors.genero && <span className="text-red-500 text-[10px]">{errors.genero.message}</span>}
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
                                            {errors.senhaAtual && <span className="text-red-500 text-[10px]">{errors.senhaAtual.message}</span>}
                                        </div>
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
                                            {errors.novaSenha && <span className="text-red-500 text-[10px]">{errors.novaSenha.message}</span>}
                                        </div>
                                        <div className="flex flex-col gap-1.5 w-full">
                                            <label className={`text-[12px] font-normal text-black ${acuminProRegular.className}`}>Confirmar Nova Senha *</label>
                                            <input
                                                {...register("confirmarNovaSenha")}
                                                type="password"
                                                placeholder="********"
                                                className="bg-[#f0f0f0] border-none focus:ring-1 focus:ring-[#004415]/30 focus:outline-none px-4 h-9 text-[13px] text-black w-full font-normal"
                                            />
                                            {errors.confirmarNovaSenha && <span className="text-red-500 text-[10px]">{errors.confirmarNovaSenha.message}</span>}
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
                                disabled={isUploading}
                                className={`bg-[#004415] text-white font-bold text-[15px] px-10 py-3 hover:bg-[#003310] transition-colors ${acuminProBold.className} ${isUploading ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isUploading ? "Salvando..." : "Salvar Alterações"}
                            </button>
                        </div>
                    </form>
                )}
            </main>
            <Footer />
        </div>
    );
}
