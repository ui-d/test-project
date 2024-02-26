import type { HTMLProps, ReactNode } from "react"
import type { Sizes } from "src/types"

type HeadingVariants = "h1" | "h2" | "h3" | "h4"

export type HeadingBaseProps = {
  /** Set heading variant which determinses the size.
   * @default h1
   */
  variant?: HeadingVariants
  /** Font size */
  size: Sizes
  /** CSS classes. */
  className?: string
  /** Heading content */
  children: ReactNode
  asChild?: boolean
}

export type HeadingProps = HeadingBaseProps & HTMLProps<HTMLHeadingElement>
