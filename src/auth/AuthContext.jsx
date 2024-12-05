import { createContext, useState } from "react";

const AuthContext = createContext({
    isLogin: false,
    setIsLogin: () => {}  
});

const AuthProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <AuthContext.Provider value={{ isLogin, setIsLogin }}>
            {children} 
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
