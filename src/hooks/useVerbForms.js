import { useState } from 'react'
import { COUNT_VERBS, VerbForms, irregularVerbs } from 'data/verbs.js'

const verbs = JSON.parse(irregularVerbs)
const infinitiveVerbs = verbs[VerbForms.INFINITIVE]
const pastSimpleVerbs = verbs[VerbForms.PAST_SIMPLE]
const pastParticipleVerbs = verbs[VerbForms.PAST_PARTICIPLE]

function useVerbForms() {
  const [infinitive, setInfinitive] = useState('')
  const [pastSimpleVerb, setPastSimpleVerb] = useState('')
  const [pastParticipleVerb, setPastParticipleVerb] = useState('')

  const generateRandomVerb = () => {
    const randomIndexVerb = Math.floor(Math.random() * COUNT_VERBS)
    setInfinitive(infinitiveVerbs[randomIndexVerb])
    setPastSimpleVerb(pastSimpleVerbs[randomIndexVerb])
    setPastParticipleVerb(pastParticipleVerbs[randomIndexVerb])
  }

  const resetStyle = (target) => {
    target.style = ''
  }

  const parse = (target) => {
    return String(target.value).toLowerCase().trim()
  }

  const checkPastSimple = (target) => {
    stateStyle(pastSimpleVerb, target)
  }

  const checkPastParticiple = (target) => {
    stateStyle(pastParticipleVerb, target)
  }

  const stateStyle = (value, target) => {
    const tValue = parse(target)
    if (!tValue) {
      resetStyle(target)
      return
    } else if (value !== tValue)
      target.style = 'background: #ffb0aa; border-color: #f97e7e;'
    else
      target.style = 'background: #a7e45f; border-color: green;'
  }

  return {
    infinitive,
    checkPastSimple,
    checkPastParticiple,
    generateRandomVerb,
    stateStyle,
    resetStyle
  }
}

export default useVerbForms