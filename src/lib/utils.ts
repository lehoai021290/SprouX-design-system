import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

/**
 * Extended tailwind-merge that recognizes SprouX foundation spacing tokens.
 *
 * Without this, twMerge doesn't know that `p-3xs`, `p-2xs`, `p-xs`, `p-sm`,
 * `p-md`, `p-lg`, `p-xl`, `p-2xl`, `p-3xl`, `p-4xl` are padding utilities
 * and would fail to resolve conflicts (e.g. `cn("p-md", "p-0")` keeps both).
 */
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      spacing: ["0", "4xs", "3xs", "2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "size-xxxs", "size-xxs", "size-xs", "size-sm", "size-md", "size-lg", "size-xl", "size-xxl", "size-xxxl"],
    },
    classGroups: {
      "font-size": [
        {
          typo: [
            "heading-1", "heading-2", "heading-3", "heading-4",
            "paragraph-xl", "paragraph-xl-medium", "paragraph-xl-semibold",
            "paragraph-lg", "paragraph-lg-medium", "paragraph-lg-semibold",
            "paragraph-base", "paragraph-base-medium", "paragraph-base-semibold",
            "paragraph-sm", "paragraph-sm-medium", "paragraph-sm-semibold",
            "paragraph-xs", "paragraph-xs-medium", "paragraph-xs-semibold",
            "paragraph-2xs", "paragraph-2xs-medium", "paragraph-2xs-semibold",
            "monospaced",
          ],
        },
      ],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
