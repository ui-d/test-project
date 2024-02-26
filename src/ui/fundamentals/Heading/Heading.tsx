import { Slot } from "@radix-ui/react-slot"
import { twMerge } from "tailwind-merge"
import { Sizes } from "src/types"
import type { HeadingProps } from "./Heading.types"

export const Heading = (props: HeadingProps) => {
  const { variant = "h1", size = "lg", weight = "normal", className, children, asChild = false, ...domProps } = props
  // Explicitly define the type for Comp to accommodate both Slot and native HTML elements
  const Comp = asChild ? Slot : (variant as keyof JSX.IntrinsicElements | React.ComponentType<any>)

  let fontSize: Record<Sizes, string> = {
    sm: "text-2xl",
    md: "text-3xl",
    lg: "text-5xl",
  }

  return (
    <Comp {...domProps} className={twMerge("text-dark", `font-${weight}`, fontSize[size], className)}>
      {children}
    </Comp>
  )
}
