import { useEffect, useRef, useLayoutEffect } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import DefaultTextField from 'components/Fields/DefaultTextField'
import DefaultButton from 'components/Buttons/DefaultButton'
import Score from 'components/Score/Score'
import useVerbForms from 'hooks/useVerbForms'
import useCounter from 'hooks/useCounter'
import useLatest from 'hooks/common/useLatest'
import IrregularVerbs from 'components/Containers/IrregularVerbs'

const Verbs = () => {
  const { infinitive, checkPastSimple, checkPastParticiple, nextVerb, check } = useVerbForms()
  const counter = useCounter()
  const pastSimple = useRef(null)
  const pastParticiple = useRef(null)

  const handlePastSimpleChange = (e) => {
    checkPastSimple(e.target)
  }

  const handlePastParticipleChange = (e) => {
    checkPastParticiple(e.target)
  }

  const reset = () => {
    pastSimple.current.value = ''
    pastParticiple.current.value = ''
    pastSimple.current.style = ''
    pastParticiple.current.style = ''
  }

  const handleNextVerb = () => {
    if (check(pastSimple.current.value, pastParticiple.current.value)) counter.add(1)
    nextVerb()
    reset()
  }

  useLayoutEffect(() => {
    pastSimple.current.focus()
  })

  const latestHandler = useLatest(handleNextVerb)

  useEffect(() => {
    const handleEnterPress = (e) => {
      if (e.keyCode === 13) latestHandler.current()
    }

    window.addEventListener('keypress', handleEnterPress)

    return () => {
      window.removeEventListener('keypress', handleEnterPress)
    }
  }, [latestHandler])

  return (
    <section>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={4}>
          <DefaultTextField
            inputProps={{
              type: 'text',
              placeholder: 'Infinitive',
              disabled: true,
            }}
            value={infinitive}
          />
        </Grid>
        <Grid item xs={4}>
          <DefaultTextField
            ref={pastSimple}
            inputProps={{
              type: 'text',
              placeholder: 'Past Simple...',
              disabled: !infinitive ? true : false,
            }}
            change={handlePastSimpleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <DefaultTextField
            ref={pastParticiple}
            inputProps={{
              type: 'text',
              placeholder: 'Past Participle...',
              disabled: !infinitive ? true : false,
            }}
            change={handlePastParticipleChange}
          />
        </Grid>
      </Grid>
      <Box mt={2}>
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <DefaultButton click={() => latestHandler.current()}>New Verb</DefaultButton>
          </Grid>
          <Grid item>
            <Score value={counter.count} />
          </Grid>
        </Grid>
      </Box>
      <Box mt={2}>
        <Typography noWrap color="text.secondary">
          Press <b>'Enter'</b> to next verb...
        </Typography>
      </Box>
      <Box mt={2}>
        <IrregularVerbs />
      </Box>
    </section>
  )
}

export default Verbs
