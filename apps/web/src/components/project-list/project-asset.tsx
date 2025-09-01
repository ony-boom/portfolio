import Image from "next/image";
import { type ProjectAsset, isProjectImageAsset } from "@/sanity/types";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export type ProjectAssetProps = {
  asset: ProjectAsset;
  className?: string;
};

export function ProjectAsset({ asset, className }: ProjectAssetProps) {
  const baseClassName = "object-fit";

  return (
    <AspectRatio ratio={16 / 9}>
      {isProjectImageAsset(asset.type) ? (
        // FIXME: use sanity image hook, this will break
        <Image
          className={cn(baseClassName, className)}
          src={asset.url}
          alt=""
        />
      ) : (
        <video
          autoPlay
          muted
          loop
          className={cn(baseClassName, className)}
          src={asset.url}
        />
      )}
    </AspectRatio>
  );
}
