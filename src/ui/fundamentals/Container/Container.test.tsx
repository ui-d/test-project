import { render, screen } from "@testing-library/react"

import { Container } from "./Container"

describe("Container", () => {
  test("renders", () => {
    render(<Container>Test</Container>)

    const element = screen.getByText("Container")

    expect(element).toBeInTheDocument()
  })
})
