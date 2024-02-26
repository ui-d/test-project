import "src/styles/tailwind.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-light pb-44 pt-20">
      <body>{children}</body>
    </html>
  )
}
