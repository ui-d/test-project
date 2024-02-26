import { Metadata } from "next"
import { Container } from "src/ui/fundamentals/Container"
import { Heading } from "src/ui/fundamentals/Heading"

export const metadata: Metadata = {
  title: "Product Page | Hedin",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "/images/next-enterprise.png",
      },
    ],
  },
}

export default function ProductCategory({ params }: { params: { category: string } }) {
  const { category } = params
  return (
    <>
      <main>
        <Container className="text-center">
          <Heading size="lg">{category}</Heading>
        </Container>
      </main>
    </>
  )
}
