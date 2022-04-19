import { useCallback, useEffect, useRef } from 'react'
import TextField from 'components/TextField'
import useVerbForms from 'hooks/useVerbForms'
import useCounter from 'hooks/useCounter'
import Button from 'components/Button'

const Verbs = () => {
  const verbForms = useVerbForms()
  const counter = useCounter()
  const pastSimple = useRef(null)
  const pastParticiple = useRef(null)

  const handlePastSimpleChange = (e) => {
    verbForms.checkPastSimple(e.target)
  }

  const handlePastParticipleChange = (e) => {
    verbForms.checkPastParticiple(e.target)
  }

  const handleGenerateVerb = useCallback(() => {
    if (verbForms.infinitive &&
        verbForms.pastSimpleVerb === pastSimple.current.value &&
        verbForms.pastParticipleVerb === pastParticiple.current.value) {
      counter.add(1)
    }
    verbForms.generateRandomVerb()
    pastSimple.current.value = ''
    pastParticiple.current.value = ''
    verbForms.resetStyle(pastSimple.current)
    verbForms.resetStyle(pastParticiple.current)
  }, [verbForms, counter])

  const handleEnterPress = useCallback((e) => {
    if (e.keyCode === 13) {
      handleGenerateVerb()
    }
  }, [handleGenerateVerb])

  useEffect(() => {
    window.addEventListener('keypress', handleEnterPress)

    return () => {
      window.removeEventListener('keypress', handleEnterPress)
    }
  }, [handleEnterPress])

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="grid grid-cols-3 gap-5 mt-2">
        <TextField
          id="infinitive"
          inputProps={{ type: 'text', placeholder: 'Infinitive', disabled: true }}
          value={verbForms.infinitive}
        />
        <TextField
          ref={pastSimple}
          id="pastSimple"
          inputProps={{
            type: 'text',
            placeholder: 'Past Simple...',
            disabled: !verbForms.infinitive ? true : false
          }}
          change={handlePastSimpleChange}
        />
        <TextField
          ref={pastParticiple}
          id="pastParticiple"
          inputProps={{
            type: 'text',
            placeholder: 'Past Participle...',
            disabled: !verbForms.infinitive ? true : false
          }}
          change={handlePastParticipleChange}
        />
      </div>
      <div className='flex items-center'>
        <Button click={handleGenerateVerb}>New Verb</Button>
        <p className='ml-10'><b>Score: {counter.count}</b></p>
      </div>
      <p className="text-gray-400">Press <b>'Enter'</b> to next verb...</p>
    </div>
  )
}

export default Verbs