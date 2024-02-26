import type { Car } from "src/types"
import { ComponentPropsWithRef } from "react"
import { CardImageProps } from "./CardImage/CardImage.types"

export type CardBaseProps = {
  className?: string
} & CardImageProps

export type CardProps = CardBaseProps & Car & ComponentPropsWithRef<"article">
