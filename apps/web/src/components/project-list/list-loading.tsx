import { Skeleton } from "@/components/ui/skeleton";

export function ProjectListLoading() {
  const items = Array.from({ length: 2 });
  return (
    <div className="space-y-2">
      {items.map((_, index) => (
        <Skeleton key={index} className="h-6" />
      ))}
    </div>
  );
}
