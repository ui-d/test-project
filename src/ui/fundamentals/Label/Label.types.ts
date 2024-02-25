import type { ReactNode, HTMLAttributes } from "react"

type LabelBaseProps = {
  children: ReactNode
  className?: string
}

export type LabelProps = LabelBaseProps & HTMLAttributes<HTMLLabelElement>
