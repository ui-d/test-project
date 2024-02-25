import type { Sizes } from "../../../types"

type TextBaseProps = {
  /** Font size */
  size?: Sizes
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
  className?: string
  children?: React.ReactNode
}

export type TextProps<T extends React.ElementType = "p"> = TextBaseProps & {
  /** Element */
  as?: T
}
