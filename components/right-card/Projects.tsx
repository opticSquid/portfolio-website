import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Card, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

function Projects() {
  return (
    <div className="border border-secondary hover:border-primary rounded-lg p-2">
      <div className="text-2xl text-primary">Microservices</div>
      <p className="mt-4 font-normal text-slate-500">
        In these projects I have used microservices design pattern to structure
        the backend of the app. This design helps me to individually work on
        certain parts of the application without affecting other parts. It
        improves maintainability of a large application. It also makes the
        application more resillient because if a service goes down for some
        reason only a certain part of the application will stop working but the
        other services will keep working as usual. These are some of the major
        benefits while there are other benefits also in terms of scaling and
        cost effectiveness in modern cloud environemnts.
      </p>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Projects</AccordionTrigger>
          <AccordionContent></AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Technologies Used</AccordionTrigger>
          <AccordionContent></AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Projects;
