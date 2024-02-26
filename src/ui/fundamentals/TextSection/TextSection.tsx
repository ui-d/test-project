import { twMerge } from "tailwind-merge"
import { TextSectionProps } from "./TextSection.types"

export const TextSection = (props: TextSectionProps) => {
  const { size = "md", children, className, ...domProps } = props
  const boxWidth = {
    sm: "w-2/3",
    md: "w-3/4",
    lg: "w-5/6",
  }
  return (
    <div {...domProps} className={twMerge(boxWidth[size], className)}>
      {children}
    </div>
  )
}
