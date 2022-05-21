import { Box, Grid, Typography } from '@mui/material'
import { Answer, getNextQuestion, numberQuestions } from 'assets/img/quiz/quiz'
import DefaultButton from 'components/Buttons/DefaultButton'
import DefaultCard from 'components/Cards/DefaultCard'
import Progress from 'components/Progress/Progress'
import { INCREASE, ProgressContext } from 'components/Progress/progress.context'
import { useSnackbar, VariantType } from 'notistack'
import { useContext, useState } from 'react'
import { getSuccessfulMessage } from 'utils'

const correctAnswerStyle = '#9fcd69 solid 4px'
const increasedValue = 100 / numberQuestions
const initialQuestion = getNextQuestion(0)

function VocabularyQuiz() {
  const { dispatch } = useContext(ProgressContext)
  const [question, setQuestion] = useState(initialQuestion)
  const [userAnswerId, setUserAnswerId] = useState<number | null>(null)
  const { enqueueSnackbar } = useSnackbar()

  const showAnswerState = (text = '', variant: VariantType = 'default') => {
    enqueueSnackbar(text, { preventDuplicate: true, variant })
  }

  const handleCardClick = (id: number) => {
    setUserAnswerId(id)
  }

  const handleAnswer = () => {
    if (question.correctId === userAnswerId) {
      setQuestion(getNextQuestion())
      setUserAnswerId(null)
      dispatch({ type: INCREASE, value: increasedValue })
      showAnswerState(getSuccessfulMessage(), 'success')
    } else {
      showAnswerState('The answer is wrong!', 'error')
    }
  }

  return (
    <>
      <Box mb={1}>
        <Box mb={2}>
          <Typography variant="h4" align="center" color="text.secondary">
            Select translation of "{question?.word}"
          </Typography>
        </Box>

        <Box mb={3}>
          <Progress />
        </Box>
        <Grid container spacing={3}>
          {question?.answers?.map(({ id, img, text }: Answer) => (
            <Grid key={text} item xs={12} md={4}>
              <Box
                sx={{ minWidth: '300px', width: 'max-content', margin: 'auto' }}
                style={{
                  outline: id === userAnswerId ? `${correctAnswerStyle}` : '',
                }}
                onClick={() => handleCardClick(id)}
              >
                <DefaultCard img={img} title={text} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
        <DefaultButton
          click={handleAnswer}
          buttonProps={{ size: 'medium', disabled: userAnswerId === null }}
        >
          Submit
        </DefaultButton>
      </Box>
    </>
  )
}

export default VocabularyQuiz
