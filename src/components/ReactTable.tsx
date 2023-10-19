import TableComponents from '@/components/Table'
import { flexRender } from '@tanstack/react-table'
import { RowData, Table } from '@tanstack/table-core'

export default function ReactTable<TData extends RowData>({
  table,
}: {
  table: Table<TData>
}) {
  return (
    <TableComponents.Table>
      <TableComponents.Head>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableComponents.Header key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </TableComponents.Header>
            ))}
          </tr>
        ))}
      </TableComponents.Head>
      <TableComponents.Body>
        {table.getRowModel().rows.map((row) => (
          <TableComponents.Row key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <TableComponents.Cell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableComponents.Cell>
            ))}
          </TableComponents.Row>
        ))}
      </TableComponents.Body>
    </TableComponents.Table>
  )
}
