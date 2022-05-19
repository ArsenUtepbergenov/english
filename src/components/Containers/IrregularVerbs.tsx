import { memo } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import DefaultTable from 'components/Tables/DefaultTable'
import { getVerbsAsUnions } from 'hooks/useVerbForms'
import { Accordion, AccordionSummary } from './containers.styles'
import { AccordionDetails } from '@mui/material'

const rows = getVerbsAsUnions()

export default memo(function IrregularVerbs() {
  return (
    <Accordion
      square
      TransitionProps={{
        timeout: 0,
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="all-verbs-content"
        id="all-verbs-header"
      >
        Show All
      </AccordionSummary>
      <AccordionDetails sx={{ p: 0 }}>
        <DefaultTable
          headers={['Infinitive', 'Past Simple (V2)', 'Past Participle (V3)']}
          rows={rows}
          defaultTableProps={{
            size: 'small',
          }}
        />
      </AccordionDetails>
    </Accordion>
  )
})
