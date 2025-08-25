import { TranslatedField } from "@/sanity/types";
import { type Locale } from "next-intl";
import { builder } from "@/sanity/client";
import { SanityReference } from "next-sanity";

export function getTranslationFromTranslatedField(
  fields: TranslatedField[],
  language: Locale,
) {
  return fields.find((field) => field._key === language)!.value;
}

export function urlFor(source: SanityReference) {
  return builder.image(source);
}
