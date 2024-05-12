import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './pages/Layout';
import { AddStudentPage } from './pages/AddStudentPage';
import { DashboardPage } from './pages/DashboardPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/add" element={<AddStudentPage />} />
        <Route path="*" element={<DashboardPage />} />
      </Route>
    </Routes>
  )
}

export default App
