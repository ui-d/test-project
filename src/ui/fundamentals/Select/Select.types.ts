import { ReactNode } from "react"

export type SelectProps = {
  type?: "primary" | "secondary"
  className?: string
  children: ReactNode
}
