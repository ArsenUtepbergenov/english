import { Typography } from '@mui/material'

export default function Score({ value }) {
  return (
    <Typography variant="h6" color="text.secondary">
      Score: {value}
    </Typography>
  )
}
