import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { 
  acuminProRegular, 
  acuminProBold, 
  acuminCondBlackItalic, 
  acuminCondRegular, 
  acuminCondSemibold, 
  acuminBoldItalic 
} from "./fonts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vibra — Minha Conta",
  description: "Consulte e edite os seus dados de perfil.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${acuminProRegular.variable} 
          ${acuminProBold.variable} 
          ${acuminCondBlackItalic.variable} 
          ${acuminCondRegular.variable} 
          ${acuminCondSemibold.variable} 
          ${acuminBoldItalic.variable} 
          antialiased
        `}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
