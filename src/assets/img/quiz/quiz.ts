export type Answer = {
  id: number
  img?: string
  text: string
}

type Question = {
  id: number
  word: string
  correctId: number
  answers: Answer[]
}

const questions: Question[] = [
  {
    id: 1,
    word: 'Гора',
    correctId: 1,
    answers: [
      {
        id: 1,
        img: require('./mountain.jpg'),
        text: 'A mountain',
      },
      {
        id: 2,
        img: require('./landscape.jpg'),
        text: 'A landscape',
      },
      {
        id: 3,
        img: require('./rock.jpg'),
        text: 'A rock',
      },
    ],
  },
  {
    id: 2,
    word: 'Кровать',
    correctId: 3,
    answers: [
      {
        id: 1,
        img: require('./table.jpg'),
        text: 'A table',
      },
      {
        id: 2,
        img: require('./chair.jpg'),
        text: 'A chair',
      },
      {
        id: 3,
        img: require('./bed.jpg'),
        text: 'A bed',
      },
    ],
  },
]

function getQuestion() {
  let i = 0
  return function (initial?: number) {
    if (initial === 0 || i >= questions.length - 1) i = 0
    else i++
    return questions[i]
  }
}

export const getNextQuestion = getQuestion()
export const numberQuestions = questions.length
