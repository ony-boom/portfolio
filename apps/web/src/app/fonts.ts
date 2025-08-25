import { Inter, Libre_Baskerville } from "next/font/google";

export const fontSans = Inter({
  variable: "--ff-sans",
  subsets: ["latin"],
});

export const fontSerif = Libre_Baskerville({
  variable: "--ff-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});
