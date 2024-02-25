import type { HTMLProps, ReactNode } from "react"

type HeadingVariants = "h1" | "h2" | "h3" | "h4"

export type HeadingBaseProps = {
  /** Set heading variant which determinses the size.
   * @default h1
   */
  variant?: HeadingVariants
  /** CSS classes. */
  className?: string
  /** Heading content */
  children: ReactNode
  asChild?: boolean
}

export type HeadingProps = HeadingBaseProps & HTMLProps<HTMLHeadingElement>
