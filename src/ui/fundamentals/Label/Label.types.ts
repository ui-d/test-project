import type { HTMLAttributes, ReactNode } from "react"

type LabelBaseProps = {
  children: ReactNode
  className?: string
}

export type LabelProps = LabelBaseProps & HTMLAttributes<HTMLLabelElement>
