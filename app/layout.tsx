import type { Metadata } from "next";
import "./globals.css";
import { Libre_Franklin } from "next/font/google";
import { Chivo } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const libre_franklin = Libre_Franklin({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-libre_franklin",
});
const chivo = Chivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-chivo",
});

export const metadata: Metadata = {
  title: "Nextstep",
  description: "Taking you Further",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={libre_franklin.variable + " " + chivo.variable}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
