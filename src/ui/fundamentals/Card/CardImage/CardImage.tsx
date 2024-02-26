import Image from "next/image"
import { CardImageProps } from "./CardImage.types"

export const CardImage = (props: CardImageProps) => {
  const { className, src, alt, placeholder, width, height, ...domProps } = props
  return (
    <Image
      className={`relative ${className}`}
      placeholder={placeholder}
      src="/carimage.jpg"
      width={400}
      height={100}
      alt="Cars on the street"
      {...domProps}
    />
  )
}
