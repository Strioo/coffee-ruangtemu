import type { Metadata } from "next";
import { Archivo_Narrow, Manrope } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileBottomNavigation } from "@/components/layout/MobileBottomNavigation";
import "./globals.css";

const deploymentHost = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
const metadataBase = new URL(deploymentHost ? `https://${deploymentHost}` : "http://localhost:3000");

const archivoNarrow = Archivo_Narrow({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase,
  title: "ruang temu | Coffee & Space",
  description: "Ruang untuk menikmati kopi, bekerja, dan bertemu dalam suasana tenang.",
  applicationName: "ruang temu",
  openGraph: {
    title: "ruang temu | Coffee & Space",
    description: "Ruang untuk menikmati kopi, bekerja, dan bertemu dalam suasana tenang.",
    locale: "id_ID",
    siteName: "ruang temu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ruang temu | Coffee & Space",
    description: "Ruang untuk menikmati kopi, bekerja, dan bertemu dalam suasana tenang.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${archivoNarrow.variable} ${manrope.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">Lewati ke konten utama</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileBottomNavigation />
      </body>
    </html>
  );
}
