import { useRef, useState } from "react"
import { InputAdornment, IconButton, Box, Grid, Typography } from "@mui/material"
import { SearchOutlined } from '@mui/icons-material'
import DefaultTextField from "components/Fields/DefaultTextField"
import DictionaryDefinitions from 'components/Containers/DictionaryDefinitions'
import useDictionary from "hooks/useDictionary"
import { getPartsOfSpeechAsValues, PartOfSpeech } from 'models/dictionary'
import { KeyCode } from "models/common"
import DefaultAudioPlayer from "components/Media/DefaultAudioPlayer"

function Dictionary() {
  const { error, fetch, getMeanings, getAudioUrl, getPhonetics } = useDictionary()
  const inputRef = useRef()
  const [prevWord, setPrevWord] = useState('')
  const [definitions, setDefinitions] = useState(new Map())

  const handleSearch = async () => {
    const word = inputRef.current.value
    if (word === prevWord)
      return
    if (word !== '') {
      await fetch(word)
      for (const partOfSpeech of getPartsOfSpeechAsValues()) {
        setDefinitions(new Map(definitions.set(partOfSpeech, getMeanings(partOfSpeech))))
      }
      setPrevWord(word)
    } else
      return
  }

  const handleKeyPress = (e) => {
    if (e.keyCode === KeyCode.ENTER) {
      e.preventDefault()
      e.stopPropagation()
      handleSearch()
    }
  }

  return (
    <section>
      <Grid
        container
        direction="column"
        alignContent="center"
        spacing={2}
      >
        <Grid item>
          <DefaultTextField
            ref={inputRef}
            inputProps={{ type: 'text', placeholder: 'Word...', }}
            keyDown={e => handleKeyPress(e)}
            endIconButton={
              <InputAdornment position="end">
                <IconButton
                  aria-label="search"
                  onClick={handleSearch}
                  edge="end"
                >
                  <SearchOutlined />
                </IconButton>
              </InputAdornment>
            }
          />
        </Grid>
        <Grid item>
          {
            error ?
              <Typography
                variant="h6"
                component="span"
                sx={{ color: '#d32f2f' }}
              >
                {error}
              </Typography> :
              <DefaultAudioPlayer
                word={prevWord}
                phonetics={getPhonetics()}
                audioUrl={getAudioUrl()}
              />
          }
        </Grid>
      </Grid>
      <Box mt={5}>
        <DictionaryDefinitions partsOfSpeech={{
          [PartOfSpeech.NOUN]: definitions.get(PartOfSpeech.NOUN),
          [PartOfSpeech.PRONOUN]: definitions.get(PartOfSpeech.PRONOUN),
          [PartOfSpeech.PREPOSITION]: definitions.get(PartOfSpeech.PREPOSITION),
          [PartOfSpeech.VERB]: definitions.get(PartOfSpeech.VERB),
          [PartOfSpeech.ADVERB]: definitions.get(PartOfSpeech.ADVERB),
          [PartOfSpeech.ADJECTIVE]: definitions.get(PartOfSpeech.ADJECTIVE),
          [PartOfSpeech.INTERJECTION]: definitions.get(PartOfSpeech.INTERJECTION),
          [PartOfSpeech.CONJUNCTION]: definitions.get(PartOfSpeech.CONJUNCTION),
          [PartOfSpeech.NUMERAL]: definitions.get(PartOfSpeech.NUMERAL),
        }}/>
      </Box>
    </section>
  )
}

export default Dictionary