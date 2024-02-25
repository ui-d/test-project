import { render, screen } from "@testing-library/react"

import { Button } from "./Button"

describe("Button", () => {
  test("renders", () => {
    render(<Button children="test" />)

    const element = screen.getByText("Button")

    expect(element).toBeInTheDocument()
  })
})
