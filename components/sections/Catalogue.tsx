'use client'

import { useState } from 'react'
import { products } from '@/data/products'
import type { ProductCategory } from '@/types'

type Filter = 'all' | ProductCategory

const filters: { label: string; value: Filter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Seafood', value: 'sea' },
  { label: 'Agriculture', value: 'earth' },
]

export default function Catalogue() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all')

  const visible = activeFilter === 'all'
    ? products
    : products.filter((p) => p.cat === activeFilter)

  return (
    <section className="catalog" id="catalog">
      <div className="container">
        <div className="label-row">
          <span className="eyebrow">— Selected Catalogue</span>
          <span className="num">SECTION 03 / 06</span>
        </div>

        <div className="catalog-header">
          <h2 className="catalog-h">
            A working selection<br />of what we ship.
          </h2>
          <div className="catalog-filter" role="tablist" aria-label="Filter products">
            {filters.map((f) => (
              <button
                key={f.value}
                role="tab"
                aria-selected={activeFilter === f.value}
                className={activeFilter === f.value ? 'active' : undefined}
                onClick={() => setActiveFilter(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="catalog-grid">
          {visible.map((product) => (
            <article key={product.id} className="product">
              <div className={`product-vis ${product.visualClass}`}>
                <span className={`product-badge ${product.cat}`}>
                  <span className="dot" />
                  {product.brand === 'nusateraso' ? 'Nusateraso' : 'Zanetuno'}
                </span>
                <span className="product-grade">{product.grade}</span>
                <div className="ph">— {product.visualClass} —</div>
              </div>
              <div className="product-meta">
                <div className="product-name">{product.name}</div>
                <div className="product-origin">{product.origin}</div>
                <div className="product-attrs">
                  <span className="k">{product.attrKey}</span>
                  <span className="v">{product.attrValue}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
