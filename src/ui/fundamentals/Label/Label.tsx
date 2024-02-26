import { twMerge } from "tailwind-merge"
import type { LabelProps } from "./Label.types"

export const Label = (props: LabelProps) => {
  const { children, className, ...domProps } = props
  return (
    <label className={twMerge("text-xl", className)} {...domProps}>
      {children}
    </label>
  )
}
