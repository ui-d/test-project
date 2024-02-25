import { Metadata } from "next"
import { Heading } from "src/ui/fundamentals/Heading"
import { Container } from "src/ui/fundamentals/Container"
import { Text } from "src/ui/fundamentals/Text"
import { TextSection } from "../ui/fundamentals/TextSection"

export const metadata: Metadata = {
  title: "Next.js Enterprise Boilerplate",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
      },
    ],
  },
}

export default function HomePage() {
  return (
    <>
      <main>
        <Container className="text-center">
          <Heading>Text lorem ipsum</Heading>
          <TextSection size="sm" className="mx-auto">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolorum ex mollitia perspiciatis! A, alias
              assumenda beatae commodi doloribus enim, ipsa iusto laboriosam libero maiores nemo, officia provident quas
              sit!
            </Text>
          </TextSection>
        </Container>
      </main>
    </>
  )
}
