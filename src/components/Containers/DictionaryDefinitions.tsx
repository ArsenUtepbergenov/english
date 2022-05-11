import { useMemo } from 'react'
import { Masonry } from '@mui/lab'
import { Box, capitalize, Typography } from '@mui/material'
import SimpleList from 'components/Lists/SimpleList'
import { DefinitionItemColor } from 'models/dictionary'
import { getPartsOfSpeechAsValues } from 'utils'
import { DictionaryDefinitionsProps } from './containers.types'

const parts = getPartsOfSpeechAsValues()

export default function DictionaryDefinitions({
  partsOfSpeech,
  columns,
}: DictionaryDefinitionsProps) {
  const getItems = useMemo(() => {
    return parts.map((part) => {
      const definitions = partsOfSpeech[part]

      return definitions?.length ? (
        <Box
          key={part}
          sx={{
            p: 1,
            maxHeight: 360,
            overflowY: 'auto',
            borderLeft: '7px dotted white',
            bgcolor: DefinitionItemColor[part],
          }}
        >
          <Typography variant="h6" align="center" sx={{ textDecoration: 'underline' }}>
            {capitalize(`${part}s`)}
          </Typography>
          <SimpleList items={definitions} prop="definition" />
        </Box>
      ) : null
    })
  }, [partsOfSpeech])

  return (
    <Masonry columns={{ xs: 1, md: columns }} spacing={2} sx={{ color: 'white' }}>
      {parts?.length ? <>{getItems}</> : <></>}
    </Masonry>
  )
}
