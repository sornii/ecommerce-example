import Modal from '@/components/Modal'
import { Category } from '@/types'

export default async function Example({ params }: any) {
  const category: Category = await fetch(
    `http://localhost:3004/categories/${params.id}`
  ).then((res) => res.json())

  return (
    <Modal>
      <>{JSON.stringify(category)}</>
    </Modal>
  )
}
