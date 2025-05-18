import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import LanguageSwitcher from '@/components/lang-switcher';
import "./globals.css"
import { Header } from '@/components/Header';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // params is now a Promise
}) {
  // Await params here before destructuring
  const awaitedParams = await params;
  const { locale } = awaitedParams;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className="dark">
        <NextIntlClientProvider locale={locale}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
