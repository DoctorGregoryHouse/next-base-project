import type { Metadata } from "next";
import localFont from "next/font/local";
import "./../globals.css";
import CookieConsentBanner from "@/components/common/CookieConsentBanner";

//i18n
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Locale } from "../../../types/types";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const geistSans = localFont({
  src: "./../../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./../../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Standard Titel",
    // %s will be replaced by the title of the child page
    template: "%s | Standard Titel",
  },
  description: "Generated by create next app",
  twitter: {
    card: "summary_large_image",
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // Define the type of params
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang="en">
      <head>{/* <PlausibleProvider domain="example.com" /> */}</head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
          <CookieConsentBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
