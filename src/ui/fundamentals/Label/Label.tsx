import type { LabelProps } from "./Label.types"

export const Label = (props: LabelProps) => {
  const { children, className, ...domProps } = props
  return (
    <label className={className} {...domProps}>
      {children}
    </label>
  )
}
