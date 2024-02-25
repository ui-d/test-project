import type { HeadingProps } from "./Heading.types"
import { Slot } from "@radix-ui/react-slot"
import { twMerge } from "tailwind-merge"

export const Heading = (props: HeadingProps) => {
  const { variant = "h1", className, children, asChild = false, ...domProps } = props
  // Explicitly define the type for Comp to accommodate both Slot and native HTML elements
  const Comp = asChild ? Slot : (variant as keyof JSX.IntrinsicElements | React.ComponentType<any>)

  const fontSize = {
    h1: "text-5xl",
    h2: "text-4xl",
    h3: "text-3xl",
    h4: "text-2xl",
  }[variant]

  return (
    <Comp {...domProps} className={twMerge("font-bold, text-dark", fontSize, className)}>
      {children}
    </Comp>
  )
}
