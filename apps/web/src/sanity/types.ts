import { Locale } from "next-intl";
import { PortableText, SanityImageAssetDocument } from "next-sanity";
import { ComponentProps } from "react";

type PortableTextValue = ComponentProps<typeof PortableText>["value"];
type WithId<T> = T & { _id: string };

export type TranslatedField<T = string> = {
  _key: Locale;
  value: T;
};

export type ProjectImageAssetType = `image/${string}`;
export type ProjectVideoAssetType = `video/${string}`;
export type ProjectAsset = {
  type: ProjectImageAssetType | ProjectVideoAssetType;
  url: string;
};

export type ProjectLink = {
  title: string;
  url: string;
};

export type Project = WithId<{
  asset: ProjectAsset;
  links: ProjectLink[];
  name: TranslatedField[];
  description: TranslatedField<PortableTextValue>[];
}>;

export type Blog = WithId<{
  _createdAt: string;
  slug: string;
  title: string;
  cover: {
    asset: {
      url: string;
    };
    caption?: string;
  };
  content: PortableTextValue;
}>;

export type SingleBlog = Pick<Blog, "title" | "content" | "_createdAt"> & {
  cover: {
    asset: SanityImageAssetDocument;
    caption?: string;
  };
};

export function isProjectImageAsset(
  imageLike: string,
): imageLike is ProjectImageAssetType {
  return imageLike.startsWith("image/");
}

export function isProjectVideoAsset(
  videoLike: string,
): videoLike is ProjectVideoAssetType {
  return videoLike.startsWith("video/");
}
