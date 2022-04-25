import { useRef, useState } from "react"
import Button from "components/Buttons/Button"
import TextField from "components/Fields/TextField"
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
    <div className="max-w-7xl mx-auto px-6">
      <div className="max-w-xs mx-auto flex items-center">
        <TextField
          ref={inputRef}
          inputProps={{ type: 'text', placeholder: 'Word...', }}
        />
        <div className="ml-3 mt-2">
          <Button click={handleSearch}>Search</Button>
        </div>
      </div>
      <div className="definition">
        <SimpleList items={nouns} prop="definition" />
      </div>
    </div>
  )
}

export default Dictionary