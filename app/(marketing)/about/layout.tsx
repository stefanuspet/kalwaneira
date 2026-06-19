import Footer from '@/components/layout/Footer'

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer variant="warm" />
    </>
  )
}
