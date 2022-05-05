import { styled } from '@mui/material/styles'
import { TableCell, TableRow, tableCellClasses } from '@mui/material'

export const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#009688',
    color: 'white',
  },
}))

export const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(even)': {
    backgroundColor: '#ededed',
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))
