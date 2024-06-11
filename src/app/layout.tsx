import Nav from "@/app/components/Nav"
import Link from "next/link"
export const metadata = {
  title: 'React + TypeScript + Next.js',
  description: 'My awesome React + TypeScript + Next.js app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body
        style={
          {
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
          }
        }
      >
        <header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '1rem',
            borderBottom: '1px solid #ccc',
            backgroundColor: 'lightblue',
            marginBottom: '20px'
          }

          }
        >
          <h2>The Header</h2>
          <br />
          <Nav />


        </header>
        {children}
        <footer
          style={{
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '1rem',
            borderTop: '1px solid #ccc',
            backgroundColor: 'ghostwhite'
          }}
        >
          <h3>The Footer</h3>

        </footer>
      </body>
    </html>
  )
}
