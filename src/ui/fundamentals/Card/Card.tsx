import Link from "next/link"
import { twMerge } from "tailwind-merge"
import { CardProps } from "./Card.types"
import { CardImage } from "./CardImage"
import { Button } from "../Button"
import { Heading } from "../Heading"
import { Text } from "../Text"

export const Card = (props: CardProps) => {
  const { title, brand, link, vehicleType, className } = props
  const carUrl = `/cars/${vehicleType}/${link.href.split("/").pop()}`

  return (
    <article className={twMerge("shadow-md", className)}>
      <div>
        <CardImage />
        <div className="px-6 pb-16 pt-8">
          <Heading className="mb-8" size="sm" variant="h2" weight="bold">
            {brand}
          </Heading>
          <Text size="sm" className="mb-8">
            {title}
          </Text>
          <Text size="sm" className="mb-10 xl:mb-2">
            carType: {vehicleType}
          </Text>
          <div className="text-right">
            <Button size="md" asChild className={twMerge("bg-lime")}>
              <Link title={link.title} href={carUrl}>
                {link.title}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}
