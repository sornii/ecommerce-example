'use client'

import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import Link from 'next/link'
import ReactTable from '@/components/ReactTable'

type ItemTableItem = {
  id: string
  name: string
}

const helper = createColumnHelper<ItemTableItem>()

const columns = [
  helper.accessor('id', {
    header: 'ID',
    cell: (info) => (
      <Link href={`/admin/products/${info.row.original.id}`}>
        {info.getValue()}
      </Link>
    ),
  }),
  helper.accessor('name', {
    header: 'Name',
  }),
  helper.display({
    id: 'actions',
    header: 'Actions',
    cell: ({ row: { original: category } }) => (
      <Link
        className='text-red-600 hover:text-red-900'
        href={`/admin/products/${category.id}/remove`}
      >
        Remove
      </Link>
    ),
  }),
]

export default function ProductsTable({ data }: { data: any }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return <ReactTable table={table} />
}
