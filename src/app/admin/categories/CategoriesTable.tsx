'use client'

import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import Link from 'next/link'
import ReactTable from '@/components/ReactTable'

type CategoryTableItem = {
  id: string
  name: string
  sections: number // total number of sections
  items: number // total number of items
  products: number // total number of products
}

const helper = createColumnHelper<CategoryTableItem>()

const columns = [
  helper.accessor('id', {
    header: 'ID',
    cell: (info) => (
      <Link href={`/admin/categories/${info.row.original.id}`}>
        {info.getValue()}
      </Link>
    ),
  }),
  helper.accessor('name', {
    header: 'Name',
  }),
  helper.accessor('sections', {
    header: 'Sections',
  }),
  helper.accessor('items', {
    header: 'Items',
  }),
  helper.accessor('products', {
    header: 'Products',
  }),
  helper.display({
    id: 'actions',
    header: 'Actions',
    cell: ({ row: { original: category } }) => (
      <Link
        className='text-red-600 hover:text-red-900'
        href={`/admin/categories/${category.id}/remove`}
      >
        Remove
      </Link>
    ),
  }),
]

export default function CategoriesTable({ data }: { data: any }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return <ReactTable table={table} />
}
