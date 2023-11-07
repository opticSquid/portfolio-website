"use client";
import LeftCard from "@/components/LeftCard";
import RightCard from "@/components/RightCard";
import { useTheme } from "next-themes";
import { useEffect } from "react";
export default function Home() {
  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme("dark");
  }, []);
  return (
    <div className="flex h-screen">
      <LeftCard />
      <RightCard />
    </div>
  );
}
