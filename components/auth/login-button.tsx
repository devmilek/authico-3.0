"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {
  const router = useRouter();
  const onClick = () => {
    if (mode === "redirect") {
      router.push("/login");
    }
  };

  if (mode === "modal") {
    return <div>TODO: create modal</div>;
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};

export default LoginButton;