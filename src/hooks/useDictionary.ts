import { useRef, useState } from 'react'
import { fetchDefinition } from 'api/freeDictionary'
import { Definitions, InternalDefinition } from 'models/dictionary'

const mainDefinition = 0

function useDictionary() {
  const definitions = useRef<Definitions | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const fetch = async (word: string) => {
    setLoading(true)
    const result = await fetchDefinition(word)

    if (result?.isError) setError(result.error!)
    else {
      definitions.current = result?.result
      setError(null)
    }
    setLoading(false)
  }

  const getAudioUrl = () => {
    if (definitions.current === null) return ''
    return definitions.current[mainDefinition].phonetics.find((item) => item.audio)?.audio
  }

  const getPhonetics = () => {
    if (definitions.current === null) return ''
    return definitions.current[mainDefinition].phonetics.find((item) => item.text)?.text
  }

  const getMeanings = (partOfSpeech: string) => {
    const result: InternalDefinition[] = []

    if (definitions.current !== null) {
      const temp = definitions.current[mainDefinition].meanings.filter(
        (meaning) => meaning.partOfSpeech === partOfSpeech,
      )
      if (temp?.length) temp.forEach((item) => result.push(...item.definitions))
    }

    return result
  }

  return {
    error,
    loading,
    fetch,
    getMeanings,
    getAudioUrl,
    getPhonetics,
  }
}

export default useDictionary
