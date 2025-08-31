import Image from "next/image";
import { type Asset, isImageAsset } from "@/sanity/types";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export type ProjectAssetProps = {
  asset: Asset;
  className?: string;
};

export function ProjectAsset({ asset, className }: ProjectAssetProps) {
  const baseClassName = "object-fit";

  return (
    <AspectRatio ratio={16 / 9}>
      {isImageAsset(asset.type) ? (
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
