import { ReactNode } from 'react'
import axios from 'axios'
import { Section } from '@/types'

export default async function fetchSections() {
  const response = await axios.get<Section[]>('http://localhost:3004/sections')

  return response.data
}
