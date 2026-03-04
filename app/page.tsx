"use client";

import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import Footer from "@/components/ui/footer";

const loginSchema = z.object({
  email: z.string().min(1, "O e-mail é obrigatório").email("E-mail inválido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    console.log("Login submitted:", data);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12">
          <div className="max-w-md w-full mx-auto md:mx-0">
            {/* Logo */}
            <div className="mb-12">
              <Image
                src="/images/vibra.png"
                alt="Vibra Logo"
                width={200}
                height={50}
                className="h-12 w-auto"
              />
            </div>

            {/* Header */}
            <div className="mb-10">
              <h1 className="text-4xl md:text-5xl font-black italic tracking-tight text-[#004415] uppercase leading-none mb-4">
                BORA GANHAR <br /> AINDA MAIS?
              </h1>
              <div className="space-y-1">
                <p className="text-lg font-bold text-[#004415]">
                  Incentivo & Relacionamento do jeito Vibra
                </p>
                <p className="text-gray-600">
                  Tudo que você precisa em um único lugar.
                </p>
              </div>
            </div>

            {/* Form Container */}
            <div className="bg-[#f9f9f9] p-8 rounded-lg">
              <h2 className="text-lg font-bold text-[#004415] mb-6">
                Faça o login abaixo para começar:
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <Input
                  label="Login (E-mail)"
                  {...register("email")}
                  error={errors.email?.message}
                  placeholder="Seu e-mail cadastrado"
                />

                <div className="space-y-1">
                  <Input
                    label="Senha"
                    type="password"
                    {...register("password")}
                    error={errors.password?.message}
                    placeholder="Sua senha"
                  />
                  <div className="flex justify-end">
                    <Link href="#" className="text-[11px] text-gray-500 hover:underline">
                      Esqueci minha senha
                    </Link>
                  </div>
                </div>

                <Button type="submit" fullWidth disabled={isSubmitting}>
                  {isSubmitting ? "Entrando..." : "Entrar"}
                </Button>

                <div className="text-center mt-4 text-sm text-gray-600">
                  Primeiro acesso?{" "}
                  <Link href="#" className="font-bold text-[#004415] hover:underline">
                    Cadastre-se já!
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 relative hidden md:block">
          {/* Hero Image with Diagonal Clip */}
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full relative overflow-hidden">
              {/* Diagonal background mask/clip effect can be done with clip-path */}
              <div
                className="absolute inset-0 bg-[#f0f0f0]"
                style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}
              >
                <Image
                  src="/images/hero.png" // Placeholder, user will need to provide or I generate
                  alt="Hero Background"
                  fill
                  className="object-cover opacity-90"
                  priority
                />
              </div>
            </div>
          </div>

          {/* App Preview Section */}
          <div className="absolute inset-0 z-10 flex items-center justify-center p-12">
            <div className="flex items-center gap-12 max-w-2xl">
              <div className="text-right">
                <h3 className="text-3xl font-black italic text-[#004415] uppercase leading-tight mb-6">
                  Baixe agora <br /> o app do Bora!
                </h3>
                <div className="flex flex-col gap-3 items-end">
                  <Link href="#">
                    <Image src="/images/google-play.png" alt="Google Play" width={135} height={40} />
                  </Link>
                  <Link href="#">
                    <Image src="/images/app-store.png" alt="App Store" width={135} height={40} />
                  </Link>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/images/mobile-app.png"
                  alt="Mobile App"
                  width={280}
                  height={560}
                  className="drop-shadow-2xl"
                />
                {/* Floating "b!" logo like in screenshot */}
                <div className="absolute top-1/4 -right-8 bg-[#004415] p-4 rounded-xl rotate-12 shadow-lg">
                  <span className="text-white font-black italic text-4xl">b!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile App Section for Mobile Screens */}
      <div className="md:hidden bg-[#f0f0f0] p-8 flex flex-col items-center text-center gap-6">
        <h3 className="text-2xl font-black italic text-[#004415] uppercase">
          Baixe agora o app do Bora!
        </h3>
        <div className="flex gap-4">
          <Image src="/images/google-play.png" alt="Google Play" width={120} height={36} />
          <Image src="/images/app-store.png" alt="App Store" width={120} height={36} />
        </div>
        <Image
          src="/images/mobile-app.png"
          alt="Mobile App"
          width={200}
          height={400}
        />
      </div>

      <Footer />
    </div>
  );
}
