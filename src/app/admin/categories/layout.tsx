import { ReactNode } from 'react'

export default function CategoriesLayout(props: {
  children: ReactNode
  modals: ReactNode
}) {
  return (
    <>
      {props.children}
      {props.modals}
    </>
  )
}
