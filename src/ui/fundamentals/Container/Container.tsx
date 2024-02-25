import { ContainerProps } from "./Container.types"

export const Container = (props: ContainerProps) => {
  const { children, className, ...domProps } = props

  return (
    <div className={`container mx-auto ${className}`} {...domProps}>
      {children}
    </div>
  )
}
