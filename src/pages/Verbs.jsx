import { useCallback, useEffect, useRef } from 'react'
import DefaultTextField from 'components/Fields/DefaultTextField'
import useVerbForms from 'hooks/useVerbForms'
import useCounter from 'hooks/useCounter'
import DefaultButton from 'components/Buttons/DefaultButton'
import { Box, Grid, Typography } from '@mui/material'

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
    <section>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={4}>
          <DefaultTextField
            id="infinitive"
            inputProps={{ type: 'text', placeholder: 'Infinitive', disabled: true }}
            value={verbForms.infinitive}
          />
        </Grid>
        <Grid item xs={4}>
          <DefaultTextField
            ref={pastSimple}
            id="pastSimple"
            inputProps={{
              type: 'text',
              placeholder: 'Past Simple...',
              disabled: !verbForms.infinitive ? true : false
            }}
            change={handlePastSimpleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <DefaultTextField
            ref={pastParticiple}
            id="pastParticiple"
            inputProps={{
              type: 'text',
              placeholder: 'Past Participle...',
              disabled: !verbForms.infinitive ? true : false
            }}
            change={handlePastParticipleChange}
          />
        </Grid>
      </Grid>
      <Box mt={2}>
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <DefaultButton click={handleGenerateVerb}>New Verb</DefaultButton>
          </Grid>
          <Grid item>
            <Typography variant='h6' color="text.secondary">Score: {counter.count}</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box mt={2}>
        <Typography noWrap color="text.secondary">Press <b>'Enter'</b> to next verb...</Typography>
      </Box>
    </section>
  )
}

export default Verbs