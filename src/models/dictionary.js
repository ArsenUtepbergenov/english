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
  [PartOfSpeech.NOUN]: '#64913d',
  [PartOfSpeech.PRONOUN]: '#5d4037',
  [PartOfSpeech.VERB]: '#0f6b9d',
  [PartOfSpeech.ADJECTIVE]: '#cf7e08',
  [PartOfSpeech.ADVERB]: '#616161',
  [PartOfSpeech.PREPOSITION]: '#455a64',
  [PartOfSpeech.CONJUNCTION]: '#939f1a',
  [PartOfSpeech.INTERJECTION]: '#23645d',
  [PartOfSpeech.NUMERAL]: '#c14646',
}
