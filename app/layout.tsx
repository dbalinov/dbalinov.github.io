import '@/styles/globals.css'
import Link from 'next/link'

const header = (
  <header>
    <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
      <Link href="/">
        <h1 className="text-3xl font-bold underline text-white">Data for Good</h1>
      </Link>
      <p className="text-center text-slate-300">Wellcome</p>
    </div>
  </header>
)

const footer = (
  <footer className="border-t border-slate-500 mt-6 py-6 text-center text-slate-400">
    <div>
      <br />
      <h3>Developed by Jack</h3>
    </div>
  </footer>
)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <div className="mx-auto max-w-2xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  )
}
