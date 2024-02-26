import { ComponentPropsWithRef } from "react"
import type { Car } from "src/types"
import { CardImageProps } from "./CardImage/CardImage.types"

export type CardBaseProps = {
  className?: string
} & CardImageProps

export type CardProps = CardBaseProps & Car & ComponentPropsWithRef<"article">
