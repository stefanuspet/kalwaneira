import Footer from '@/components/layout/Footer'

export default function NusaterasoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer variant="warm" />
    </>
  )
}
