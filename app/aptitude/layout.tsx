import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import { Chivo } from "next/font/google";
import { HomeIcon, LayersIcon } from "@radix-ui/react-icons";
import { AwardIcon, BookIcon, HeadphonesIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { CardTitle } from "@/components/ui/card";
import AptitudeSidebar from "./sidebar";

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
  title: "Aptitude",
  description: "Taking you Further",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex-1 flex">
      <AptitudeSidebar />
      <div className="flex-grow">{children}</div>
    </div>
  );
}
