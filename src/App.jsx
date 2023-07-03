import './App.css'
import { Routes, Route } from 'react-router-dom'
import Background from './components/Background/Background'
import NavBar from './components/NavBar/NavBar'
import Home from '../src/pages/Home'
import TicTacToe from '../src/pages/TicTacToe'
import Hangman from '../src/pages/Hangman'
import Sudoku from '../src/pages/Sudoku'
import NotFound from '../src/pages/NotFound'

function App() {
  return (
    <div className="parent">
        <Background/>
        <NavBar/>
      <main className='layout'>
        <Routes>
            <Route path="/home" element={<Home name='Test'/>} index/>
            <Route path="/tictactoe" element={<TicTacToe />} />
            <Route path="/hangman" element={<Hangman />} />
            <Route path="/sudoku" element={<Sudoku />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App
