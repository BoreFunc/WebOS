import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className=':root'>
      <head />
      <body>{children}</body>
    </html>
  )
}