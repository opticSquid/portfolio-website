import {
  AwardIcon,
  BriefcaseIcon,
  FolderGit2Icon,
  GraduationCapIcon,
  User2Icon,
} from "lucide-react";
import { ReactNode } from "react";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
interface buttonProps {
  icon: ReactNode;
  tooltip: string;
}
const NavButtons = ({ icon, tooltip }: buttonProps) => {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={"outline"}
            className="hover:bg-primary hover:text-black"
          >
            {icon}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
function RightCard() {
  return (
    <div className="w-3/5 overflow-auto mt-2 flex flex-row">
      <div className="w-full">hello</div>
      <div className="w-auto flex flex-col align-middle justify-center gap-2">
        <NavButtons icon={<User2Icon />} tooltip="About" />
        <NavButtons icon={<GraduationCapIcon />} tooltip="Education" />
        <NavButtons icon={<BriefcaseIcon />} tooltip="Work History" />
        <NavButtons icon={<FolderGit2Icon />} tooltip="Projects" />
      </div>
    </div>
  );
}

export default RightCard;
