import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SITE } from "@/lib/constants";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SITE.name} | Isparta Bahçelievler Kız Öğrenci Apartı`,
  description:
    "Isparta Bahçelievler'de yaklaşık 20 yıllık aile tecrübesiyle güvenli kız öğrenci apartı. Merkezi konum, donanımlı odalar ve samimi yaklaşım.",
  openGraph: {
    title: SITE.name,
    description: SITE.motto,
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
