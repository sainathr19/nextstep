import { CardTitle } from "@/components/ui/card";
import { HomeIcon, LayersIcon } from "@radix-ui/react-icons";
import { AwardIcon, BookIcon, HeadphonesIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const AptitudeSidebar = () => {
  return (
    <nav className="hidden sm:flex flex-col items-start px-4 py-5 text-lg font-medium shadow-xl border-r-2">
      <CardTitle className="text-center w-full py-3">Aptitude</CardTitle>
      <Link
        href="/aptitude"
        className="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary"
        prefetch={false}
      >
        <HomeIcon className="h-4 w-4" />
        Home
      </Link>
      <Link
        href="/aptitude/practise"
        className="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary"
        prefetch={false}
      >
        <LayersIcon className="h-4 w-4" />
        Practice Questions
      </Link>
      <Link
        href="/aptitude/tutorials"
        className="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary"
        prefetch={false}
      >
        <BookIcon className="h-4 w-4" />
        Tutorials
      </Link>
      <Link
        href="/aptitude/assessments"
        className="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary"
        prefetch={false}
      >
        <AwardIcon className="h-4 w-4" />
        Assessments
      </Link>
      <Link
        href="/aptitude/interviewprep"
        className="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary"
        prefetch={false}
      >
        <HeadphonesIcon className="h-4 w-4" />
        Interview Prep
      </Link>
    </nav>
  );
};

export default AptitudeSidebar;
