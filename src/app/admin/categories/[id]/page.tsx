import { Category } from '@/types'

export default async function CategoryDetail({ params }: any) {
  const category: Category = await fetch(
    `http://localhost:3004/categories/${params.id}`
  ).then((res) => res.json())

  return <>{JSON.stringify(category)}</>
}
