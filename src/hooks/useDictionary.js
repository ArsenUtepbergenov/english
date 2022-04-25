import { useRef } from "react"
import { fetchDefinition } from "api/freeDictionary"

const primaryMeanings = 0

function useDictionary() {
  const definitions = useRef(null)

  const fetch = async (word) => {
    definitions.current = await fetchDefinition(word)
  }

  const getMeaningsByPartOfSpeech = (partOfSpeech) => {
    const result = []

    if (definitions.current !== null) {
      const temp = definitions.current[primaryMeanings]?.meanings.filter(meaning => meaning.partOfSpeech === partOfSpeech)
      if (temp?.length) {
        temp.forEach(item => result.push(item.definitions))
        return result.flat()
      }
    }

    return result
  }

  return {
    fetch,
    getMeaningsByPartOfSpeech
  }
}

export default useDictionary