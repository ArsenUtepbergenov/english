import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import DefaultTable from 'components/Tables/DefaultTable'
import { getVerbsAsUnions } from 'hooks/useVerbForms'

const rows = getVerbsAsUnions()

export default function IrregularVerbs() {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="all-verbs-content"
        id="all-verbs-header"
      >
        Show All
      </AccordionSummary>
      <AccordionDetails>
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
}
