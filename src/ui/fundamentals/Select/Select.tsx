import { SelectProps } from "./Select.types"

export const Select = (props: SelectProps) => {
  const { type, children, ...domProps } = props
  return (
    <select
      {...domProps}
      className="focus:ring-lime rounded-md border border-gray-300 bg-white px-4 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-2"
    >
      {children}
      {type}
    </select>
  )
}
