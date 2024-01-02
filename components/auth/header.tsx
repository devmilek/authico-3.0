import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { LockIcon } from "lucide-react";

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center text-center">
      <div className="flex items-center">
        <LockIcon className="h-6 w-6 mr-2" />
        <h1 className={cn("text-3xl font-semibold")}>Authico 3.0</h1>
      </div>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
