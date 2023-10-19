import ProductsTable from '@/app/admin/products/ProductsTable'
import { IProductsSearch } from '@/app/admin/products/page'

export default async function ProductsTableConnected({
  searchParams,
}: IProductsSearch) {
  // const { page = '0', q = '' } = searchParams ?? {}
  // const limit = '10'

  // const search = new URLSearchParams({
  //   _page: page,
  //   _limit: limit,
  //   q,
  // }).toString()

  const categories = await fetch(`http://localhost:3004/products`, {
    cache: 'no-store',
  }).then((res) => res.json())

  return <ProductsTable data={categories} />
}
