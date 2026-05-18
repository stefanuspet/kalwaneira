import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin — Kalwaneira',
  robots: { index: false, follow: false },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: '100vh', background: '#f9fafb' }}>
      {children}
    </div>
  )
}
