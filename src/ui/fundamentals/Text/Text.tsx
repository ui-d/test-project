import { TextProps } from "./Text.types"
import { twMerge } from "tailwind-merge"

export const Text = (props: TextProps) => {
  const { as: Component = "p", size = "sm", weight = "regular", className, children, ...domProps } = props

  const textSize = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  }

  return (
    <Component className={twMerge("text-dark", textSize[size], weight, className)} {...domProps}>
      {children}
    </Component>
  )
}
