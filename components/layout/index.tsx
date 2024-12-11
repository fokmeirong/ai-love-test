import { GeistSans } from 'geist/font/sans'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={`${GeistSans.className} antialiased`}>
      {children}
    </div>
  )
} 