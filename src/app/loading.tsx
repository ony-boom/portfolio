import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="with-noise bg-background text-foreground grid h-dvh place-items-center">
      <Loader className="animate-spin" />
    </div>
  );
}
