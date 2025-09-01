import { Breadcrumbs } from "./breadcrumbs";
import { ModeToggle } from "./mode-toggle";
import { LanguageSwitch } from "@/components/language-switch";

export function NavBar() {
  return (
    <nav className="bg-background with-noise sticky top-0 z-50 flex items-center justify-between py-4">
      <div>
        <Breadcrumbs />
      </div>
      <div className="flex items-center gap-1">
        <LanguageSwitch />
        <ModeToggle />
      </div>
    </nav>
  );
}
