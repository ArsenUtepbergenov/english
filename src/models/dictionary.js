export function getPartsOfSpeechAsValues() {
  return Object.values(PartOfSpeech)
}

export const PartOfSpeech = {
  NOUN: 'noun',
  PRONOUN: 'pronoun',
  VERB: 'verb',
  ADJECTIVE: 'adjective',
  ADVERB: 'adverb',
  PREPOSITION: 'preposition',
  CONJUNCTION: 'conjunction',
  INTERJECTION: 'interjection',
  NUMERAL: 'numeral',
}

export const DefinitionItemColor = {
  [PartOfSpeech.NOUN]: '#689f38',
  [PartOfSpeech.PRONOUN]: '#5d4037',
  [PartOfSpeech.VERB]: '#0288d1',
  [PartOfSpeech.ADJECTIVE]: '#ffa000',
  [PartOfSpeech.ADVERB]: '#616161',
  [PartOfSpeech.PREPOSITION]: '#455a64',
  [PartOfSpeech.CONJUNCTION]: '#afb42b',
  [PartOfSpeech.INTERJECTION]: '#00796b',
  [PartOfSpeech.NUMERAL]: '#d32f2f',
}