import { Locale } from "next-intl";
import { PortableText } from "next-sanity";
import { ComponentProps } from "react";

type PortableTextValue = ComponentProps<typeof PortableText>["value"];
type WithId<T> = T & { _id: string };

export type TranslatedField<T = string> = {
  _key: Locale;
  value: T;
};

export type ImageAssetType = `image/${string}`;
export type VideoAssetType = `video/${string}`;
export type Asset = {
  type: ImageAssetType | VideoAssetType;
  url: string;
};

export type ProjectLink = {
  title: string;
  url: string;
};

export type Project = WithId<{
  asset: Asset;
  links: ProjectLink[];
  name: TranslatedField[];
  description: TranslatedField<PortableTextValue>[];
}>;

export function isImageAsset(imageLike: string): imageLike is ImageAssetType {
  return imageLike.startsWith("image/");
}

export function isVideoAsset(videoLike: string): videoLike is VideoAssetType {
  return videoLike.startsWith("video/");
}
