import { ReactNode } from 'react'

export default function Body({ children }: { children: ReactNode }) {
  return <tbody className='divide-y divide-gray-200 bg-white'>{children}</tbody>
}
