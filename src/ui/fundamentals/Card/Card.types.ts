import type { Car } from "src/types"
import { ComponentPropsWithRef, ReactNode } from "react"
import { CardImageProps } from "./CardImage/CardImage.types"

export type CardBaseProps = {
  className?: string
} & CardImageProps

export type CardProps = CardBaseProps & Car & ComponentPropsWithRef<"article">
