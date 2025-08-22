import { ReactNode } from "react";
import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { NavBar } from "@/components/nav-bar";
import { fontSans, fontSerif } from "@/app/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale, NextIntlClientProvider, type Locale } from "next-intl";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Index" });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<Props>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontSerif.variable} with-noise antialiased`}
      >
        <NextIntlClientProvider>
          <ThemeProvider enableSystem attribute="class" defaultTheme="system">
            <main className="mx-auto max-w-xl px-6 py-8 md:px-0">
              <header>
                <NavBar />
              </header>
              <div className="mt-8">{children}</div>
            </main>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
