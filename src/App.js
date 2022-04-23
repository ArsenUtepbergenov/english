import { Route, Routes, Navigate } from 'react-router-dom'
import Verbs from 'pages/Verbs'
import VocabularyQuiz from 'pages/VocabularyQuiz'
import Dictionary from 'pages/Dictionary'
import Header from 'components/Header'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/forms-verb" replace />}
        />
        <Route path="/forms-verb" element={<Verbs />} />
        <Route path="/vocabulary-quiz" element={<VocabularyQuiz />} />
        <Route path="/dictionary" element={<Dictionary />} />
      </Routes>
    </div>
  );
}

export default App;
