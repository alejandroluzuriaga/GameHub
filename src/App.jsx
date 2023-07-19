import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Background from './components/Background/Background'
import NavBar from './components/NavBar/NavBar'
import Home from '../src/pages/Home'
import TicTacToe from '../src/pages/TicTacToe'
import Hangman from '../src/pages/Hangman'
import Sudoku from '../src/pages/Sudoku'
import NotFound from '../src/pages/NotFound'
import Footer from './components/Footer/Footer'
import {AuthProvider } from './context/AuthContext'
import RequireAuth from './components/RequireAuth'
import RegisteredAuth from './components/RegisteredAuth'
// import NavBarLogin from './components/NavBar/NavBarLogin'

function App() {
  return (
    <AuthProvider>
      <div className="parent">
        <Background />
        <NavBar />
        <main className='layout' id='layout'>
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/login" element={<RegisteredAuth><Login /></RegisteredAuth>} />
            <Route
              path="/home"
              element={<RequireAuth><Home name="Gamer" /></RequireAuth>}
            />
            <Route
              path="/tictactoe"
              element={<RequireAuth><TicTacToe /></RequireAuth>}
            />
            <Route
              path="/hangman"
              element={<RequireAuth><Hangman /></RequireAuth>}
            />
            <Route
              path="/sudoku"
              element={<RequireAuth><Sudoku /></RequireAuth>}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App
