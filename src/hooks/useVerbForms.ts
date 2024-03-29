import { useState, useRef } from 'react'
import { COUNT_VERBS, VerbForms, irregularVerbs } from 'assets/data/verbs'

const verbs = JSON.parse(irregularVerbs)

export const infinitiveVerbs = verbs[VerbForms.INFINITIVE]
export const pastSimpleVerbs = verbs[VerbForms.PAST_SIMPLE]
export const pastParticipleVerbs = verbs[VerbForms.PAST_PARTICIPLE]

export function getVerbsAsUnions() {
  let result = new Array(COUNT_VERBS).fill(null)

  result = result.reduce((acc, _, i) => {
    return [
      ...acc,
      {
        Infinitive: infinitiveVerbs[i],
        'Past Simple (V2)': pastSimpleVerbs[i],
        'Past Participle (V3)': pastParticipleVerbs[i],
      },
    ]
  }, [])

  return result
}

function useVerbForms() {
  const [infinitive, setInfinitive] = useState('')
  const pastSimpleVerb = useRef('')
  const pastParticipleVerb = useRef('')

  const nextVerb = () => {
    const randomIndexVerb = Math.floor(Math.random() * COUNT_VERBS)
    setInfinitive(infinitiveVerbs[randomIndexVerb])
    pastSimpleVerb.current = pastSimpleVerbs[randomIndexVerb]
    pastParticipleVerb.current = pastParticipleVerbs[randomIndexVerb]
  }

  const parse = (target: HTMLInputElement) => {
    return String(target.value).toLowerCase().trim()
  }

  const checkPastSimple = (target: HTMLInputElement) => {
    setStyles(pastSimpleVerb.current, target)
  }

  const checkPastParticiple = (target: any) => {
    setStyles(pastParticipleVerb.current, target)
  }

  const setStyles = (value: string, target: any) => {
    const tValue = parse(target)
    if (!tValue) {
      target.style = ''
      return
    } else if (value !== tValue) target.style = 'background: #ffb0aa; border-color: #f97e7e;'
    else target.style = 'background: #a7e45f; border-color: green;'
  }

  const check = (pastSimple: any, pastParticiple: any) => {
    return (
      infinitive &&
      pastSimpleVerb.current === pastSimple &&
      pastParticipleVerb.current === pastParticiple
    )
  }

  return {
    infinitive,
    checkPastSimple,
    checkPastParticiple,
    nextVerb,
    check,
  }
}

export default useVerbForms
