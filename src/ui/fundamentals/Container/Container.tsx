import { ContainerProps } from "./Container.types"

export const Container = (props: ContainerProps) => {
  const { children, size, className, ...domProps } = props
  const sizeClass = size ? `container-${size}` : ""

  return (
    <div className={`container ${sizeClass} ${className}`} {...domProps}>
      {children}
    </div>
  )
}
