import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();
  return (
    <div>
      <div className="space-y-6">
        <div className="space-y-2">
          <h1>Ony</h1>
          <p className="text-muted-foreground">{t("Globals.jobTitle")}</p>
        </div>

        <p className="text-lg">
          {t.rich("Index.intro", {
            b: (chunks) => <span className="font-medium">{chunks}</span>,
          })}
        </p>
      </div>

      <Separator className="my-8" />
    </div>
  );
}
