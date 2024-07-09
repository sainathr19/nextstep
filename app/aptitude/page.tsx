import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

const AptitudeHomePage = () => {
  const AptitudeTopics = [
    {
      name: "Boats and Streams",
      slug: "boats-and-streams",
    },
    {
      name: "Permutations and Combnations",
      slug: "permutations-and-combinations",
    },
    {
      name: "Odd man Out series",
      slug: "odd-man-out-series",
    },
    {
      name: "Time and Work",
      slug: "time-and-work",
    },
    {
      name: "Trains",
      slug: "trains",
    },
    {
      name: "Profit and Loss",
      slug: "profit-and-loss",
    },
    {
      name: "Ages",
      slug: "ages",
    },
    {
      name: "Propability",
      slug: "probability",
    },
    {
      name: "Volumes and Surface Area",
      slug: "volumes-and-surfaces",
    },
    {
      name: "Clock",
      slug: "clock",
    },
  ];
  return (
    <Card className="flex-auto">
      <CardHeader>
        <CardTitle>Aptitude</CardTitle>
        <CardDescription>
          Explore various aptitude topics with video tutorials and formula
          explanations.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {AptitudeTopics.map((topic) => {
          return (
            <Link href={"/aptitude/tutorials/" + topic.slug} key={topic.slug}>
              <Card className="flex items-center justify-between h-[13vh]">
                <CardHeader>
                  <CardTitle>{topic.name}</CardTitle>
                </CardHeader>
                <section className="h-full flex items-center px-3">
                  <ChevronRightIcon height={25} width={25} />
                </section>
              </Card>
            </Link>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default AptitudeHomePage;
