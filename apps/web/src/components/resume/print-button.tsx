"use client";

import { Printer } from "lucide-react";
import { Button } from "../ui/button";
import { ComponentProps } from "react";

export function PrintButton(props: ComponentProps<typeof Button>) {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <Button {...props} onClick={handlePrint}>
      <Printer />
    </Button>
  );
}
