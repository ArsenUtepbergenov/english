import { useRef, useState } from "react"
import Button from "components/Buttons/Button"
import TextField from "components/Fields/TextField"
import useDictionary from "hooks/useDictionary"

function Dictionary() {
  const { definitions, fetch } = useDictionary()
  const [nouns, setNouns] = useState([])
  const inputRef = useRef()

  const handleSearch = async () => {
    const word = inputRef.current.value
    if (word !== '') {
      await fetch(word)
      getMeaningsByPartOfSpeech('noun', setNouns)
    } else
      return
  }

  const getMeaningsByPartOfSpeech = (partOfSpeech, set) => {
    const result = []

    if (definitions.current !== null) {
      const temp = definitions.current[0]?.meanings.filter(meaning => meaning.partOfSpeech === partOfSpeech)
      if (temp?.length) {
        temp.forEach(item => result.push(item.definitions))
        set(result.flat())
      }
    }
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
        {
          nouns?.length ?
            nouns.map(definition => <p key={definition.definition}>{definition.definition}</p>) :
            null
        }
      </div>
    </div>
  )
}

export default Dictionary