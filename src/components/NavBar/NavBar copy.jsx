
import {NavLink, useNavigate} from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth';
import './navbar.css'

const NavBar = () => {

  const {user, logout, login} = useAuth()
  const navigate = useNavigate()

  return (
    <header className="header-container">
      <nav>
        <ul className="nav-links nav-active">
          <li>
            <NavLink
              style={({ isActive }) => {
                return isActive
                  ? {
                      textTransform: "uppercase",
                      color: "white",
                      textDecorationLine: "underline",
                    }
                  : {};
              }}
              to="/home"
            >
              <p className="navbar-element">Home</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return isActive
                  ? {
                      textTransform: "uppercase",
                      color: "white",
                      textDecorationLine: "underline",
                    }
                  : {};
              }}
              to="/tictactoe"
            >
              <p className="navbar-element">TicTacToe</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return isActive
                  ? {
                      textTransform: "uppercase",
                      color: "white",
                      textDecorationLine: "underline",
                    }
                  : {};
              }}
              to="/hangman"
            >
              <p className="navbar-element">Hangman</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return isActive
                  ? {
                      textTransform: "uppercase",
                      color: "white",
                      textDecorationLine: "underline",
                    }
                  : {};
              }}
              to="/sudoku"
            >
              <p className="navbar-element">Sudoku</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar