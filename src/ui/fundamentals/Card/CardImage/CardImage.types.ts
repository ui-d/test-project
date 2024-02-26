import { PlaceholderValue } from "next/dist/shared/lib/get-img-props"
import type { ComponentPropsWithoutRef } from "react"

export type CardImageBaseProps = {
  src?: string
  alt?: string
  className?: string
  placeholder?: PlaceholderValue
  width?: number
  height?: number
}

export type CardImageProps = CardImageBaseProps & ComponentPropsWithoutRef<"img">
