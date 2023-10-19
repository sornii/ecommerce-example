import { ReactNode } from 'react'

export default function Row({ children }: { children: ReactNode }) {
  return <tr>{children}</tr>
}
