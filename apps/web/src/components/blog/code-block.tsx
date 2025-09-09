"use client";

import { highlight } from "@/lib/shiki";
import { useTheme } from "next-themes";
import { JSX, useEffect, useRef, useState } from "react";
import { type BundledLanguage } from "shiki/bundle/web";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";
import { Clipboard as Copy } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export function CodeBlock({
  initial,
  filename,
  code,
  language,
}: CodeBlockProps) {
  const { theme } = useTheme();
  const [nodes, setNodes] = useState(initial);
  const [openPopover, setOpenPopover] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    void highlight(code, language as BundledLanguage, theme ?? "light").then(
      setNodes,
    );
  }, [theme, code, language]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setOpenPopover(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => setOpenPopover(false), 1500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
      setOpenPopover(false);
    }
  };

  return nodes ? (
    <div className="rounded-md border font-mono">
      <div className="flex items-center justify-between border-b px-4 py-2">
        <p className="text-muted-foreground font-mono text-sm">{filename}</p>

        <Popover onOpenChange={setOpenPopover} open={openPopover} modal={false}>
          <PopoverTrigger asChild>
            <Button
              onClick={handleCopy}
              variant="ghost"
              size="icon"
              className="text-muted-foreground"
              aria-label="Copy code"
            >
              <Copy />
            </Button>
          </PopoverTrigger>
          <PopoverContent side="left" className="w-max p-2">
            <p className="text-muted-foreground text-xs">
              Copied to clipboard!
            </p>
          </PopoverContent>
        </Popover>
      </div>

      <div className="code-block overflow-auto p-4">{nodes}</div>
    </div>
  ) : (
    <Skeleton className="h-32 w-full rounded-md" />
  );
}

export type CodeBlockProps = {
  code: string;
  language: string;
  filename: string;
  initial?: JSX.Element;
};
