import Footer from '@/components/layout/Footer'

export default function StandardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer variant="dark" />
    </>
  )
}
