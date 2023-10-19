import ItemsTable from '@/app/admin/items/ItemsTable'

export default async function ItemsTableConnected() {
  const categories = await fetch('http://localhost:3004/items', {
    cache: 'no-store',
  }).then((res) => res.json())

  return <ItemsTable data={categories} />
}
