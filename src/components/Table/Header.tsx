import { ReactNode } from 'react'

export default function Header({ children }: { children: ReactNode }) {
  return (
    <th
      scope='col'
      className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
    >
      {children}
    </th>
  )
}
