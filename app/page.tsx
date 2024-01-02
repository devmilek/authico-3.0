import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { LockIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <Link href="/" className="flex items-center text-xl font-bold">
        <LockIcon className="h-6 w-6 mr-2" />
        <span>Authico 3.0</span>
      </Link>
      <p className="text-sm text-muted-foreground mt-2">
        Make yout users feel safe with Authico 3.0.
      </p>
      <LoginButton>
        <Button className="mt-4">Sign in</Button>
      </LoginButton>
    </main>
  );
}
