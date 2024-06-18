import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white flex justify-between px-6 md:px-8 py-3">
      <section>&copy; 2024 NextStep. All rights reserved.</section>
      <section className="flex gap-5">
        <Link href="/">Terms of Service</Link>
        <Link href="/">Contact</Link>
      </section>
    </footer>
  );
};

export default Footer;
