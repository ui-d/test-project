import { twMerge } from "tailwind-merge"
import { Container, Heading, Text, TextSection } from "src/ui/fundamentals"
import { HeroProps } from "./Hero.types"

export const Hero = (props: HeroProps) => {
  const { header, description, className } = props

  return (
    <Container className={twMerge("text-center", className)}>
      <Heading size="lg">{header}</Heading>
      <TextSection size="sm" className="mx-auto">
        <Text size="md">{description}</Text>
      </TextSection>
    </Container>
  )
}
