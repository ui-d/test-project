import { CardListProps } from "./CardList.types"
import { Card } from "../../fundamentals/Card"
import { twMerge } from "tailwind-merge"
import { Container } from "../../fundamentals/Container"

export const CardList = (props: CardListProps) => {
  const { cards, className, ...domProps } = props
  return (
    <Container>
      <section {...domProps} className={twMerge("grid gap-5 md:grid-cols-3 lg:gap-24", className)}>
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </section>
    </Container>
  )
}
