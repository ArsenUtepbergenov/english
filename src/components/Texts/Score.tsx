import { FC } from 'react'
import { Typography } from '@mui/material'
import { ScoreProps } from './texts.types'

const Score: FC<ScoreProps> = ({ value }) => {
  return (
    <Typography variant="h6" color="text.secondary">
      Score: {value}
    </Typography>
  )
}

export default Score
