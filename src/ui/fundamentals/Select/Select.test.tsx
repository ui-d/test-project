import { render, screen } from "@testing-library/react"

import { SelectField } from "./Select"

describe("Select", () => {
  test("renders", () => {
    render(
      <SelectField>
        <option>1</option>
      </SelectField>
    )

    const element = screen.getByText("Select")

    expect(element).toBeInTheDocument()
  })
})
