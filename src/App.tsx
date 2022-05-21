import { Box, Container, CssBaseline } from '@mui/material'
import { useAppSelector } from 'hooks/redux/redux'
import { useAuth } from 'hooks/useAuth'
import Header from 'layout/Header'
import Dictionary from 'pages/Dictionary'
import Login from 'pages/Login'
import Register from 'pages/Register'
import Tenses from 'pages/Tenses'
import Verbs from 'pages/Verbs'
import VocabularyQuizView from 'pages/VocabularyQuizView'
import { Navigate, Route, Routes } from 'react-router-dom'

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
          <Route path="/vocabulary-quiz" element={<VocabularyQuizView />} />
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
