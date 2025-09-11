import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="bg-background text-foreground grid h-[calc(100dvh-200px)] place-items-center">
      <Loader className="animate-spin" />
    </div>
  );
}
