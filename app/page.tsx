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
      imageLink: "/hackathon.png",
    },
    {
      name: "Contests",
      title: "Ace the Coding Contests",
      description:
        "Sharpen your problem-solving skills and compete in the most prestigious coding contests. Earn recognition, win prizes, and boost your career prospects.",
      link: "/contests",
      imageLink: "/contests.png",
    },
    {
      name: "Certifications",
      title: "Earn Valuable Certifications",
      description:
        "Boost your skills and stand out in the job market by earning industry-recognized certifications. Explore a wide range of certification programs and take your career to new heights.",
      link: "/certifications",
      imageLink: "/certifications.png",
    },
    {
      name: "Internships",
      title: "Discover Exciting Internships",
      description:
        "Gain valuable hands-on experience and build your professional network through our curated internship opportunities. Explore a wide range of industries and kickstart your career.",
      link: "/internships",
      imageLink: "jobs.png",
    },
    {
      name: "Discussions",
      title: "Engage in Insightful Discussions",
      description:
        "Connect with a vibrant community of developers, students, and professionals in our discussion forums. Share your knowledge, ask questions, and stay up-to-date on the latest industry trends.",
      link: "/discussions",
      imageLink: "/discussion.png",
    },
  ];
  return (
    <div className="w-full">
      <section className="bg-slate-800 text-white justify-center h-max py-8 sm:px-[10vh] md:px-[17vh]">
        <div className="p-3 px-5 sm:p-5 h-[45vh] flex flex-col justify-center items-center text-center">
          <p className="text-[35px] sm:text-[40px] md:text-[50px] font-bold">
            Stay Informed,
            <br /> Seize Oppurtunities
          </p>
          <p className="text-[17px] w-3/4">
            NextStep is your one-stop platform for the latest updates on
            hackathons, coding contests, certifications, jobs, and internships.
            Never miss an opportunity to grow your skills and advance your
            career.
          </p>
          <div className="flex gap-6 mt-5">
            <Button variant="secondary">Find Oppurtunities</Button>
            <Button variant="secondary">Explore Resources</Button>
          </div>
        </div>
      </section>
      <div className="flex flex-col gap-4 px-5 md:px-14 my-4">
        {tabsList.map((tab, index) => {
          const dynamicClass =
            index % 2 === 0 ? "sm:order-first" : "sm:order-last";
          return (
            <section
              key={index}
              className="grid sm:grid-cols-2 justify-center w-full gap-3 p-3"
            >
              <div
                className={"flex justify-center items-center " + dynamicClass}
              >
                <img src={tab.imageLink} alt="img" className="w-full h-full" />
              </div>
              <div className="flex flex-col gap-4 justify-center items-center sm:px-14 sm:py-16">
                <p className="text-[1.3rem] sm:text-[2rem] font-bold">
                  {tab.title}
                </p>
                <p className="text-muted-foreground text-sm sm:text-base text-center">
                  {tab.description}
                </p>
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
