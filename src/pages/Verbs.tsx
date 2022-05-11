import { useEffect, useRef, useLayoutEffect, useState } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import DefaultTextField from 'components/Fields/DefaultTextField'
import DefaultButton from 'components/Buttons/DefaultButton'
import useVerbForms from 'hooks/useVerbForms'
import useCounter from 'hooks/useCounter'
import useLatest from 'hooks/common/useLatest'
import IrregularVerbs from 'components/Containers/IrregularVerbs'
import AnsweredVerbs from 'components/Containers/AnsweredVerbs'

const Verbs = () => {
  const { infinitive, checkPastSimple, checkPastParticiple, nextVerb, check } = useVerbForms()
  const [answeredVerbs, setAnsweredVerbs] = useState(() => [
    {
      Infinitive: '-',
      'Past Simple (V2)': '-',
      'Past Participle (V3)': '-',
    },
  ])
  const counter = useCounter()
  const pastSimple = useRef<any>(null)
  const pastParticiple = useRef<any>(null)

  const handlePastSimpleChange = (e: any) => {
    checkPastSimple(e.target)
  }

  const handlePastParticipleChange = (e: any) => {
    checkPastParticiple(e.target)
  }

  const reset = () => {
    pastSimple.current.value = ''
    pastParticiple.current.value = ''
    pastSimple.current.style = ''
    pastParticiple.current.style = ''
  }

  const handleNextVerb = () => {
    if (check(pastSimple.current.value, pastParticiple.current.value)) {
      if (counter.count <= 0)
        setAnsweredVerbs((prev) => {
          prev = []
          return prev
        })
      const answer = {
        Infinitive: infinitive,
        'Past Simple (V2)': pastSimple.current.value,
        'Past Participle (V3)': pastParticiple.current.value,
      }
      setAnsweredVerbs((prev) => [...prev, ...[answer]])
      counter.add(1)
    }
    nextVerb()
    reset()
  }

  useLayoutEffect(() => {
    pastSimple.current.focus()
  })

  const latestHandler = useLatest(handleNextVerb)

  useEffect(() => {
    const handleEnterPress = (e: any) => {
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
        <Grid item xs={12} sm={4}>
          <DefaultTextField
            inputProps={{
              type: 'text',
              placeholder: 'Infinitive',
              disabled: true,
            }}
            value={infinitive}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
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
        <Grid item xs={12} sm={4}>
          <DefaultTextField
            ref={pastParticiple}
            inputProps={{
              type: 'text',
              placeholder: 'Past Participle...',
              disabled: !infinitive,
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
            <Typography noWrap color="text.secondary">
              Press <b>'Enter'</b> to next...
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box mt={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <AnsweredVerbs rows={answeredVerbs} score={counter.count} />
          </Grid>
          <Grid item xs={12} md={6}>
            <IrregularVerbs />
          </Grid>
        </Grid>
      </Box>
    </section>
  )
}

export default Verbs
