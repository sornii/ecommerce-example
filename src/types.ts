export type Category = {
  id: number
  name: string
  sections?: Section[]
  items?: Item[]
  products?: Product[]
}

export type Section = {
  id: number
  name: string
  categoryId: number | number[]
  categories?: Category[]
  items?: Item[]
  products?: Product[]
}

export type Item = {
  id: number
  name: string
  sectionId: number
  section?: Section
  productId: number[]
  products?: Product[]
  categoryId: number | number[]
  categories?: Category[]
}

export type Product = {
  id: number
  name: string
  price: number
  description: string
  image: string
  categoryId: number[]
  categories?: Category[]
  item?: Item
  colorId: number[]
  colors?: Color[]
  sizeId: number[]
  sizes?: Size[]
}

export type Color = {
  id: number
  name: string
  productId: number[]
  products?: Product[]
}

export type Size = {
  id: number
  name: string
  productId: number[]
  products?: Product[]
}
