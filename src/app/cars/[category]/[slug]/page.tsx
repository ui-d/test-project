import { Metadata } from "next"
import * as data from "src/data/data.json"
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

export default function ProductPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const filteredCar = data.cars.filter((item) => item.link.href.split("/").pop() === slug)
  const carTitle = filteredCar[0]?.title
  return (
    <>
      <main>
        <Container className="text-center">
          <Heading size="lg">{carTitle}</Heading>
        </Container>
      </main>
    </>
  )
}
