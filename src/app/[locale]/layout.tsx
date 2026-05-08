import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { getMessages } from "next-intl/server";
import { Providers } from "../Providers"; // পাথ ঠিক করে নিন
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ContactTopBar from "@/components/ContactTopBar";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <Providers locale={locale} messages={messages}>
      <div className="flex flex-col min-h-screen">
        <header className="fixed top-0 w-full z-[100]">
        <ContactTopBar />
        <Navbar />
      </header>
        <main className="flex-grow pt-20">{children}</main>
        <Footer/>
        <ScrollToTop/>
      </div>
    </Providers>
  );
}