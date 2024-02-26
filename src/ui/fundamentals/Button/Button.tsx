import type { ButtonProps } from "./Button.types"
import { Slot } from "@radix-ui/react-slot"
import { twMerge } from "tailwind-merge"
import { forwardRef } from "react"
import { Sizes } from "src/types"

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { asChild, size = "md", children, className, ...domProps } = props

  const Comp = asChild ? Slot : "button"

  const buttonSize: Record<Sizes, string> = {
    sm: "px-3 py-2 text-sm",
    md: "px-16 py-5 text-2xl",
    lg: "px-4 py-2 text-base",
  }

  return (
    <Comp
      {...domProps}
      ref={ref}
      className={twMerge("shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2", buttonSize[size], className)}
      {...domProps}
    >
      {children}
    </Comp>
  )
})
