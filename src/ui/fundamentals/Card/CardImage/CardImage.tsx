import Image from "next/image"
import { CardImageProps } from "./CardImage.types"

export const CardImage = (props: CardImageProps) => {
  const { className, ...domProps } = props
  return (
    <Image
      className={`relative ${className}`}
      placeholder="empty"
      src="/carimage.jpg"
      width={448}
      height={290}
      alt="Cars on the street"
      {...domProps}
    />
  )
}
