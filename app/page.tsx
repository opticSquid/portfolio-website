"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect } from "react";
export default function Home() {
  const { setTheme } = useTheme();
  //TODO: continue here
  const skills = ["react", "spring-boot"];
  useEffect(() => {
    setTheme("dark");
  }, []);
  return (
    <div className="flex h-screen">
      <div className="w-2/5 overflow-hidden">
        <Card className="m-2">
          <CardHeader>
            <div className="flex flex-row justify-between">
              <CardTitle>
                Soumalya
                <br />
                Bhattacharya
              </CardTitle>
              <CardDescription className="flex items-center">
                <code>Software Engineer, Fullstack Developer [MERN, Java]</code>
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col">
            <section className="flex items-center justify-center">
              <Image
                src="/face2.jpg"
                alt="face Image"
                width={302}
                height={438}
                className="rounded-lg object-contain"
              />
            </section>
            <Separator className="my-4" />
            <main className="mt-2">
              <h1 className="text-4xl text-center">README</h1>
              <section className="mt-2 text-left">
                <h2 className="text-2xl">About</h2>
                <p className="container text-lg">
                  I'm a 2023 pass out B.Tech Graduate Engineer. I love working
                  with technology and building stuff either for myself or some
                  one else but at the end of the day if it makes a positive
                  impact count me in.
                </p>
              </section>
              <section className="mt-2 text-left">
                <h2 className="text-2xl py-2">Skills</h2>
                <ul className="container"></ul>
              </section>
            </main>
          </CardContent>
        </Card>
      </div>
      <div className="w-3/5 overflow-auto">
        <p>red</p>
      </div>
    </div>
  );
}
