import React from "react";
import { Badge } from "./ui/badge";

function Skills() {
  const skills = [
    { name: "react", color: "text-cyan-500" },
    { name: "spring-boot", color: "text-green-500" },
    { name: "javascript", color: "text-yellow-500" },
    { name: "java", color: "text-amber-500" },
    { name: "rest-api", color: "text-emerald-500" },
    { name: "postman", color: "text-orange-500" },
    { name: "git", color: "text-red-500" },
    { name: "docker", color: "text-blue-500" },
    { name: "microservices", color: "text-lime-500" },
  ];
  return (
    <section className="text-left">
      <div className="text-md">Skills</div>
      <div className="container text-center tex-sm border border-red-200">
        {skills.map((skill) => {
          return (
            <Badge
              key={skill.name}
              variant={"outline"}
              className="mx-1 my-1 border-4 dark:border-primary-foreground"
            >
              <span className={skill.color}></span>
              {skill.name}
            </Badge>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
