import axios from 'axios'
import { Category } from '@/types'

export default async function fetchCategories() {
  const response = await axios.get<Category[]>(
    'http://localhost:3004/categories'
  )

  return response.data
}
