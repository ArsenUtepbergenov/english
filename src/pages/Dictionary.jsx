import { useRef, useState } from "react"
import { InputAdornment, IconButton, Box, Grid } from "@mui/material"
import { SearchOutlined } from '@mui/icons-material'
import DefaultTextField from "components/Fields/DefaultTextField"
import SimpleList from "components/Lists/SimpleList"
import useDictionary from "hooks/useDictionary"
import { PartOfSpeech } from 'models/dictionary'

function Dictionary() {
  const { fetch, getMeaningsByPartOfSpeech } = useDictionary()
  const [nouns, setNouns] = useState([])
  const inputRef = useRef()

  const handleSearch = async () => {
    const word = inputRef.current.value
    if (word !== '') {
      await fetch(word)
      setNouns(getMeaningsByPartOfSpeech(PartOfSpeech.NOUN))
    } else
      return
  }

  return (
    <section>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item>
          <DefaultTextField
            ref={inputRef}
            inputProps={{ type: 'text', placeholder: 'Word...', }}
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
      </Grid>
      <Box mt={2}>
        <SimpleList items={nouns} prop="definition" />
      </Box>
    </section>
  )
}

export default Dictionary