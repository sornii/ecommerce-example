import { ReactNode } from 'react'

export default function Cell({ children }: { children: ReactNode }) {
  return (
    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
      {children}
    </td>
  )
}
