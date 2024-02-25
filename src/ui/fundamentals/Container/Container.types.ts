import type { Sizes } from "src/types"
import { HTMLAttributes } from "react"

type ContainerBaseProps = {
  children: React.ReactNode
  className?: string
  size?: Sizes
}

export type ContainerProps = ContainerBaseProps & HTMLAttributes<HTMLDivElement>
