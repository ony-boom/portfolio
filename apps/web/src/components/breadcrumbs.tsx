"use client";

import { cn } from "@/lib/utils";
import { ChevronRight, Home } from "lucide-react";
import { usePathname, Link } from "@/i18n/navigation";
import { Fragment, useContext, useMemo } from "react";
import { BreadcrumbContext } from "@/context/breadcrumb-context";

const DisplayText = ({ text }: { text: string }) => {
  return (
    <p
      style={{ fontWeight: "inherit" }}
      title={text}
      className="animate-fade-in -mt-px max-w-56 truncate text-inherit"
    >
      {text}
    </p>
  );
};

export function Breadcrumbs() {
  const { activeTitle } = useContext(BreadcrumbContext);
  const path = usePathname();

  const paths = useMemo(() => {
    const splittedPath = path.split("/").filter(Boolean);
    if (splittedPath.length > 0) {
      splittedPath.unshift("~");
    }
    return splittedPath;
  }, [path]);

  return (
    <ul className="text-muted-foreground flex items-center gap-2 p-0 font-mono text-sm">
      {paths.map((segment, index) => {
        const active = index === paths.length - 1;
        const href =
          index === 0 ? "/" : `/${paths.slice(1, index + 1).join("/")}`;
        const displayText = active && activeTitle ? activeTitle : segment;

        return (
          <Fragment key={index}>
            <li
              className={cn("transition-colors", {
                "hover:text-foreground": !active,
                "text-foreground font-medium": active,
              })}
            >
              {active ? (
                <span className="flex cursor-default items-center">
                  {index === 0 ? (
                    <Home size={14} />
                  ) : (
                    <DisplayText text={displayText} />
                  )}
                </span>
              ) : (
                <Link
                  href={href}
                  className="flex items-center !no-underline hover:underline"
                >
                  {index === 0 ? (
                    <Home size={14} />
                  ) : (
                    <DisplayText text={displayText} />
                  )}
                </Link>
              )}
            </li>
            {index < paths.length - 1 && (
              <li>
                <ChevronRight size={14} />
              </li>
            )}
          </Fragment>
        );
      })}
    </ul>
  );
}
