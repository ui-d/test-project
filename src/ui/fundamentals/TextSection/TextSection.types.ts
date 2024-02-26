import type { ReactNode, HTMLAttributes } from "react"
import type { Sizes } from "src/types"
import { ComponentPropsWithRef } from "react"

export type TextSectionBaseProps = {
  size?: Sizes
  /** CSS classes. */
  className?: string
  /** Heading content */
  children: ReactNode
}

export type TextSectionProps = TextSectionBaseProps & ComponentPropsWithRef<"div">
