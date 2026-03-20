"use client";

import Image from "next/image";
import Link from "next/link";
import Input from "../ui/input";
import Button from "../ui/button";
import { acuminProBold } from "@/app/fonts";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "@/services/form-controller/schemas";
import { apiController } from "@/services/api-controller";
import { ENDPOINTS } from "@/services/data-holder";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { setCookie, getCookie } from "@/utils/cookieUtils";

export default function LoginSection() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setIsMounted(true);
    }, []);

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
            const response = await apiController.post(ENDPOINTS.LOGIN, {
                email: data.email,
                password: data.senha,
            });

            if (response.error) {
                setError(response.message || "Invalid credentials");
                return;
            }

            if (response.data?.token) {
                setCookie("auth_token", response.data.token, 1);
            }

            router.push("/home");
        } catch (err: any) {
            setError(err.message || "Falha ao realizar login. Verifique suas credenciais.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="bg-[#f2f2f2] py-12 md:py-20">
            <div className="container max-w-6xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-[1.27fr_1fr] gap-12 items-center">
                    <div className="max-w-[400px] w-full lg:pr-8">
                        <h3 className="text-[#004415] font-bold text-[13px] mb-8 uppercase">
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
                                    labelClassName="text-[12px] text-black font-normal mb-0"
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
                                    labelClassName="text-[12px] text-black font-normal mb-0"
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
                                href="/register"
                                className="text-[#004415] font-bold hover:text-[#003310]"
                            >
                                Cadastre-se já!
                            </Link>
                        </p>
                    </div>

                    {/* Right side - App Download */}
                    <div className="flex items-center gap-6 lg:justify-end w-full">
                        <div className="flex flex-col items-center lg:items-start gap-6 text-[#004415] text-center lg:text-left mt-0">
                            <h3 className={`text-[#004415] text-[34px] xl:text-[40px] font-bold leading-[1.05] not-italic ${acuminProBold.className}`}>
                                Baixe agora o<br />app do Bora!
                            </h3>
                            <div className="flex flex-col gap-3 items-center lg:items-start">
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
                        <div className="relative pl-6 hidden sm:block">
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
