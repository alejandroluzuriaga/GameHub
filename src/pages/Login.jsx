import '../PagesCSS/Login/login.css'

const Login = () => {
    return (
    <section className="login-page-container">
    <div className="form">
        <div className="form-upper-part">
            <svg xmlns="http://www.w3.org/2000/svg" className="login-form-icon" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity={0.6}>
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
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
                    <p className='login-text-p'>password</p>
                </div>
            </div>
        </div>
        <div className="title">Log In</div>
        <div className="input-container ic1">
            <input id="firstname" className="input" type="text" placeholder=" " />
            <div className="cut"></div>
            <label htmlFor="firstname" className="placeholder">User</label>
        </div>
        <div className="input-container ic2">
            <input id="lastname" className="input" type="password" placeholder=" " />
            <div className="cut"></div>
            <label htmlFor="lastname" className="placeholder">Password</label>
        </div>
        <button type="text" className="submit">Submit</button>
    </div>
    </section>
    );
  };

export default Login