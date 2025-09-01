import { Inter, Libre_Baskerville, JetBrains_Mono } from "next/font/google";

export const fontSans = Inter({
  variable: "--ff-sans",
  subsets: ["latin"],
});

export const fontSerif = Libre_Baskerville({
  variable: "--ff-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const fontMono = JetBrains_Mono({
  variable: "--ff-mono",
  subsets: ["latin"],
});
