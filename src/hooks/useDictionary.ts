import { useRef, useState } from 'react'
import { fetchDefinition } from 'api/freeDictionary'

const mainDefinition = 0

function useDictionary() {
  const definitions = useRef<any | null>(null)
  const [error, setError] = useState<string | null | undefined>(null)
  const [loading, setLoading] = useState(false)

  const fetch = async (word: string) => {
    setLoading(true)
    const result = await fetchDefinition(word)

    if (result?.isError) setError(result.error)
    else {
      definitions.current = result?.result
      setError(null)
    }
    setLoading(false)
  }

  const getAudioUrl = () => {
    return definitions.current !== null
      ? definitions.current[mainDefinition]?.phonetics[mainDefinition]?.audio
      : ''
  }

  const getPhonetics = () => {
    return definitions.current !== null
      ? definitions.current[mainDefinition]?.phonetics.find((item: any) => item.text)?.text
      : ''
  }

  const getMeanings = (partOfSpeech: string) => {
    const result: any[] = []

    if (definitions.current !== null) {
      const temp = definitions.current[mainDefinition]?.meanings.filter(
        (meaning: any) => meaning.partOfSpeech === partOfSpeech,
      )
      if (temp?.length) {
        temp.forEach((item: any) => result.push(item.definitions))
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
    getPhonetics,
  }
}

export default useDictionary
