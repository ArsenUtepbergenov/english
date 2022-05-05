import { useState, useRef } from 'react'
import { COUNT_VERBS, VerbForms, irregularVerbs } from 'assets/data/verbs.js'

const verbs = JSON.parse(irregularVerbs)
const infinitiveVerbs = verbs[VerbForms.INFINITIVE]
const pastSimpleVerbs = verbs[VerbForms.PAST_SIMPLE]
const pastParticipleVerbs = verbs[VerbForms.PAST_PARTICIPLE]

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

  const parse = (target) => {
    return String(target.value).toLowerCase().trim()
  }

  const checkPastSimple = (target) => {
    setStyles(pastSimpleVerb.current, target)
  }

  const checkPastParticiple = (target) => {
    setStyles(pastParticipleVerb.current, target)
  }

  const setStyles = (value, target) => {
    const tValue = parse(target)
    if (!tValue) {
      target.style = ''
      return
    } else if (value !== tValue) target.style = 'background: #ffb0aa; border-color: #f97e7e;'
    else target.style = 'background: #a7e45f; border-color: green;'
  }

  const check = (pastSimple, pastParticiple) => {
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
