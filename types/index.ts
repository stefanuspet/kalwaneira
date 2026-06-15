export type ProductCategory = 'sea' | 'earth'
export type ProductBrand = 'zanetuno' | 'nusateraso'
export type VisualClass = 'vanilla' | 'coffee' | 'spice' | 'tuna' | 'shrimp' | 'squid' | 'sweet' | 'coco'

export interface Product {
  id: string
  name: string
  brand: ProductBrand
  cat: ProductCategory
  grade: string
  origin: string
  desc?: string
  image?: string
  attrKey: string
  attrValue: string
  visualClass: VisualClass
}

export interface NavLink {
  label: string
  href: string
}

export interface Pillar {
  num: string
  title: string
  text: string
}

export interface MissionItem {
  id: string
  text: string
}

export interface ProcessStep {
  step: string
  title: string
  body: string
}

export interface WhyCard {
  num: string
  title: string
  body: string
}

export interface ContactChannel {
  key: string
  value: string
  action: string
}

export interface SubProduct {
  id: string
  name: string
  desc: string
  note?: string
  image?: string
}

export interface ProductGroup {
  id: string
  name: string
  image?: string
  desc: string
  subs: SubProduct[]
}
