import type { HTMLProps, ReactNode } from "react"

type HeadingVariants = "h1" | "h2" | "h3" | "h4"

export type HeadingBaseProps = {
  /** Set heading variant which determinses the size.
   * @default h1
   */
  variant?: HeadingVariants
  /** Font weight */
  weight?: "normal" | "bold"
  /** Text align */
  align?: "left" | "center" | "right"
  /** Line height */
  lineHeight?: "none" | "tight" | "normal" | "loose"
  /** Text transform */
  transform?: "none" | "uppercase" | "lowercase" | "capitalize"
  /** Text color */
  color?: string
  /** CSS classes. */
  className?: string
  /** Heading content */
  children: ReactNode
  asChild?: boolean
}

export type HeadingProps = HeadingBaseProps & HTMLProps<HTMLHeadingElement>
