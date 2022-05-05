import { useState, useRef } from 'react'
import { Box, Typography, Grid } from '@mui/material'
import DefaultCard from 'components/Cards/DefaultCard'
import Score from 'components/Score/Score'
import DefaultButton from 'components/Buttons/DefaultButton'
import useCounter from 'hooks/useCounter'
import { getNextQuestion } from 'assets/img/quiz/quiz'

const correctAnswerStyle = { outline: '#9fcd69 solid 4px' }
const initialQuestion = getNextQuestion(0)

function VocabularyQuiz() {
  const counter = useCounter()
  const [question, setQuestion] = useState(initialQuestion)
  const userAnswerId = useRef(null)

  const resetStyle = () => {
    question?.answers?.forEach((item) => (item.style = {}))
  }

  const highlightCard = (id) => {
    resetStyle()
    const temp = question?.answers?.find((item) => item.id === id)
    if (temp) temp.style = correctAnswerStyle
    setQuestion({ ...question, ...temp })
  }

  const handleCardClick = (id) => {
    highlightCard(id)
    userAnswerId.current = id
  }

  const handleAnswer = () => {
    if (question.correctId === userAnswerId.current) {
      setQuestion(getNextQuestion())
      resetStyle()
      userAnswerId.current = null
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
          {question?.answers?.map((answer) => (
            <Grid key={answer.text} item xs={12} md={4}>
              <DefaultCard
                img={answer.img}
                title={answer.text}
                style={answer.style}
                click={() => handleCardClick(answer.id)}
              />
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
            <DefaultButton
              click={handleAnswer}
              buttonProps={{ disabled: userAnswerId.current === null }}
            >
              Submit
            </DefaultButton>
          </Grid>
        </Grid>
      </Box>
    </section>
  )
}

export default VocabularyQuiz
