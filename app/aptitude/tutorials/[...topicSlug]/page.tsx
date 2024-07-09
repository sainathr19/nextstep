"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
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
import { useParams } from "next/navigation";
import React from "react";

const TutorialPage = () => {
  const params = useParams();
  const TopicSlug = params.topicSlug;
  return (
    <Card className="flex-1 border-none outline-none">
      <CardHeader>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/aptitude">Aptitude</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/aptitude/tutorials">
                Tutorials
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Numbers</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <CardTitle>Numbers</CardTitle>
      </CardHeader>
      <CardContent>
        <iframe
          className="w-full h-[50vh] sm:h-[65vh]"
          src="https://www.youtube.com/embed/vsBpWgNYjtQ?si=eB1uSV-pf-TMa09d"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </CardContent>
      <CardFooter>
        <Link
          href={"/aptitude/practise/" + TopicSlug}
          className="flex items-center gap-4"
        >
          <CardTitle>Practise Questions</CardTitle>
          <ChevronRightIcon />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TutorialPage;
