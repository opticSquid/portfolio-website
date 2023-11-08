import {
  BriefcaseIcon,
  FolderGit2Icon,
  GraduationCapIcon,
  User2Icon,
} from "lucide-react";
import { ReactNode } from "react";
import { Badge } from "../ui/badge";
import About from "./About";
import Education from "./Education";
const SectionIndicators = ({
  icon,
  name,
}: {
  icon: ReactNode;
  name: string;
}) => (
  <Badge
    variant={"outline"}
    className="mt-4 mb-2 gap-1 py-1 border dark:border-primary"
    id={name}
  >
    {icon}
    <span className="font-normal tracking-wide">{name}</span>
  </Badge>
);
function RightCardMainContent() {
  return (
    <div className="w-full">
      <SectionIndicators
        icon={<User2Icon strokeWidth={1} size={16} />}
        name="About"
      />
      <About />
      <SectionIndicators
        icon={<GraduationCapIcon strokeWidth={1} size={16} />}
        name="Education"
      />
      <Education />
      <SectionIndicators
        icon={<BriefcaseIcon strokeWidth={1} size={16} />}
        name="Work History"
      />
      <SectionIndicators
        icon={<FolderGit2Icon strokeWidth={1} size={16} />}
        name="Projects"
      />
    </div>
  );
}

export default RightCardMainContent;
