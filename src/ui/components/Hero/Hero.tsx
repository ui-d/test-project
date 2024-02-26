import { HeroProps } from "./Hero.types"
import { Container, Heading, Text, TextSection } from "src/ui/fundamentals"

export const Hero = (props: HeroProps) => {
  const { header, description } = props

  return (
    <Container className="text-center">
      <Heading>{header}</Heading>
      <TextSection size="sm" className="mx-auto">
        <Text>{description}</Text>
      </TextSection>
    </Container>
  )
}
