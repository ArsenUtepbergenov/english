import { Route, Routes, Navigate } from 'react-router-dom'
import { Box, CssBaseline, Container } from '@mui/material'
import Verbs from 'pages/Verbs'
import VocabularyQuiz from 'pages/VocabularyQuiz'
import Dictionary from 'pages/Dictionary'
import Tenses from 'pages/Tenses'
import Header from 'layout/Header'

function App() {
  return (
    <Box sx={{ height: '100vh' }}>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg" sx={{ mt: '20px' }}>
        <Routes>
          <Route path="/" element={<Navigate to="/forms-verb" replace />} />
          <Route path="/forms-verb" element={<Verbs />} />
          <Route path="/vocabulary-quiz" element={<VocabularyQuiz />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/tenses" element={<Tenses />} />
        </Routes>
      </Container>
    </Box>
  )
}

export default App
