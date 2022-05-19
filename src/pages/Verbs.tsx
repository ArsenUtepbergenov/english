import { useEffect, useRef, useLayoutEffect, useState } from 'react'
import { Grid, Typography } from '@mui/material'
import DefaultTextField from 'components/Fields/DefaultTextField'
import DefaultButton from 'components/Buttons/DefaultButton'
import useVerbForms from 'hooks/useVerbForms'
import useCounter from 'hooks/useCounter'
import useLatest from 'hooks/common/useLatest'
import IrregularVerbs from 'components/Containers/IrregularVerbs'
import AnsweredVerbs from 'components/Containers/AnsweredVerbs'

function Verbs() {
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

  const handlePastSimpleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    checkPastSimple(e.target)
  }

  const handlePastParticipleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        setAnsweredVerbs(prev => {
          prev = []
          return prev
        })
      const answer = {
        Infinitive: infinitive,
        'Past Simple (V2)': pastSimple.current.value,
        'Past Participle (V3)': pastParticiple.current.value,
      }
      setAnsweredVerbs(prev => [...prev, ...[answer]])
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
    const handleEnterPress = (e: KeyboardEvent) => {
      if (e.code === 'Enter') latestHandler.current()
    }

    window.addEventListener('keypress', handleEnterPress)

    return () => {
      window.removeEventListener('keypress', handleEnterPress)
    }
  }, [latestHandler])

  return (
    <section>
      <Grid container spacing={2}>
        <Grid container item direction="column" xs={12} md={6} spacing={2}>
          <Grid item xs>
            <DefaultTextField
              inputProps={{
                type: 'text',
                placeholder: 'Infinitive',
                disabled: true,
              }}
              value={infinitive}
            />
          </Grid>
          <Grid item xs>
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
          <Grid item xs>
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
          <Grid item xs>
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                <DefaultButton
                  buttonProps={{ size: 'medium' }}
                  click={() => latestHandler.current()}
                >
                  New Verb
                </DefaultButton>
              </Grid>
              <Grid item xs>
                <Typography noWrap color="text.secondary">
                  Press <b>'Enter'</b> to next...
                </Typography>
              </Grid>
              <Grid item>
                <Typography component="span" color="text.secondary">
                  The answered verbs: <b>{counter.count}</b>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <AnsweredVerbs rows={answeredVerbs} />
        </Grid>
        <Grid item xs={12} md={6}>
          <IrregularVerbs />
        </Grid>
      </Grid>
    </section>
  )
}

export default Verbs
