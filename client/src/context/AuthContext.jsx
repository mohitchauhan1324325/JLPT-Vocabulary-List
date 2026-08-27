import React, {
    createContext,
    useContext,
    useState,
} from "react";

import api from "../api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("jlpt_user");

        return savedUser ? JSON.parse(savedUser) : null;
    });

    const [token, setToken] = useState(() => {
        return localStorage.getItem("jlpt_token");
    });

    // Login
    const login = async (email, password) => {
        const response = await api.post("/auth/login", {
            email,
            password,
        });

        const { token: newToken, user: loggedInUser } =
            response.data;

        localStorage.setItem("jlpt_token", newToken);
        localStorage.setItem(
            "jlpt_user",
            JSON.stringify(loggedInUser)
        );

        setToken(newToken);
        setUser(loggedInUser);

        return response.data;
    };

    // Register
    const register = async (name, email, password) => {
        const response = await api.post("/auth/register", {
            name,
            email,
            password,
        });

        const { token: newToken, user: newUser } =
            response.data;

        localStorage.setItem("jlpt_token", newToken);
        localStorage.setItem(
            "jlpt_user",
            JSON.stringify(newUser)
        );

        setToken(newToken);
        setUser(newUser);

        return response.data;
    };

    // Logout
    const logout = () => {
        localStorage.removeItem("jlpt_token");
        localStorage.removeItem("jlpt_user");

        setToken(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                login,
                register,
                logout,
                isAuthenticated: !!token,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error(
            "useAuth must be used inside AuthProvider"
        );
    }

    return context;
}