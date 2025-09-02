"use client";

import { ComponentProps } from "react";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter, usePathname } from "@/i18n/navigation";

export function BackButton(props: BackButtonProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  const isAtRoot = pathname === "/";

  return (
    !isAtRoot && (
      <Button
        {...props}
        onClick={handleClick}
        variant="ghost"
        size="icon"
        aria-label="Go back"
      >
        <ArrowLeft />
      </Button>
    )
  );
}

export type BackButtonProps = ComponentProps<typeof Button>;
