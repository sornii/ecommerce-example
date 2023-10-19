import axios from 'axios'
import { Category } from '@/types'

export default async function deleteCategory(id: string) {
  const response = await axios.delete<Category>(
    `http://localhost:3004/categories/${id}`
  )

  return response.data
}
