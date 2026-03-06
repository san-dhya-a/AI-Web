import localFont from "next/font/local";

export const acuminCondRegular = localFont({
    src: [{ path: "../public/assets/fonts/Acumin-Condensed/AcuminProCond-Regular.otf" }],
    variable: "--font-acumin-cond-regular",
    display: "swap",
});

export const acuminCondSemibold = localFont({
    src: [{ path: "../public/assets/fonts/Acumin-Condensed/AcuminProCond-Semibold.otf" }],
    variable: "--font-acumin-cond-semibold",
    display: "swap",
});

export const acuminCondBlackItalic = localFont({
    src: [{ path: "../public/assets/fonts/Acumin-Condensed/AcuminProCond-BlackItalic.otf" }],
    variable: "--font-acumin-cond-black-italic",
    display: "swap",
});

export const acuminBoldItalic = localFont({
    src: [{ path: "../public/assets/fonts/acumin-pro/Acumin-BdItPro.otf" }],
    variable: "--font-acumin-bold-italic",
    display: "swap",
});

export const acuminProRegular = localFont({
    src: [{ path: "../public/assets/fonts/acumin-pro/Acumin-RPro.otf" }],
    variable: "--font-acumin-pro-regular",
    display: "swap",
});

export const acuminProBold = localFont({
    src: [{ path: "../public/assets/fonts/acumin-pro/Acumin-BdPro.otf" }],
    variable: "--font-acumin-pro-bold",
    display: "swap",
});
