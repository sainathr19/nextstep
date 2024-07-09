import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import RocketIcon from "@/public/icons/rocketicon";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ChevronRightIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator";

const Navbar = () => {
  const MenuItems = [
    {
      Name: "Oppurtunities",
      Linkto: "/oppurtunities",
    },
    {
      Name: "Hackathons",
      Linkto: "/hackathons",
    },
    {
      Name: "Contests",
      Linkto: "/contests",
    },
    {
      Name: "Aptitude",
      Linkto: "/aptitude",
    },
    {
      Name: "Discussions",
      Linkto: "/discussions",
    },
    {
      Name: "Courses",
      Linkto: "/courses",
    },
  ];
  return (
    <nav className="bg-slate-800 flex justify-between items-center text-white p-3 px-6 md:px-8 w-full">
      <Link href="/" className="flex items-center gap-2">
        <RocketIcon />
        <p className="text-xl font-bold tracking-wide">Nextstep</p>
      </Link>
      <section className="gap-14 hidden md:flex">
        <Link href="/oppurtunities">Oppurtunities</Link>
        <Link href="/hackathons">Hackathons</Link>
        <Link href="/contests">Contests</Link>
        <Link href="/aptitude">Aptitude</Link>
        <Link href="/discussions">Discussion</Link>
        <Link href="#">Courses</Link>
      </section>
      <section className="mx-2 hidden sm:flex">
        <Button variant="secondary" className="px-5 h-max">
          Sign in
        </Button>
      </section>
      <section className="sm:hidden">
        <Sheet>
          <SheetTrigger>
            <HamburgerMenuIcon height={28} width={28} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>NextStep Network</SheetTitle>
              <SheetDescription>
                <section className="flex flex-col py-3">
                  {MenuItems.map(({ Linkto, Name }) => {
                    return (
                      <Link
                        key={Name}
                        href={Linkto}
                        className="w-full text-black text-lg text-left p-2 flex justify-between items-center"
                      >
                        {Name}
                        <ChevronRightIcon height={20} width={20} />
                      </Link>
                    );
                  })}
                </section>
              </SheetDescription>
            </SheetHeader>
            <Separator />
            <section className=" flex gap-10 justify-center py-3 font-bold">
              <Link href="/auth/signin">Sign In</Link>

              <Link href="/auth/signup">Sign Up</Link>
            </section>
          </SheetContent>
        </Sheet>
      </section>
    </nav>
  );
};

export default Navbar;
