"use client";

import Image from "next/image";
import Link from "next/link";
import Input from "../ui/input";
import Button from "../ui/button";
import { acuminProBold } from "@/app/fonts";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "@/services/form-controller/schemas";
import { dataHolder } from "@/services/data-holder";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginSection() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginFormData) => {
        setIsLoading(true);
        setError(null);
        try {
            await dataHolder.login(data);
            router.push("/minha-conta");
        } catch (err: any) {
            setError(err.message || "Falha ao realizar login. Verifique suas credenciais.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="bg-[#f2f2f2] py-2 md:py-4">
            <div className="container max-w-6xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="max-w-[400px] w-full">
                        <h3 className="text-[#004415] font-bold text-[13px] mb-8">
                            Faça o login abaixo para começar:
                        </h3>
                        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            {error && (
                                <div className="text-red-600 text-[11px] font-medium mb-2">
                                    {error}
                                </div>
                            )}
                            <div className="space-y-1">
                                <Input
                                    {...register("email")}
                                    label="Login (E-mail)"
                                    type="email"
                                    variant="line"
                                    labelClassName="text-[11px] text-gray-800 font-normal mb-0"
                                    className="placeholder:text-transparent text-sm py-1 border-gray-600"
                                    error={errors.email?.message}
                                />
                                <div className="flex justify-end pt-1">
                                    <Link href="#" className="text-[10px] text-gray-800 hover:text-green-700">
                                        Esqueci meu login
                                    </Link>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <Input
                                    {...register("senha")}
                                    label="Senha"
                                    type="password"
                                    variant="line"
                                    labelClassName="text-[11px] text-gray-800 font-normal mb-0"
                                    className="placeholder:text-transparent text-sm py-1 border-gray-600"
                                    error={errors.senha?.message}
                                />
                                <div className="flex justify-end pt-1">
                                    <Link href="#" className="text-[10px] text-gray-800 hover:text-green-700">
                                        Esqueci minha senha
                                    </Link>
                                </div>
                            </div>

                            <Button
                                fullWidth
                                type="submit"
                                className="text-base py-3.5 bg-[#004415] hover:bg-[#003310] font-bold mt-4"
                                isLoading={isLoading}
                            >
                                Entrar
                            </Button>
                        </form>
                        <p className="text-center mt-6 text-[12px] text-black">
                            Primeiro acesso?{" "}
                            <Link
                                href="#"
                                className="text-[#004415] font-bold hover:text-[#003310]"
                            >
                                Cadastre-se já!
                            </Link>
                        </p>
                    </div>

                    {/* Right side - App Download */}
                    <div className="flex items-center gap-6 lg:justify-end w-full">
                        <div className="flex flex-col items-end gap-6 text-[#004415] text-right mt-0">
                            <h3 className={`text-[#004415] text-[34px] xl:text-[40px] font-bold leading-[1.05] not-italic ${acuminProBold.className}`}>
                                Baixe<br />agora o<br />app do<br />Bora!
                            </h3>
                            <div className="flex flex-col gap-3 items-end">
                                <Image
                                    src="/assets/image/icon/icon1.png"
                                    alt="Google Play"
                                    width={140}
                                    height={42}
                                    className="h-11 w-auto cursor-pointer"
                                />
                                <Image
                                    src="/assets/image/icon/icon2.png"
                                    alt="App Store"
                                    width={140}
                                    height={42}
                                    className="h-11 w-auto cursor-pointer"
                                />
                            </div>
                        </div>
                        <div className="relative pl-6">
                            <Image
                                src="/assets/image/banner/img2.png"
                                alt="Mobile App"
                                width={260}
                                height={520}
                                className="w-[200px] lg:w-[240px] xl:w-[280px] drop-shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
