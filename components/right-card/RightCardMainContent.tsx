import { User2Icon } from "lucide-react";
import { ReactNode } from "react";
import { Badge } from "../ui/badge";
import About from "./About";
const SectionIndicators = ({
  icon,
  name,
}: {
  icon: ReactNode;
  name: string;
}) => (
  <Badge
    variant={"outline"}
    className="mb-2 gap-1 py-1 border dark:border-primary"
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
    </div>
  );
}

export default RightCardMainContent;
