
import { useState } from 'react'
import { getNextQuestion } from "assets/img/quiz/quiz"
import Card from "components/Cards/Card"
import Button from 'components/Buttons/Button'
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
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-gray-500">
      <div>
        <h1 className="text-center text-3xl mt-8">Select translation of "{question?.word}"</h1>
        <div className="grid grid-cols-3 gap-5 grid-flow-row auto-rows-auto mt-8">
          {
            question?.answers?.map(answer => (
              <Card
                key={answer.text}
                img={answer.img}
                title={answer.text}
                style={answer.style}
                click={() => handleCardClick(answer.id)}
              />
            ))
          }
        </div>
      </div>
      <div className='flex justify-end items-center mt-6'>
        <p className='mr-10'><b>Score: {counter.count}</b></p>
        <Button click={handleAnswer} buttonProps={{ disabled: userAnswerId === null }}>Submit</Button>
      </div>
    </div>
  )
}

export default VocabularyQuiz