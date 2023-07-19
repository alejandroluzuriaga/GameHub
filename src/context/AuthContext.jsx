import { createContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children}) =>{
    const [user, setUser] = useLocalStorage("user", null)
    const navigate = useNavigate()

    const login = async (data) =>{
        setUser(data);
        navigate("/home", {replace: true})
    }

    const logout = () =>{
        setUser(null)
        navigate("/login", {replace: true})
    }

    const value = useMemo(() => ({
        user,
        login,
        logout
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }), [user]
    )

    return <AuthContext.Provider value ={value}>{children}</AuthContext.Provider>
}