import { ReactNode } from 'react'
import axios from 'axios'
import { Item, Section } from '@/types'

export default async function fetchItems() {
  const response = await axios.get<Item[]>('http://localhost:3004/items')

  return response.data
}
