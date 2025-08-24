"use client";

import { LampDesk } from "lucide-react";
import { ComponentProps } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import useSound from "use-sound";

export function ModeToggle(props: ModeToggleProps) {
  const { setTheme, theme } = useTheme();
  const [play] = useSound("/audio/light-switch.mp3", { volume: 0.1 });

  const handleThemeChange = () => {
    play();
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      {...props}
      size="icon"
      variant="ghost"
      onClick={handleThemeChange}
      className="text-muted-foreground"
    >
      <LampDesk className="rotate-y-180" />
    </Button>
  );
}

export type ModeToggleProps = ComponentProps<typeof Button>;
