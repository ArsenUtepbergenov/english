import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material'
import { StyledTableRow, StyledTableCell } from './defaultTable.styles'
import { v4 as uuidv4 } from 'uuid'

export default function DefaultTable({ headerName = '', headers, rows }) {
  const rowsLength = rows?.length
  const headersLength = headers?.length

  return (
    <TableContainer component={Paper}>
      <Table aria-label="default table">
        <TableHead>
          <TableRow>
            <StyledTableCell>{headerName}</StyledTableCell>
            {headersLength
              ? headers.map((header) => (
                  <StyledTableCell key={header} align="center">
                    {header}
                  </StyledTableCell>
                ))
              : null}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsLength
            ? rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    <Typography variant="subtitle2" component="span">
                      {row.name}
                    </Typography>
                  </TableCell>
                  {headersLength
                    ? headers.map((_, index) => (
                        <TableCell key={uuidv4()} align="center">
                          {row[headers[index]]}
                        </TableCell>
                      ))
                    : null}
                </StyledTableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
