import VocabularyQuiz from 'components/VocabularyQuiz/VocabularyQuiz'
import { ProgressContextProvider } from 'components/Progress/progress.context'

export default function VocabularyQuizView() {
  return (
    <section>
      <ProgressContextProvider>
        <VocabularyQuiz />
      </ProgressContextProvider>
    </section>
  )
}
