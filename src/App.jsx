import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Background from './components/Background/Background'
import NavBar from './components/NavBar/NavBar'
import Home from '../src/pages/Home'
import TicTacToe from '../src/pages/TicTacToe'
import Hangman from '../src/pages/Hangman'
import Sudoku from '../src/pages/Sudoku'
import NotFound from '../src/pages/NotFound'
import Footer from './components/Footer/Footer'
// import NavBarLogin from './components/NavBar/NavBarLogin'

function App() {
  return (
    <div className="parent">
        <Background/>
        <NavBar/>
      <main className='layout'>
        <Routes>
            <Route path="/login" index element={<Login/>}/>
            <Route path="/home" element={<Home name='Gamer'/>}/>
            <Route path="/tictactoe" element={<TicTacToe />} />
            <Route path="/hangman" element={<Hangman />} />
            <Route path="/sudoku" element={<Sudoku />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App
