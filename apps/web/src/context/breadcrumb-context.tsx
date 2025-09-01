"use client";

import { createContext } from "react";

export const BreadcrumbContext = createContext<{
  setActiveTitle: (title: string) => void;
  activeTitle: string | null;
}>({
  setActiveTitle: () => {},
  activeTitle: null,
});
