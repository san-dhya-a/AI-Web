"use client";

import Image from "next/image";
import Link from "next/link";
import Input from "../ui/input";
import Button from "../ui/button";

export default function LoginSection() {
    return (
        <section className="bg-[#f2f2f2] py-24">
            <div className="container max-w-6xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="max-w-[420px] w-full">
                        <h3 className="text-[#004415] font-bold text-[15px] mb-8">
                            Faça o login abaixo para começar:
                        </h3>
                        <form className="space-y-6">
                            <div className="space-y-1">
                                <Input
                                    label="Login (E-mail)"
                                    type="email"
                                    variant="line"
                                    className="placeholder:text-transparent text-sm"
                                />
                                <div className="flex justify-end pt-1">
                                    <Link href="#" className="text-[9px] text-gray-500 hover:text-green-700">
                                        Esqueci meu login
                                    </Link>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <Input
                                    label="Senha"
                                    type="password"
                                    variant="line"
                                    className="placeholder:text-transparent text-sm"
                                />
                                <div className="flex justify-end pt-1">
                                    <Link href="#" className="text-[9px] text-gray-500 hover:text-green-700">
                                        Esqueci minha senha
                                    </Link>
                                </div>
                            </div>

                            <Button fullWidth className="text-lg py-3.5 bg-[#004415] hover:bg-[#003310] font-bold">
                                Entrar
                            </Button>
                        </form>
                        <p className="text-center mt-6 text-[13px] text-gray-700">
                            Primeiro acesso?{" "}
                            <Link
                                href="#"
                                className="text-[#00642d] font-extrabold hover:text-[#268200]"
                            >
                                Cadastre-se já!
                            </Link>
                        </p>
                    </div>

                    {/* Right side - App Download */}
                    <div className="flex items-center gap-8 lg:justify-end w-full">
                        <div className="flex flex-col items-start gap-6 text-[#004415]">
                            <h3 className="text-4xl lg:text-[44px] leading-[0.9]" style={{ fontFamily: '"Acumin-Condensed", sans-serif', fontWeight: 900, fontStyle: 'italic' }}>
                                Baixe<br />agora o<br />app do<br />
                                <span className="text-[#268200]">Bora!</span>
                            </h3>
                            <div className="flex flex-col gap-3">
                                <Image
                                    src="/assets/image/icon/icon1.png"
                                    alt="Google Play"
                                    width={120}
                                    height={36}
                                    className="h-9 w-auto cursor-pointer"
                                />
                                <Image
                                    src="/assets/image/icon/icon2.png"
                                    alt="App Store"
                                    width={120}
                                    height={36}
                                    className="h-9 w-auto cursor-pointer"
                                />
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src="/assets/image/banner/img2.png"
                                alt="Mobile App"
                                width={200}
                                height={400}
                                className="w-44 lg:w-48 drop-shadow-xl"
                            />
                            {/* Floating b! Badge Overlay — right side */}
                            <div className="absolute top-[25%] -right-5 bg-[#268200] p-3 rounded-lg -rotate-12 shadow-lg z-10 hidden lg:block border-[3px] border-white/30">
                                <span className="text-white font-black italic text-3xl leading-none">b!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
