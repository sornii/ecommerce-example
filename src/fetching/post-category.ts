import axios from 'axios'
import { Category } from '@/types'

type PostCategory = {
  name: string
}

export default async function postCategory(postCategory: PostCategory) {
  const response = await axios.post<Category>(
    'http://localhost:3004/categories',
    {
      name: postCategory.name,
    }
  )

  return response.data
}
