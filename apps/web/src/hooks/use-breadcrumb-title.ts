"use client";

import { BreadcrumbContext } from "@/context/breadcrumb-context";
import { useContext, useEffect } from "react";

export function useBreadcrumbTitle(title: string) {
  const { setActiveTitle } = useContext(BreadcrumbContext);

  useEffect(() => {
    setActiveTitle(title);
    return () => setActiveTitle("");
  }, [title, setActiveTitle]);
}
