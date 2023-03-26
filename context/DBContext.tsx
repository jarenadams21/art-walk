import { createContext, useContext, useEffect, useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { getAuth, updateProfile } from "firebase/auth"
import router from 'next/router'
import { db } from '@/config/firebase'


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

    const addToDB = async (collection_name: string, payload: any) => {

        try {
            const docRef = await addDoc(collection(db, collection_name), {
               payload 
            });
            console.log("Doc written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding doc: ", e);
        }
    }

    // User value is the user value we have in state from AuthContextProvider
    return (
        <DBContext.Provider value={{ changeName, addToDB }}>
            {children}
        </DBContext.Provider>
    )

}
