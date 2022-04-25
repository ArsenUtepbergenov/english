import { STATUSES } from 'models/api'

const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

export async function fetchDefinition(word) {
  try {
    const data = await fetch(`${url}${word}`)
    if (data?.status === STATUSES.success)
      return await data.json()
    else if (data?.status === STATUSES.fail)
      throw new Error('No Definitions Found')
  } catch (error) {
    console.error(error)
    return null
  }
}