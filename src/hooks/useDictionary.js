import { useRef } from "react"
import { fetchDefinition } from "api/freeDictionary"

function useDictionary() {
  const definitions = useRef(null)

  const fetch = async (word) => {
    definitions.current = await fetchDefinition(word)
  }

  return {
    definitions,
    fetch
  }
}

export default useDictionary