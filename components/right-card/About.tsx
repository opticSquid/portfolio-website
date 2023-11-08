import React, { useState } from "react";
import { Button } from "../ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

function About() {
  const [readMore, setReadMore] = useState(false);
  const handleReadMore = () => {
    setReadMore((prevState) => !prevState);
  };
  return (
    <>
      <section className="text-2xl font-light">
        <code className="text-4xl">Hello World!</code> <br />
        from&nbsp;
        <span className="text-4xl text-primary font-normal">Soumalya</span>,
        <br />
        <i className="text-lg font-thin">
          Tech Enthusiast & Software Developer
        </i>
      </section>
      <section className="grid grid-cols-1 font-base mt-2 text-slate-300 justify-start">
        <span className="text-left">
          I work in web technologies both frontend and backend. I create
          applications that can handle pretty much anything you throw at them.
          They scale with your busines and your ideas while maintaining their
          performance and security vulnerabilities as less as possible.
        </span>
        {readMore === false ? (
          <>
            <Button
              variant={"outline"}
              className="justify-self-center rounded-full border bg-card border-primary-foreground hover:border-primary"
              onClick={handleReadMore}
              size={"sm"}
            >
              <ChevronDown /> Read More
            </Button>
          </>
        ) : (
          <>
            <span>
              I began my journey in web technologies in April 2020, as a self
              taught developer starting from HTML, CSS walking my way through
              Git, React, Firebase, Express Js, Mongo Db and learning a ton in
              between while building projects for myself and doing a bit of free
              lancing side by side. While applying for Cognizant taught myself
              Java programming language from Youtube and lot of Google searches{" "}
              <span className="text-muted-foreground">
                (chatGPT was still not a thing🥲).
              </span>{" "}
              After going through the first round started to learn spring
              framework and topics under it like Spring MVC, Spring boot then
              slowly started to discover the world of microservices only to fall
              in love with it. Then I slowly started to dive deep in topics like
              service discovery, api gateway, load balancing, high availability,
              scaling and maintainability etc. Made quite a few projects to
              implement these things and understand better. Currently I&apos;m
              in a position where I can build quite a descent microservice based
              application that can handle real life loads and traffic without
              much problem while still keeping the data safe with authentication
              and authorization. Now I&apos;m focusing on topics like Reactive
              Programming and frameworks like Vert.x, Quarkus to gain more
              knowledge on how to better utilize computing resources while
              decreasing response time and deployment technologies like Docker
              Swarm, Kubernetes and Helm Charts to learn how the services are
              deployed in cloud.
            </span>
            <Button
              variant={"outline"}
              className="justify-self-center rounded-full bg-primary text-black hover:border-2 hover:border-primary-foreground"
              size={"sm"}
              onClick={handleReadMore}
            >
              <ChevronUp /> Read Less
            </Button>
          </>
        )}
      </section>
    </>
  );
}

export default About;
