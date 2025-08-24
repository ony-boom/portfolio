import { MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export default function Home() {
  const t = useTranslations();
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1>Ony</h1>
          <div className="text-muted-foreground flex items-center space-x-2">
            <p>{t("Globals.jobTitle")}</p>
            <p>&bull;</p>
            <p className="flex items-center gap-1">
              <MapPin className="size-4" />
              <span>Antananarivo/Madagascar</span>
            </p>
          </div>
        </div>

        <p className="text-lg">
          {t.rich("Index.intro", {
            b: (chunks) => <span className="font-medium">{chunks}</span>,
          })}
        </p>

        <Button asChild>
          <Link href="mailto:ony@ony.world" target="_blank">
            {t("Index.cta")}
          </Link>
        </Button>
      </div>

      <Separator />

      <div className="space-y-6">
        <h2>{t("Globals.projects")}</h2>
      </div>
    </div>
  );
}
