import { ReactNode } from 'react'

export default function Table({ children }: { children: ReactNode }) {
  return (
    <table className='min-w-full divide-y divide-gray-300'>{children}</table>
  )
}
