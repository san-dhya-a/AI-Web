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
                    <div className="max-w-[400px] w-full">
                        <h3 className="text-[#004415] font-bold text-[13px] mb-8">
                            Faça o login abaixo para começar:
                        </h3>
                        <form className="space-y-8">
                            <div className="space-y-1">
                                <Input
                                    label="Login (E-mail)"
                                    type="email"
                                    variant="line"
                                    labelClassName="text-[11px] text-gray-800 font-normal mb-0"
                                    className="placeholder:text-transparent text-sm py-1 border-gray-600"
                                />
                                <div className="flex justify-end pt-1">
                                    <Link href="#" className="text-[10px] text-gray-800 hover:text-green-700">
                                        Esqueci meu login
                                    </Link>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <Input
                                    label="Senha"
                                    type="password"
                                    variant="line"
                                    labelClassName="text-[11px] text-gray-800 font-normal mb-0"
                                    className="placeholder:text-transparent text-sm py-1 border-gray-600"
                                />
                                <div className="flex justify-end pt-1">
                                    <Link href="#" className="text-[10px] text-gray-800 hover:text-green-700">
                                        Esqueci minha senha
                                    </Link>
                                </div>
                            </div>

                            <Link href="/minha-conta" className="block mt-4">
                                <Button fullWidth type="button" className="text-base py-3.5 bg-[#004415] hover:bg-[#003310] font-bold">
                                    Entrar
                                </Button>
                            </Link>
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
                        <div className="flex flex-col items-end gap-6 text-[#004415] text-right">
                            <h3 className="text-[#004415] text-[28px] font-bold leading-[1.1] not-italic" style={{ fontFamily: '"Acumin Pro", sans-serif', fontStyle: 'normal' }}>
                                Baixe<br />agora o<br />app do<br />Bora!
                            </h3>
                            <div className="flex flex-col gap-3 items-end">
                                <Image
                                    src="/assets/image/icon/icon1.png"
                                    alt="Google Play"
                                    width={120}
                                    height={36}
                                    className="h-10 w-auto cursor-pointer"
                                />
                                <Image
                                    src="/assets/image/icon/icon2.png"
                                    alt="App Store"
                                    width={120}
                                    height={36}
                                    className="h-10 w-auto cursor-pointer"
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
                            {/* Floating b! Badge Overlay — right side
                            <div className="absolute top-[25%] -right-5 bg-[#268200] p-3 rounded-lg -rotate-12 shadow-lg z-10 hidden lg:block border-[3px] border-white/30">
                                <span className="text-white font-black italic text-3xl leading-none">b!</span>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
