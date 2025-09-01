"use client";

import { client } from "@/sanity/client";
import { SanityImageAssetDocument } from "next-sanity";
import { useNextSanityImage } from "next-sanity-image";
import Image, { ImageProps } from "next/image";

export function BlogCover({ imageData, ...props }: BlogCoverProps) {
  const imageProps = useNextSanityImage(client, imageData);

  return (
    <Image
      {...props}
      {...imageProps}
      placeholder="blur"
      alt={props.alt ?? ""}
      style={{ width: "100%", height: "100%" }}
      blurDataURL={imageData.asset.metadata.lqip}
    />
  );
}

export type BlogCoverProps = Omit<ImageProps, "src"> & {
  imageData: { asset: SanityImageAssetDocument };
};
