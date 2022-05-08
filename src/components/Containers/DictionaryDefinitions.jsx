import { Masonry } from '@mui/lab'
import { Box, capitalize, Typography } from '@mui/material'
import SimpleList from 'components/Lists/SimpleList'
import { DefinitionItemColor, getPartsOfSpeechAsValues } from 'models/dictionary'
import { useMemo, useState, useCallback } from 'react'

function DictionaryDefinitions({ partsOfSpeech, columns }) {
  const [parts] = useState(() => getPartsOfSpeechAsValues())

  const getBgColor = (partOfSpeech) => {
    return DefinitionItemColor[partOfSpeech]
  }

  const getItem = useCallback((definitions, partOfSpeech) => {
    return (
      <Box
        sx={{
          p: 1,
          maxHeight: 360,
          overflowY: 'auto',
          borderLeft: '7px dotted white',
          bgcolor: getBgColor(partOfSpeech),
        }}
      >
        <Typography variant="h6" align="center" sx={{ textDecoration: 'underline' }}>
          {capitalize(`${partOfSpeech}s`)}
        </Typography>
        <SimpleList items={definitions} prop="definition" />
      </Box>
    )
  }, [])

  const getItems = useMemo(() => {
    return parts?.length ? (
      parts.map((part) => {
        const definitions = partsOfSpeech[part]
        return definitions?.length ? <span key={part}>{getItem(definitions, part)}</span> : null
      })
    ) : (
      <></>
    )
  }, [parts, getItem, partsOfSpeech])

  return (
    <Masonry columns={{ xs: 1, md: columns }} spacing={2} sx={{ color: 'white' }}>
      {getItems}
    </Masonry>
  )
}

export default DictionaryDefinitions
