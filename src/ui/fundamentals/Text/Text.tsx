import { TextProps } from "./Text.types"
import { twMerge } from "tailwind-merge"

export const Text = (props: TextProps) => {
  const { as: Component = "p", size = "sm", weight = "regular", className, children, ...rest } = props

  const textSize = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  }

  return (
    <Component className={twMerge(textSize[size], weight, className)} {...rest}>
      {children}
    </Component>
  )
}
