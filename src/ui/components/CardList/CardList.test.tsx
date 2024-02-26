import { render, screen } from "@testing-library/react"

import { CardList } from "./CardList"

describe("CardList", () => {
  test("renders", () => {
    render(<CardList cards={[]} />)

    const element = screen.getByText("CardList")

    expect(element).toBeInTheDocument()
  })
})
