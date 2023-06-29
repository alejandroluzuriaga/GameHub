import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Home from '../src/pages/Home'
import TicTacToe from '../src/pages/TicTacToe'
import Hangman from '../src/pages/Hangman'
import Sudoku from '../src/pages/Sudoku'
import NotFound from '../src/pages/NotFound'

function App() {

  return (
    <div className='layout'>
      <NavBar/>
      <Routes>
          <Route path="/" element={<Home />} index/>
          <Route path="/tictactoe" element={<TicTacToe />} />
          <Route path="/hangman" element={<Hangman />} />
          <Route path="/sudoku" element={<Sudoku />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App
