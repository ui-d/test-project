import Link from "next/link"
import { twMerge } from "tailwind-merge"
import { CardProps } from "./Card.types"
import { CardImage } from "./CardImage"
import { Button } from "../Button"
import { Heading } from "../Heading"
import { Text } from "../Text"

export const Card = (props: CardProps) => {
  const { title, brand, link, vehicleType, className } = props
  return (
    <article className={twMerge("shadow-md", className)}>
      <Link href={link.href}>
        <CardImage placeholder="empty" className="w-full" width={100} height={100} />
        <div className="pb-16 pl-6 pr-10 pt-8">
          <Heading className="mb-8" size="sm" variant="h2" weight="bold">
            {brand}
          </Heading>
          <Text size="sm" className="mb-8">
            {title}
          </Text>
          <Text size="md" className="mb-2">
            carType: {vehicleType}
          </Text>
          <div className="text-right">
            <Button size="md" asChild className={twMerge("bg-lime")}>
              <Link title={link.title} href={link.href}>
                {link.title}
              </Link>
            </Button>
          </div>
        </div>
      </Link>
    </article>
  )
}
