import type { ButtonProps } from "./Button.types"
import { Slot } from "@radix-ui/react-slot"
import { twMerge } from "tailwind-merge"
import { forwardRef } from "react"

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { asChild, size = "md", children, className, ...domProps } = props

  const Comp = asChild ? Slot : "button"

  const buttonSize = {
    xs: "px-2.5 py-1.5 text-xs",
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-4 py-2 text-base",
    xl: "px-6 py-3 text-base",
  }

  return (
    <Comp
      {...domProps}
      ref={ref}
      className={twMerge(
        "block shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2",
        buttonSize[size],
        className
      )}
      {...domProps}
    >
      {children}
    </Comp>
  )
})
