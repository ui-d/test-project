"use client"

import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons"
import * as Select from "@radix-ui/react-select"
import { redirect } from "next/navigation"
import { twMerge } from "tailwind-merge"
import { SelectProps } from "./Select.types"

export const SelectField = (props: SelectProps) => {
  const { className, ...domProps } = props

  function handleCategoryChange(value: string) {
    redirect(`/cars/${value}`)
  }

  return (
    <div {...domProps} className={twMerge(className)}>
      <Select.Root onValueChange={(value) => handleCategoryChange(value)}>
        <Select.Trigger className="flex w-full max-w-xs items-center justify-between border border-dark bg-white px-4 py-1 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-limeDark">
          <Select.Value placeholder="-- Select filter" />
          <Select.Icon>
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className="mt-10 overflow-hidden border border-dark bg-white shadow-lg">
            <Select.ScrollUpButton />
            <Select.Viewport>
              <Select.Group>
                <Select.Item
                  value="PB"
                  className="text-md relative flex h-8 cursor-pointer select-none items-center px-4 py-2 text-dark focus:bg-lime focus:text-dark"
                >
                  <Select.ItemText>PB</Select.ItemText>
                  <Select.ItemIndicator className="absolute left-0 inline-flex h-full w-6 items-center justify-center">
                    <CheckIcon />
                  </Select.ItemIndicator>
                </Select.Item>
                <Select.Item
                  value="SU"
                  className="text-md relative flex h-8 cursor-pointer select-none items-center px-4 py-2 text-dark focus:bg-lime focus:text-dark"
                >
                  <Select.ItemText>SU</Select.ItemText>
                  <Select.ItemIndicator className="absolute left-0 inline-flex h-full w-6 items-center justify-center">
                    <CheckIcon />
                  </Select.ItemIndicator>
                </Select.Item>
              </Select.Group>
            </Select.Viewport>
            <Select.ScrollDownButton />
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  )
}
