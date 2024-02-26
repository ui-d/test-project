import { render, screen } from "@testing-library/react"

import { Hero } from "./Hero"

describe("Hero", () => {
  test("renders", () => {
    render(<Hero description="Lorem ipsum" header="LOREM IPSUM" />)

    const element = screen.getByText("Hero")

    expect(element).toBeInTheDocument()
  })
})
