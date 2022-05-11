import { useRef, useState, useMemo } from 'react'
import { InputAdornment, IconButton, Box, Grid, Typography, CircularProgress } from '@mui/material'
import { SearchOutlined } from '@mui/icons-material'
import DefaultTextField from 'components/Fields/DefaultTextField'
import DictionaryDefinitions from 'components/Containers/DictionaryDefinitions'
import DefaultAudioPlayer from 'components/Media/DefaultAudioPlayer'
import useDictionary from 'hooks/useDictionary'
import { KeyCode } from 'models/common'
import { getPartsOfSpeechAsValues } from 'utils'

function Dictionary() {
  const { error, loading, fetch, getMeanings, getAudioUrl, getPhonetics } = useDictionary()
  const inputRef = useRef<any>(null)
  const columns = useRef(0)
  const [prevWord, setPrevWord] = useState('')
  const [definitions, setDefinitions] = useState(new Map())

  const handleSearch = async () => {
    const word = inputRef.current.value

    if (word === prevWord) return
    else if (word !== '') {
      await fetch(word)

      for (const partOfSpeech of getPartsOfSpeechAsValues())
        setDefinitions(new Map(definitions.set(partOfSpeech, getMeanings(partOfSpeech))))

      setPrevWord(word)
    } else return
  }

  const handleKeyPress = (e: any) => {
    if (e.keyCode === KeyCode.ENTER) {
      e.preventDefault()
      e.stopPropagation()
      handleSearch()
    }
  }

  const getPartsOfSpeech = useMemo(() => {
    let result = {}
    columns.current = 0

    for (const partOfSpeech of getPartsOfSpeechAsValues()) {
      const temp = definitions.get(partOfSpeech)

      if (temp?.length) {
        result = { ...result, [partOfSpeech]: temp }
        columns.current++
      }
    }

    return result
  }, [definitions])

  const getNumberOfColumns = () => {
    if (columns.current >= 3) return 3
    else if (columns.current === 2) return 2
    else return 1
  }

  return (
    <section>
      <Grid container direction="column" alignContent="center" spacing={2}>
        <Grid item>
          <DefaultTextField
            ref={inputRef}
            inputProps={{ type: 'text', placeholder: 'Word...' }}
            keyDown={(e) => handleKeyPress(e)}
            endIconButton={
              <InputAdornment position="end">
                <IconButton aria-label="search" onClick={handleSearch} edge="end">
                  <SearchOutlined />
                </IconButton>
              </InputAdornment>
            }
          />
        </Grid>
        <Grid item>
          {error ? (
            <Typography variant="h6" component="span" sx={{ color: '#d32f2f' }}>
              {error}
            </Typography>
          ) : (
            <DefaultAudioPlayer
              word={prevWord}
              phonetics={getPhonetics()}
              audioUrl={getAudioUrl()}
            />
          )}
        </Grid>
      </Grid>
      <Box mt={5}>
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            {!error ? (
              <DictionaryDefinitions
                partsOfSpeech={getPartsOfSpeech}
                columns={getNumberOfColumns()}
              />
            ) : null}
          </>
        )}
      </Box>
    </section>
  )
}

export default Dictionary
