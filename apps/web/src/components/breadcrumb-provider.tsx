"use client";

import { ReactNode, useState } from "react";
import { BreadcrumbContext } from "@/context/breadcrumb-context";

export function BreadcrumbProvider({ children }: { children: ReactNode }) {
  const [activeTitle, setActiveTitle] = useState<string | null>(null);

  return (
    <BreadcrumbContext.Provider value={{ activeTitle, setActiveTitle }}>
      {children}
    </BreadcrumbContext.Provider>
  );
}
