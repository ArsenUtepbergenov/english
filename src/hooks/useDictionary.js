import { useRef, useState } from "react"
import { fetchDefinition } from "api/freeDictionary"

const mainDefinition = 0

function useDictionary() {
  const definitions = useRef(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetch = async (word) => {
    setLoading(true)
    const result = await fetchDefinition(word)

    if (result.isError)
      setError(result.error)
    else {
      definitions.current = result.result
      setError(null)
    }
    setLoading(false)
  }

  const getAudioUrl = () => {
    return definitions.current !== null ?
      definitions.current[mainDefinition]?.phonetics[mainDefinition]?.audio :
      ''
  }

  const getPhonetics = () => {
    return definitions.current !== null ?
      definitions.current[mainDefinition]?.phonetics.find(item => item.text)?.text :
      ''
  }

  const getMeanings = (partOfSpeech) => {
    const result = []

    if (definitions.current !== null) {
      const temp = definitions.current[mainDefinition]?.meanings.filter(meaning => meaning.partOfSpeech === partOfSpeech)
      if (temp?.length) {
        temp.forEach(item => result.push(item.definitions))
        return result.flat()
      }
    }

    return result
  }

  return {
    error,
    loading,
    fetch,
    getMeanings,
    getAudioUrl,
    getPhonetics
  }
}

export default useDictionary