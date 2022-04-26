
import { useState } from 'react'
import { getNextQuestion } from "assets/img/quiz/quiz"
import { Box, Typography, Grid } from '@mui/material'
import DefaultCard from "components/Cards/DefaultCard"
import DefaultButton from 'components/Buttons/DefaultButton'
import useCounter from 'hooks/useCounter'

const correctAnswerStyle = { outline: '#9fcd69 solid 4px' }

function VocabularyQuiz() {
  const counter = useCounter()
  const [question, setQuestion] = useState(() => getNextQuestion(0))
  const [userAnswerId, setUserAnswerId] = useState(null)

  const resetStyle = () => {
    question?.answers?.forEach(item => item.style = {})
  }

  const highlightCard = (id) => {
    resetStyle()
    const temp = question?.answers?.find(item => item.id === id)
    if (temp) temp.style = correctAnswerStyle
    setQuestion({ ...question, ...temp })
  }

  const handleCardClick = (id) => {
    highlightCard(id)
    setUserAnswerId(id)
  }

  const handleAnswer = () => {
    if (question.correctId === userAnswerId) {
      setQuestion(getNextQuestion())
      resetStyle()
      setUserAnswerId(null)
      counter.add(1)
    }
  }

  return (
    <section>
      <Box mb={1}>
        <Box mb={3}>
          <Typography variant='h4' align='center' color="text.secondary">
            Select translation of "{question?.word}"
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {
            question?.answers?.map(answer => (
              <Grid key={answer.text} item xs={12} md={4}>
                <DefaultCard
                  img={answer.img}
                  title={answer.text}
                  style={answer.style}
                  click={() => handleCardClick(answer.id)}
                />
              </Grid>
            ))
          }
        </Grid>
      </Box>
      <Box mt={3}>
        <Grid container justifyContent="flex-end" alignItems="center" spacing={2}>
          <Grid item>
            <Typography variant='h6' noWrap color="text.secondary">Score: {counter.count}</Typography>
          </Grid>
          <Grid item>
            <DefaultButton click={handleAnswer} buttonProps={{ disabled: userAnswerId === null }}>Submit</DefaultButton>
          </Grid>
        </Grid>
      </Box>
    </section>
  )
}

export default VocabularyQuiz