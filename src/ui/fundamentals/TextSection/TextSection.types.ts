import type { ReactNode } from "react"
import { ComponentPropsWithRef } from "react"
import type { Sizes } from "src/types"

export type TextSectionBaseProps = {
  size?: Sizes
  /** CSS classes. */
  className?: string
  /** Heading content */
  children: ReactNode
}

export type TextSectionProps = TextSectionBaseProps & ComponentPropsWithRef<"div">
