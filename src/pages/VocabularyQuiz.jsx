import { useState } from 'react'
import { Box, Typography, Grid } from '@mui/material'
import DefaultCard from 'components/Cards/DefaultCard'
import Score from 'components/Score/Score'
import DefaultButton from 'components/Buttons/DefaultButton'
import useCounter from 'hooks/useCounter'
import { getNextQuestion } from 'assets/img/quiz/quiz'

const correctAnswerStyle = '#9fcd69 solid 4px'
const initialQuestion = getNextQuestion(0)

function VocabularyQuiz() {
  const counter = useCounter()
  const [question, setQuestion] = useState(initialQuestion)
  const [userAnswerId, setUserAnswerId] = useState(null)

  const handleCardClick = (id) => {
    setUserAnswerId(id)
  }

  const handleAnswer = () => {
    if (question.correctId === userAnswerId) {
      setQuestion(getNextQuestion())
      setUserAnswerId(null)
      counter.add(1)
    }
  }

  return (
    <section>
      <Box mb={1}>
        <Box mb={3}>
          <Typography variant="h4" align="center" color="text.secondary">
            Select translation of "{question?.word}"
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {question?.answers?.map(({ id, img, text }) => (
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
      <Box mt={3}>
        <Grid container justifyContent="flex-end" alignItems="center" spacing={2}>
          <Grid item>
            <Score value={counter.count} />
          </Grid>
          <Grid item>
            <DefaultButton click={handleAnswer} buttonProps={{ disabled: userAnswerId === null }}>
              Submit
            </DefaultButton>
          </Grid>
        </Grid>
      </Box>
    </section>
  )
}

export default VocabularyQuiz
