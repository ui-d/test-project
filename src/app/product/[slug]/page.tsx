import { Metadata } from "next"
import { Heading } from "src/ui/fundamentals/Heading"
import { Container } from "src/ui/fundamentals/Container"

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

export default function ProductPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  return (
    <>
      <main>
        <Container className="text-center">
          <Heading>{slug}</Heading>
        </Container>
      </main>
    </>
  )
}
