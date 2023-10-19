import { ReactNode } from 'react'

export default function Head({ children }: { children: ReactNode }) {
  return <thead className='bg-gray-50'>{children}</thead>
}
