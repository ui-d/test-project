import type { ButtonProps } from "./Button.types"
import { Slot } from "@radix-ui/react-slot"
import { twMerge } from "tailwind-merge"
import { forwardRef } from "react"

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { asChild, size = "md", disabled, children, ...rest } = props

  const Comp = asChild ? Slot : "button"

  const buttonSize = {
    xs: "px-2.5 py-1.5 text-xs",
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-4 py-2 text-base",
    xl: "px-6 py-3 text-base",
  }[size]

  return (
    <Comp
      {...rest}
      disabled={disabled}
      className={twMerge(
        "font-medium",
        "border border-transparent",
        "rounded-md",
        "shadow-sm",
        "text-white",
        "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        buttonSize,
        disabled ? "cursor-not-allowed opacity-50" : "hover:bg-indigo-700"
      )}
    >
      {children}
    </Comp>
  )
})
