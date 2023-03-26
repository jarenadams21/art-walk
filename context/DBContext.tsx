import { createContext, useContext, useEffect, useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { getAuth, updateProfile } from "firebase/auth"
import router from 'next/router'


// Context that wraps app
const DBContext = createContext<any>({})

// Used to extract value from value object
export const useDB = () => useContext(DBContext)

// useEffect
export const DBContextProvider = ({
    children
   } : {
        children: React.ReactNode
    }) => {
        const auth = getAuth()
        const user = auth.currentUser
        
        const changeName = async (name: string, page:string) => {
           
            if(user) {
            updateProfile(user, {
                displayName: name,
                photoURL: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/226.png',
            })
            router.reload()
        }
    }
    // User value is the user value we have in state from AuthContextProvider
    return (
        <DBContext.Provider value={{ changeName }}>
            {children}
        </DBContext.Provider>
    )

}
