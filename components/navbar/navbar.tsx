import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import RocketIcon from "@/public/icons/rocketicon";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 flex justify-between items-center text-white p-3 px-6 md:px-8">
      <Link href="/" className="flex items-center gap-2">
        <RocketIcon />
        <p className="text-xl font-bold tracking-wide">Nextstep</p>
      </Link>
      <section className="flex gap-14">
        <Link href="#">Jobs</Link>
        <Link href="#">Internships</Link>
        <Link href="#">Hackathons</Link>
        <Link href="#">Contests</Link>
        <Link href="#">Discussion</Link>
        <Link href="#">Courses</Link>
      </section>
      <section className="mx-2">
        <Button variant="secondary" className="px-5 h-max">
          Sign in
        </Button>
      </section>
    </nav>
  );
};

export default Navbar;
