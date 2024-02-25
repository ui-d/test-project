import { TextSectionProps } from "./TextSection.types"
import { twMerge } from "tailwind-merge"

export const TextSection = (props: TextSectionProps) => {
  const { size = "md", children, className, ...domProps } = props
  const boxWidth = {
    sm: "w-1/2",
    md: "w-3/4",
    lg: "w-5/6",
  }
  return (
    <div {...domProps} className={twMerge(boxWidth[size], className)}>
      {children}
    </div>
  )
}
