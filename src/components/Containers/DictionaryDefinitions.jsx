import { Masonry } from "@mui/lab"
import { Box, capitalize, Typography } from "@mui/material"
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered'
import SimpleList from "components/Lists/SimpleList"
import { DefinitionItemColor, PartOfSpeech } from 'models/dictionary'

function DictionaryDefinitions({ partsOfSpeech }) {
  const getBgColor = (partOfSpeech) => {
    return DefinitionItemColor[partOfSpeech]
  }

  const getItem = (partOfSpeech) => {
    const items = partsOfSpeech[partOfSpeech]
    const length = items?.length

    return (
      <>
        {
          length ?
            <Box sx={{ p: 1, maxHeight: 360, overflowY: 'auto', bgcolor: getBgColor(partOfSpeech) }}>
              <Typography variant="h6" align="center">{capitalize(`${partOfSpeech}s`)}</Typography>
              {
                length ?
                  <SimpleList items={items} prop="definition" /> :
                  <Box sx={{ pl: '1.3em' }}><FormatListNumberedIcon /></Box>
              }
            </Box> :
            null
        }
      </>
    )
  }

  return (
    <Masonry
      columns={{ xs: 1, md: 3 }}
      spacing={2}
      sx={{ color: 'white' }}
    >
      { getItem(PartOfSpeech.NOUN) }
      { getItem(PartOfSpeech.PRONOUN) }
      { getItem(PartOfSpeech.PREPOSITION) }
      { getItem(PartOfSpeech.VERB) }
      { getItem(PartOfSpeech.ADVERB) }
      { getItem(PartOfSpeech.ADJECTIVE) }
      { getItem(PartOfSpeech.INTERJECTION) }
      { getItem(PartOfSpeech.CONJUNCTION) }
      { getItem(PartOfSpeech.NUMERAL) }
    </Masonry>
  )
}

export default DictionaryDefinitions