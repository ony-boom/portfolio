import { Skeleton } from "@/components/ui/skeleton";

export function LoadingBlogList() {
  const items = Array.from({ length: 4 });
  return (
    <div className="space-y-2">
      {items.map((_, index) => (
        <div key={index} className="space-y-2">
          <Skeleton className="h-6"/>
        </div>
      ))}
    </div>
  );
}
