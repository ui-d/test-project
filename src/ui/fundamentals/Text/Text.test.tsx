import { render, screen } from "@testing-library/react"

import { Text } from "./Text"

describe("Text", () => {
  test("renders", () => {
    render(<Text />)

    const element = screen.getByText("Text")

    expect(element).toBeInTheDocument()
  })
})
