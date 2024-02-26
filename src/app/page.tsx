import { Metadata } from "next"
import * as data from "src/data/data.json"
import { CardList } from "src/ui/components/CardList"
import { Hero } from "src/ui/components/Hero"

export const metadata: Metadata = {
  title: "Hedin assigment",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "/carimage.jpg",
      },
    ],
  },
}

export default function HomePage() {
  return (
    <>
      <main>
        <Hero
          className="mb-28"
          header="Text lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolorum ex mollitia perspiciatis! A, alias assumenda beatae commodi doloribus enim, ipsa iusto laboriosam! alias assumenda beatae commodi doloribus enim!"
        />
      </main>
      <CardList cards={data.cars} />
    </>
  )
}
