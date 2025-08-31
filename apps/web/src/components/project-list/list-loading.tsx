import { Skeleton } from "@/components/ui/skeleton";

export function ProjectListLoading() {
  const items = Array.from({ length: 2 });
  return (
    <div className="space-y-8">
      {items.map((_, index) => (
        <div key={index} className="space-y-2">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-12"/>
        </div>
      ))}
    </div>
  );
}
