import type { Sizes } from "src/types"
import type { ComponentPropsWithRef, ReactNode } from "react"

type ButtonBaseProps = {
  /** The size of the button */
  size?: Sizes
  /** The children of the button */
  children: ReactNode
  className?: string
  asChild?: boolean
}

export type ButtonProps = ButtonBaseProps & ComponentPropsWithRef<"button">
