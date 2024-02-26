import { twMerge } from "tailwind-merge"
import { Card, Container, Label, SelectField } from "src/ui/fundamentals"
import { CardListProps } from "./CardList.types"

export const CardList = (props: CardListProps) => {
  const { cards, className, ...domProps } = props
  return (
    <Container className="pb-44">
      <div className="flex w-full">
        <Label className="pr-4 pt-1">Filter: </Label>
        <SelectField className="mb-24 w-full">
          <option value="test">Test</option>
          <option value="test2">Test2</option>
        </SelectField>
      </div>
      <section {...domProps} className={twMerge("grid gap-5 md:grid-cols-3 xl:gap-24", className)}>
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </section>
    </Container>
  )
}
