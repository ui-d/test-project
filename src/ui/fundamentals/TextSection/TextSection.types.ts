import type { ReactNode, HTMLAttributes } from "react"
import type { Sizes } from "src/types"
import { HtmlAttributes } from "csstype"

export type TextSectionBaseProps = {
  size?: Sizes
  /** CSS classes. */
  className?: string
  /** Heading content */
  children: ReactNode
}

export type TextSectionProps = TextSectionBaseProps & HTMLAttributes<HTMLDivElement>
