import { Route, Routes, Navigate } from 'react-router-dom'
import { Box, CssBaseline, Container } from '@mui/material'
import Verbs from 'pages/Verbs'
import VocabularyQuiz from 'pages/VocabularyQuiz'
import Dictionary from 'pages/Dictionary'
import Tenses from 'pages/Tenses'
import Login from 'pages/Login'
import Header from 'layout/Header'
import Register from 'pages/Register'
import { useAuth } from 'hooks/useAuth'
import { useAppSelector } from 'hooks/redux/redux'

function App() {
  useAuth()

  const isAuthLoading = useAppSelector(state => state.user.isLoading)

  return (
    <Box sx={{ height: '100vh' }}>
      <CssBaseline />
      <Header isAuthLoading={isAuthLoading} />
      <Container maxWidth="lg" sx={{ mt: '20px' }}>
        <Routes>
          <Route path="/" element={<Navigate to="/forms-verb" replace />} />
          <Route path="/forms-verb" element={<Verbs />} />
          <Route path="/vocabulary-quiz" element={<VocabularyQuiz />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/tenses" element={<Tenses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Container>
    </Box>
  )
}

export default App
