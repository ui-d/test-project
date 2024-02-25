import { HTMLAttributes } from "react"

type ContainerBaseProps = {
  children: React.ReactNode
  className?: string
}

export type ContainerProps = ContainerBaseProps & HTMLAttributes<HTMLDivElement>
