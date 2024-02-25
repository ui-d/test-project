import { HeadingProps } from "./Heading.types"
import { twMerge } from "tailwind-merge"

function filterDOMProps(props: HeadingProps) {
  const { variant, weight, align, lineHeight, color, transform, className, children, ...domProps } = props
  return domProps
}

export const Heading = (props: HeadingProps) => {
  const { variant = "h1", weight, align, lineHeight, transform, color, className, children } = props
  const Component = variant
  const domProps = filterDOMProps(props)

  const fontSize = {
    h1: "3xl",
    h2: "2xl",
    h3: "xl",
    h4: "lg",
  }[variant]

  return (
    <Component
      {...domProps}
      className={twMerge("font-bold", fontSize, weight, align, lineHeight, transform, color, className)}
    >
      {children}
    </Component>
  )
}
