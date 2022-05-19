import { PartOfSpeech } from 'models/dictionary'

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function getPartsOfSpeechAsValues() {
  return Object.values(PartOfSpeech)
}

export function getSuccessfulMessage() {
  const messages = [
    'You are right!',
    'Well done!',
    'Omg..., you are best of the best!',
    'Damn, smart set!',
  ]
  return messages[Math.floor(Math.random() * messages.length)]
}
