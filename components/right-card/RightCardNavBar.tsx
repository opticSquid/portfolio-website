import {
  BriefcaseIcon,
  FolderGit2Icon,
  GraduationCapIcon,
  User2Icon,
} from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
function RightCardNavBar() {
  return (
    <div className="h-screen w-auto flex flex-col align-middle justify-center gap-2">
      <NavButtons icon={<User2Icon />} tooltip="About" />
      <NavButtons icon={<GraduationCapIcon />} tooltip="Education" />
      <NavButtons icon={<BriefcaseIcon />} tooltip="Work History" />
      <NavButtons icon={<FolderGit2Icon />} tooltip="Projects" />
    </div>
  );
}

export default RightCardNavBar;
interface buttonProps {
  icon: ReactNode;
  tooltip: string;
}
const NavButtons = ({ icon, tooltip }: buttonProps) => {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={`#${encodeURI(tooltip)}`}>
            <Button
              variant={"outline"}
              className="hover:bg-primary hover:text-black"
            >
              {icon}
            </Button>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
