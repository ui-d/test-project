import { Metadata } from "next"
import * as data from "src/data/data.json"
import { CardList } from "src/ui/components/CardList"
import { Hero } from "src/ui/components/Hero"

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
        <Hero
          className="mb-20"
          header="Text lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolorum ex mollitia perspiciatis! A, alias assumenda beatae commodi doloribus enim, ipsa iusto laboriosam! alias assumenda beatae commodi doloribus enim!"
        />
      </main>
      <CardList cards={data.cars} />
    </>
  )
}
