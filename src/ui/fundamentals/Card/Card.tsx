import { CardProps } from "./Card.types"
import { CardImage } from "./CardImage"
import { Heading } from "../Heading"
import { Text } from "../Text"
import { Button } from "../Button"
import Link from "next/link"
import { twMerge } from "tailwind-merge"

export const Card = (props: CardProps) => {
  const { title, brand, link, vehicleType, alt, src, className } = props
  return (
    <article className={twMerge("shadow-md", className)}>
      <CardImage placeholder="empty" className="w-full" width="100" height="100" />
      <div className="px-6 py-8">
        <Heading className="mb-8" size="sm" variant="h2">
          {brand}
        </Heading>
        <Text size="md" className="mb-10">
          {title}
        </Text>
        <div className="text-right">
          <Button size="lg" asChild title="Car" className={twMerge("bg-lime")}>
            <Link title={link.title} href={link.href}>
              Car
            </Link>
          </Button>
        </div>
      </div>
    </article>
  )
}
