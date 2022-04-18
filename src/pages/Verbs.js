import TextField from 'components/TextField'
import useVerbForms from 'hooks/useVerbForms'
import Button from 'components/Button'
import { useCallback, useEffect, useRef } from 'react'

const Verbs = () => {
  const verbForms = useVerbForms()
  const pastSimple = useRef(null)
  const pastParticiple = useRef(null)

  const handlePastSimpleChange = (e) => {
    verbForms.checkPastSimple(e.target)
  }

  const handlePastParticipleChange = (e) => {
    verbForms.checkPastParticiple(e.target)
  }

  const handleGenerateVerb = useCallback(() => {
    verbForms.generateRandomVerb()
    pastSimple.current.value = ''
    pastParticiple.current.value = ''
    verbForms.resetStyle(pastSimple.current)
    verbForms.resetStyle(pastParticiple.current)
  }, [verbForms])

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
          onChange={handlePastSimpleChange}
        />
        <TextField
          ref={pastParticiple}
          id="pastParticiple"
          inputProps={{
            type: 'text',
            placeholder: 'Past Participle...',
            disabled: !verbForms.infinitive ? true : false
          }}
          onChange={handlePastParticipleChange}
        />
      </div>
      <Button click={handleGenerateVerb}>New Verb</Button>
      <p className="text-gray-400">Press <b>'Enter'</b> to next verb...</p>
    </div>
  )
}

export default Verbs