import { Route, Routes, Navigate } from 'react-router-dom';
// import AddUser from './features/users/AddUser';
import Verbs from './pages/Verbs';
import VocabularyQuiz from './pages/VocabularyQuiz';
// import EditUser from './features/users/EditUser';
// import UserList from './features/users/UserList'
import Header from './components/Header'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        {/* <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} /> */}
        <Route
          path="/"
          element={<Navigate to="/forms-verb" replace />}
        />
        <Route path="/forms-verb" element={<Verbs />} />
        <Route path="/vocabulary-quiz" element={<VocabularyQuiz />} />
      </Routes>
    </div>
  );
}

export default App;
