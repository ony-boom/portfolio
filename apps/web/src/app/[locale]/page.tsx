import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ProjectList } from "@/components/project-list/suspensed-list";

export default function Home() {
  const t = useTranslations();

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1>Ony</h1>
          <p className="text-muted-foreground text-lg">
            {t("Globals.jobTitle")}
          </p>
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

      <div className="space-y-4">
        <h4 className="font-serif">{t("Globals.projects")}</h4>

        <ProjectList limit={1} />
      </div>

      <div className="space-y-4">
        <h4 className="font-serif">Link</h4>
      </div>
    </div>
  );
}
