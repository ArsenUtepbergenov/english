import { Route, Routes, Navigate } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import Verbs from 'pages/Verbs'
import VocabularyQuiz from 'pages/VocabularyQuiz'
import Dictionary from 'pages/Dictionary'
import Header from 'layout/Header'
import Container from '@mui/material/Container'

function App() {
  return (
    <div>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg" sx={{ mt: '20px' }}>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/forms-verb" replace />}
          />
          <Route path="/forms-verb" element={<Verbs />} />
          <Route path="/vocabulary-quiz" element={<VocabularyQuiz />} />
          <Route path="/dictionary" element={<Dictionary />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
