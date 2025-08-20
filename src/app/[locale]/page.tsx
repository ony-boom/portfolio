import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="py-12">
      <div className="space-y-4">
        <h1>Hi, I&#39;m Ony. I bring ideas to life through code.</h1>

        <p className="text-lg">
          Welcome to my digital garden, where I share insights on software
          development and the things I&#39;m passionate about. Explore my
          projects and discover how I blend creativity with technical know-how,
          all with my personal touch.
        </p>

        <Button size="lg" variant="default">
          Get in touch
        </Button>
      </div>

      <Separator className="my-8" />
    </div>
  );
}
