import DefaultTable from 'components/Tables/DefaultTable'
import { AnsweredVerbsProps } from './containers.types'

export default function AnsweredVerbs({ rows = [] }: AnsweredVerbsProps) {
  return (
    <DefaultTable
      headers={['Infinitive', 'Past Simple (V2)', 'Past Participle (V3)']}
      rows={rows}
      defaultTableProps={{
        size: 'small',
      }}
    />
  )
}
