import CategoriesTable from '@/app/admin/categories/CategoriesTable'

export default async function CategoriesTableContainer() {
  const categories = await fetch('http://localhost:3004/categories', {
    cache: 'no-store',
  }).then((res) => res.json())

  return <CategoriesTable data={categories} />
}
