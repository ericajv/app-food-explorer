import { createContext, useContext, useState, useEffect } from "react"

import { api } from "../services/api"

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [data, setData] = useState({})

    async function signIn({ email, password }) {
        try {
            const response = await api.post("/sessions", { email, password })

            const { user, token } = response.data

            localStorage.setItem("@foodexplorer.user", JSON.stringify(user))
            localStorage.setItem("@foodexplorer.token", token)

            api.defaults.headers.common["Authorization"] = `Bearer ${token}`

            setData({ user, token })
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Ocorreu um erro no login")
            }
        }
    }

    async function signOut() {
        localStorage.removeItem("@foodexplorer.user")
        localStorage.removeItem("@foodexplorer.token")

        setData({})
    }

    useEffect(() => {
        const user = localStorage.getItem("@foodexplorer.user")
        const token = localStorage.getItem("@foodexplorer.token")

        if (!token || !user) {
            return
        }

        api.defaults.headers.common["Authorization"] = `Bearer ${token}`

        setData({ user: JSON.parse(user), token })
    }, [])

    return (
        <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
            { children }
        </AuthContext.Provider>
    )
}

function useAuth() {
    return useContext(AuthContext)
}

export { AuthProvider, useAuth }