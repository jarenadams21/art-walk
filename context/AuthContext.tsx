import { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import { auth } from '@/config/firebase'

// Context that wraps app
const AuthContext = createContext<any>({})

// Used to extract value from value object
export const useAuth = () => useContext(AuthContext)

// useEffect
export const AuthContextProvider = ({
    children
   } : {
        children: React.ReactNode
    }) => {
        const [user, setUser] = useState<any>(null)
        const [loading, setLoading] = useState(true)
        console.log(user)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                })
            } else {
                setUser(null)
            }
            setLoading(false)
        })

        return () => unsubscribe()
    }, [])

    const signup = (email:string, password: string) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email:string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logout =  async () => {
        setUser(null)
        await signOut(auth)
    }



    // User value is the user value we have in state from AuthContextProvider
    return (
        <AuthContext.Provider value={{ user, login, signup, logout }}>
            {loading ? null : children}
        </AuthContext.Provider>
    )


}
