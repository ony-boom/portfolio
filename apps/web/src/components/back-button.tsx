"use client";

import { ComponentProps } from "react";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter, usePathname } from "@/i18n/navigation";

export function BackButton(props: BackButtonProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    const isInternalReferrer =
      document.referrer &&
      new URL(document.referrer).origin === window.location.origin;

    if (window.history.length > 1 && isInternalReferrer) {
      router.back();
    } else {
      const pathSegments = pathname.split("/").filter(Boolean);

      if (pathSegments.length > 1) {
        pathSegments.pop();
        const parentPath = "/" + pathSegments.join("/");
        router.push(parentPath);
      } else {
        router.push("/");
      }
    }
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
