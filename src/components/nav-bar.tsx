import { ModeToggle } from "./mode-toggle";
import { LanguageSwitch } from "@/components/language-switch";

export function NavBar() {
  return (
    <div className="flex items-center justify-end gap-1 py-4">
      <LanguageSwitch />
      <ModeToggle />
    </div>
  );
}
