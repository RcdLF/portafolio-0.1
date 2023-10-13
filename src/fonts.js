import localFont from "next/font/local";

export const inter = localFont({
  src: "./InterVariable.woff2",
  display: "swap",
  weight: "400 700",
  variable: "--font-inter",
});

export const material_symbols = localFont({
  src: "./opt-material-symbols-rounded.woff2",
  display: "swap",
  weight: "400",
  variable: "--font-symbols",
});
