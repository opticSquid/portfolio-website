import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Code, MailIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";

export default function LeftCard() {
  const skills = [
    { name: "react", color: "bg-cyan-500 w-2 h-2 rounded-full mr-2" },
    { name: "spring-boot", color: "bg-green-500 w-2 h-2 rounded-full mr-2" },
    { name: "javascript", color: "bg-yellow-500 w-2 h-2 rounded-full mr-2" },
    { name: "java", color: "bg-amber-500 w-2 h-2 rounded-full mr-2" },
    { name: "rest-api", color: "bg-emerald-500 w-2 h-2 rounded-full mr-2" },
    { name: "postman", color: "bg-orange-500 w-2 h-2 rounded-full mr-2" },
    { name: "git", color: "bg-red-500 w-2 h-2 rounded-full mr-2" },
    { name: "docker", color: "bg-blue-500 w-2 h-2 rounded-full mr-2" },
    { name: "microservices", color: "bg-lime-500 w-2 h-2 rounded-full mr-2" },
    { name: "mysql", color: "bg-purple-500 w-2 h-2 rounded-full mr-2" },
    { name: "mongodb", color: "bg-rose-500 w-2 h-2 rounded-full mr-2" },
  ];
  return (
    <div className="w-2/5">
      <Card className="mt-2 mx-1 border-2">
        <CardHeader className="pb-0">
          <div className="flex flex-row justify-between">
            <CardTitle className="text-xl">
              Soumalya
              <br />
              Bhattacharya
            </CardTitle>
            <CardDescription className="flex items-center">
              <code className="text-base">
                Software Engineer <br />
                Fullstack Developer [MERN, Java]
              </code>
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col">
          <section className="flex items-center justify-center">
            <Image
              src="/face2.jpg"
              alt="face Image"
              width={152}
              height={188}
              className="rounded-full object-contain"
            />
          </section>
          <Separator className="my-1" />
          <main className="mt-1">
            <div className="text-lg text-center">README</div>
            <section className="text-left">
              <div className="text-md">Skills</div>
              <div className="container text-center tex-sm">
                {skills.map((skill) => {
                  return (
                    <Badge
                      key={skill.name}
                      variant={"outline"}
                      className="mx-1 my-1 border-2 dark:border-primary-foreground"
                    >
                      <span className={skill.color} />
                      {skill.name}
                    </Badge>
                  );
                })}
              </div>
            </section>
            <section className="text-left">
              <div className="text-md">Socials</div>
              <div className="flex flex-row justify-center mb-1">
                <Button
                  variant={"outline"}
                  className="rounded-full border-primary-foreground mr-2"
                >
                  <Link
                    target="_blank"
                    href={
                      "https://www.linkedin.com/in/soumalya-bhattacharya-47b731165/"
                    }
                  >
                    <LinkedInLogoIcon className="text-primary" />
                  </Link>
                </Button>
                <Button
                  variant={"outline"}
                  className="rounded-full border-primary-foreground mr-2"
                >
                  <Link target="_blank" href={"https://github.com/opticSquid"}>
                    <GitHubLogoIcon className="text-primary" />
                  </Link>
                </Button>
                <Button
                  variant={"outline"}
                  className="rounded-full border-primary-foreground mr-2"
                >
                  <Link
                    target="_blank"
                    href={"https://developers.google.com/profile/u/soumalya"}
                  >
                    <Code className="text-primary" />
                  </Link>
                </Button>
              </div>
              <Link href={"mailto:soumalyabhattacharya6@gmail.com"}>
                <Button className="w-full rounded-lg">
                  <MailIcon className="mr-2" /> soumalyabhattacharya6@gmail.com
                </Button>
              </Link>
            </section>
          </main>
        </CardContent>
      </Card>
    </div>
  );
}
