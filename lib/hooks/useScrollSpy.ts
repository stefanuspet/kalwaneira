import { useEffect, useState } from 'react'

export function useScrollSpy(sectionIds: string[], offset = 120): string | null {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY + offset
      let active: string | null = null
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= y) active = id
      }
      setActiveId(active)
    }

    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [sectionIds, offset])

  return activeId
}
