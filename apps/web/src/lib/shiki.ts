import type { JSX } from "react";
import { Fragment } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { codeToHast, type BundledLanguage } from "shiki";
import { transformerNotationHighlight } from "@shikijs/transformers";

export async function highlight(
  code: string,
  lang: BundledLanguage,
  theme: string,
) {
  const out = await codeToHast(code, {
    lang,
    transformers: [transformerNotationHighlight()],
    theme: theme == "dark" ? "kanagawa-dragon" : "kanagawa-lotus",
  });

  return toJsxRuntime(out, {
    jsx,
    jsxs,
    Fragment,
  }) as JSX.Element;
}
