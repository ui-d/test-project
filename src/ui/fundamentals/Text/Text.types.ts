import type { Sizes } from "src/types"

type TextBaseProps = {
  /** Set text variant which determinses the size
   * @default p
   */
  /** Font size */
  size?: Sizes
  /** Font weight */
  weight?: "normal" | "bold"
  className?: string
  children?: React.ReactNode
}

export type TextProps<T extends React.ElementType = "p"> = TextBaseProps & {
  /** Element */
  as?: T
}
