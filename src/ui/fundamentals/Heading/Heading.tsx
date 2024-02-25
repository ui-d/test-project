import type { HeadingProps } from "./Heading.types"
import { Slot } from "@radix-ui/react-slot"
import { twMerge } from "tailwind-merge"

function filterDOMProps(props: HeadingProps) {
  const { variant, weight, align, lineHeight, color, transform, className, children, asChild, ...domProps } = props
  return domProps
}

export const Heading = (props: HeadingProps) => {
  const { variant = "h1", weight, align, lineHeight, transform, color, className, children, asChild } = props
  // Explicitly define the type for Comp to accommodate both Slot and native HTML elements
  const Comp = asChild ? Slot : (variant as keyof JSX.IntrinsicElements | React.ComponentType<any>)

  const domProps = filterDOMProps(props)

  const fontSize = {
    h1: "text-5xl",
    h2: "text-4xl",
    h3: "text-3xl",
    h4: "text-2xl",
    display: "text-6xl",
  }[variant]

  return (
    <Comp
      {...domProps}
      className={twMerge("font-bold", fontSize, weight, align, lineHeight, transform, color, className)}
    >
      {children}
    </Comp>
  )
}
