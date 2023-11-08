"use client";
import LeftCard from "@/components/LeftCard";
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
      <div className="w-3/5 overflow-auto">
        <p>red</p>
      </div>
    </div>
  );
}
