import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Asegúrate de importar tu contexto de autenticación

// eslint-disable-next-line react/prop-types
const RegisteredAuth = ({ children }) => {
    const { user } = useContext(AuthContext);
    function isAuthenticated() {
        return user?.username === 'Test';
      }
    
      if (isAuthenticated()){
        return <Navigate to="/home" replace />
      } 
      return children
    }

export default RegisteredAuth