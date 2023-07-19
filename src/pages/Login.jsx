import '../PagesCSS/Login/login.css'
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [checkError, setCheckError] = useState(false)

    const { login } = useContext(AuthContext)

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username == 'Test' && password == 'rockthecode'){
            login({ username, password });
        } else{
            setCheckError(true)
        }
    }

    useEffect(() => {
        if (checkError) {
          const timer = setTimeout(() => {
            setCheckError(false);
          }, 1500);
    
          return () => clearTimeout(timer);
        }
      }, [checkError]);

    return (
        <section className="login-page-container">
            <div className="form">
                <div className="form-upper-part">
                    <svg xmlns="http://www.w3.org/2000/svg" className="login-form-icon" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity={0.6}>
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                        <path d="M12 9h.01" />
                        <path d="M11 12h1v4h1" />
                    </svg>
                    <div className='login-text-container'>
                        <div className="login-text-container-element">
                            <h3 className='login-text-h3'>USER:</h3>
                            <p className='login-text-p'>Test</p>
                        </div>
                        <div className="login-text-container-element">
                            <h3 className='login-text-h3'>PASSWORD:</h3>
                            <p className='login-text-p'>rockthecode</p>
                        </div>
                    </div>
                </div>
                <div className="title-login">Log In</div>
                <div className="input-container ic1">
                    <input 
                        id="firstname" 
                        className="input" 
                        type="text" 
                        placeholder=" " 
                        onChange={handleUsernameChange} 
                        maxLength={12}/>
                    <div className="cut"></div>
                    <label 
                        htmlFor="firstname" 
                        className="placeholder">
                        User
                    </label>
                </div>
                <div className="input-container ic2">
                    <input 
                        id="lastname" 
                        className="input" 
                        type="password" 
                        placeholder=" " 
                        onChange={handlePasswordChange} 
                        maxLength={15}/>
                    <div className="cut"></div>
                    <label 
                        htmlFor="lastname" 
                        className="placeholder">
                        Password
                    </label>
                </div>
                {checkError ? (

                    <div className="error-container">
                    <h3 className="error-message">❌Wrong user or password</h3>
                    <h3 className="error-message">Try again</h3>
                </div>
                ) : null}
                <button type="text" className="submit" onClick={handleSubmit}>Submit</button>
            </div>
        </section>
    );
};

export default Login