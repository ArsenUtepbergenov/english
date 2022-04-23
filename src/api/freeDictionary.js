const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

const STATUSES = {
  success: 200,
  fail: 404
}

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