import type { HTMLAttributes } from "react"

export type CardImageBaseProps = {
  src: string
  alt: string
  className?: string
  placeholder?: string
  width?: number
  height?: number
}

export type CardImageProps = CardImageBaseProps & HTMLAttributes<HTMLImageElement>
