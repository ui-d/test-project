import { render, screen } from "@testing-library/react"

import { Heading } from "./Heading"

describe("Heading", () => {
  test("renders", () => {
    render(<Heading size="md" children="Lorem ipsum" />)

    const element = screen.getByText("Heading")

    expect(element).toBeInTheDocument()
  })
})
