import type { ComponentPropsWithoutRef } from "react"
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props"

export type CardImageBaseProps = {
  src?: string
  alt?: string
  className?: string
  placeholder?: PlaceholderValue
  width?: number
  height?: number
}

export type CardImageProps = CardImageBaseProps & ComponentPropsWithoutRef<"img">
