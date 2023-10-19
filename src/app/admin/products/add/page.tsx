import ProductForm from '@/app/admin/products/add/ProductForm'
import { Category, Item, Section } from '@/types'

export default async function Page() {
  const categories: Category[] = await fetch(
    `http://localhost:3004/categories`,
    {
      cache: 'no-store',
    }
  ).then((res) => res.json())

  const sections: Section[] = await fetch(`http://localhost:3004/sections`, {
    cache: 'no-store',
  }).then((res) => res.json())

  const items: Item[] = await fetch(`http://localhost:3004/items`, {
    cache: 'no-store',
  }).then((res) => res.json())

  return (
    <ProductForm categories={categories} sections={sections} items={items} />
  )
}
