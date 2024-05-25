import 'styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'UI Using Tailwind CSS and DaisyUI',
  description: 'Tailwind CSS and DaisyUI Integration In Next.js Application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="winter">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
