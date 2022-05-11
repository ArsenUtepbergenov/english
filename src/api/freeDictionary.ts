import { Statuses } from 'models/api'

const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

export async function fetchDefinition(word: string) {
  try {
    const data = await fetch(`${url}${word}`)

    if (data) {
      const result = await data.json()

      if (data.status === Statuses.SUCCESSFUL) return { isError: false, result }
      else if (data.status === Statuses.FAILED) throw new Error(result.title)
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error)
      return { isError: true, error: error.message }
    }
  }
}
