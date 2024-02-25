import Image from "next/image"
import { CardImageProps } from "./CardImage.types"

export const CardImage = (props: CardImageProps) => {
  const { className, src, alt, placeholder, width, height, ...domProps } = props
  return <Image className={`relative ${className}`} src={src} alt={alt} {...domProps} />
}
