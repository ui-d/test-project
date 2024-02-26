import { twMerge } from "tailwind-merge"
import { Card, Container, SelectField } from "src/ui/fundamentals"
import { CardListProps } from "./CardList.types"

export const CardList = (props: CardListProps) => {
  const { cards, className, ...domProps } = props
  return (
    <Container className="pb-44">
      <SelectField className="mb-24">
        <option value="test">Test</option>
        <option value="test2">Test2</option>
      </SelectField>
      <section {...domProps} className={twMerge("grid gap-5 md:grid-cols-3 lg:gap-24", className)}>
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </section>
    </Container>
  )
}
