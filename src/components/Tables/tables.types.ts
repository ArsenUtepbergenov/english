import { TableProps } from '@mui/material'

export type DefaultTableProps = {
  headerName?: string
  headers: string[]
  rows: Record<string, string>[]
  defaultTableProps?: TableProps
}
