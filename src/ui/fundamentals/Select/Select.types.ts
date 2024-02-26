import { ComponentPropsWithoutRef, ReactNode } from "react"

export type SelectBaseProps = {
  type?: "primary" | "secondary"
  className?: string
  children: ReactNode
}

export type SelectProps = SelectBaseProps & ComponentPropsWithoutRef<"div">
