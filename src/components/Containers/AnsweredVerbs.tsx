import { Box, Typography } from '@mui/material'
import DefaultTable from 'components/Tables/DefaultTable'
import { AnsweredVerbsProps } from './containers.types'

export default function AnsweredVerbs({ rows = [], score = 0 }: AnsweredVerbsProps) {
  return (
    <Box>
      <Typography variant="h6" color="text.secondary">
        {`The answered verbs: ${score}`}
      </Typography>
      <DefaultTable
        headers={['Infinitive', 'Past Simple (V2)', 'Past Participle (V3)']}
        rows={rows}
        defaultTableProps={{
          size: 'small',
        }}
      />
    </Box>
  )
}
