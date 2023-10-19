'use client'

import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import Link from 'next/link'
import ReactTable from '@/components/ReactTable'

type SectionTableItem = {
  id: string
  name: string
}

const helper = createColumnHelper<SectionTableItem>()

const columns = [
  helper.accessor('id', {
    header: 'ID',
    cell: (info) => (
      <Link href={`/admin/sections/${info.row.original.id}`}>
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
        href={`/admin/sections/${category.id}/remove`}
      >
        Remove
      </Link>
    ),
  }),
]

export default function SectionsTable({ data }: { data: any }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return <ReactTable table={table} />
}
