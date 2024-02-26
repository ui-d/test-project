import type { ComponentPropsWithoutRef } from "react"

export type CardImageBaseProps = {
  src?: string
  alt?: string
  className?: string
  width?: number
  height?: number
}

export type CardImageProps = CardImageBaseProps & ComponentPropsWithoutRef<"img">
