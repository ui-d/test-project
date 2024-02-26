import { Slot } from "@radix-ui/react-slot"
import { forwardRef } from "react"
import { twMerge } from "tailwind-merge"
import { Sizes } from "src/types"
import type { ButtonProps } from "./Button.types"

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
      className={twMerge(
        "block text-center shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 xl:inline-block",
        buttonSize[size],
        className
      )}
      {...domProps}
    >
      {children}
    </Comp>
  )
})

Button.displayName = "Button"
