import { ModeToggle } from "./mode-toggle";
import { LanguageSwitch } from "@/components/language-switch";

export function NavBar() {
  return (
    <nav className="bg-background with-noise sticky top-0 z-50 flex items-center justify-end gap-1 py-4">
      <LanguageSwitch />
      <ModeToggle />
    </nav>
  );
}
