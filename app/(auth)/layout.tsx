import { ReactNode } from 'react'

interface AppLayoutProps {
  children: ReactNode
}

export default function AuthLayout({ children }: AppLayoutProps) {
  return (
    <div>
      <h1>Auth</h1>
      {children}
    </div>
  )
}
