import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  const tabsList = [
    {
      name: "Hackathons",
      title: "Discover the Latest Hackathons",
      description:
        "Stay up-to-date with the hottest hackathons happening around the world. Expand your skills, build innovative projects, and connect with like-minded individuals.",
      link: "/hackathons",
    },
    {
      name: "Contests",
      title: "Ace the Coding Contests",
      description:
        "Sharpen your problem-solving skills and compete in the most prestigious coding contests. Earn recognition, win prizes, and boost your career prospects.",
      link: "/contests",
    },
    {
      name: "Certifications",
      title: "Earn Valuable Certifications",
      description:
        "Boost your skills and stand out in the job market by earning industry-recognized certifications. Explore a wide range of certification programs and take your career to new heights.",
      link: "/certifications",
    },
    {
      name: "Internships",
      title: "Discover Exciting Internships",
      description:
        "Gain valuable hands-on experience and build your professional network through our curated internship opportunities. Explore a wide range of industries and kickstart your career.",
      link: "/internships",
    },
    {
      name: "Discussions",
      title: "Engage in Insightful Discussions",
      description:
        "Connect with a vibrant community of developers, students, and professionals in our discussion forums. Share your knowledge, ask questions, and stay up-to-date on the latest industry trends.",
      link: "/discussions",
    },
  ];
  return (
    <div className="">
      <section className="bg-slate-800 text-white grid grid-cols-2 px-[15vh] py-[13vh]">
        <div className="p-5 text-left">
          <p className="text-[52px] font-bold">
            Stay Informed,
            <br /> Seize Oppurtunities
          </p>
          <p className="text-lg">
            NextStep is your one-stop platform for the latest updates on
            hackathons, coding contests, certifications, jobs, and internships.
            Never miss an opportunity to grow your skills and advance your
            career.
          </p>
          <div className="flex gap-6 my-4">
            <Button variant="secondary">Explore contests</Button>
            <Button variant="secondary">Find Hackathons</Button>
          </div>
        </div>
        <div className="flex items-center justify-center">Image</div>
      </section>
      <div className="flex flex-col gap-4 px-14 my-4">
        {tabsList.map((tab, index) => {
          const dynamicClass =
            index % 2 === 0 ? "flex-row" : "flex-row-reverse";
          return (
            <section
              key={index}
              className={
                "flex justify-center  px-8 h-[55vh] w-full " + dynamicClass
              }
            >
              <div className="flex justify-center items-center w-1/2">
                Image
              </div>
              <div className="flex flex-col gap-3 justify-center w-1/2 px-5">
                <p className="text-[2rem] font-bold">{tab.title}</p>
                <p className="text-muted-foreground">{tab.description}</p>
                <Button
                  variant="secondary"
                  className="bg-blue-600 text-white w-max"
                >
                  {"Explore " + tab.name}
                </Button>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
