import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Separator } from "@/components/ui/separator";
import { ProjectList } from "@/components/project-list/suspensed-list";

export default function Home() {
  const t = useTranslations();

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-xl">Ony</h1>
          <p className="text-muted-foreground">{t("Globals.jobTitle")}</p>
        </div>

        <p>
          {t.rich("Index.intro", {
            b: (chunks) => <span className="font-medium">{chunks}</span>,
          })}
        </p>

        <p>
          {t.rich("Index.cta", {
            link: (chunks) => (
              <Link
                href="mailto:ony@rakoto27@gmail.com"
                className="font-medium"
                target="_blank"
              >
                {chunks}
              </Link>
            ),
          })}
        </p>
      </div>

      <Separator />

      <div className="space-y-6">
        <h4>{t("Globals.projects")}</h4>

        <ProjectList />
      </div>

      <Separator />

      <ul className="flex flex-wrap gap-4 p-0">
        {LINKS.map((link) => (
          <li key={link.name}>
            <Link
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : undefined}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const LINKS = [
  {
    name: "Blog",
    url: "/blog",
  },
  {
    name: "Resume",
    url: "/resume",
  },
  {
    name: "Email",
    url: "mailto:onyrakoto27@gmail.com",
  },
  {
    name: "Github",
    url: "https://github.com/ony-boom",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ony-boom/",
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/ony_lovasoa",
  },
];
