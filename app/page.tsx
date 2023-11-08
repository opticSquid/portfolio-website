"use client";
import LeftCard from "@/components/LeftCard";
import RightCard from "@/components/right-card/RightCard";
import { useTheme } from "next-themes";
import { useEffect } from "react";
export default function Home() {
  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme("dark");
  }, []);
  return (
    <div className="flex flex-row gap-2">
      <LeftCard />
      <RightCard />
    </div>
  );
}
