import { render, screen } from "@testing-library/react"

import { CardImage } from "./CardImage"

describe("CardImage", () => {
  test("renders", () => {
    render(<CardImage />)

    const element = screen.getByText("CardImage")

    expect(element).toBeInTheDocument()
  })
})
