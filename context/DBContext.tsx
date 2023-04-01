import { createContext, useContext, useEffect, useState } from 'react'
import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore'
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

    /*
    const addToDB = async (collectionName: string, id:string, payload: any) => {
        
        console.log(collectionName)
        if(collectionName.length > 0 && payload !== null) {
        await addDoc(collection(db, collectionName), {
            payload,
        })
        console.log("Doc written with ID:")
    }
    }
    */

    const handleDBUpdate = async (collectionName: string, id: string, payload: any) => {

        console.log(collectionName)
        console.log(id)
        console.log(payload)
        // checkExistence()
        await setDoc(doc(db, collectionName, "" + id), {
            payload,
        }, { merge: true })

    }

    const handleDBRead = async (collectionName: string, id: string) => {

        const snapshot = await getDoc(doc(db, collectionName, "" + id))
        if (snapshot.exists()) {
            console.log(snapshot.data())
            return snapshot.data()
        } else {
            console.log("No such document...")
            return null
        }
    }

    // User value is the user value we have in state from AuthContextProvider
    return (
        <DBContext.Provider value={{ changeName, handleDBUpdate, handleDBRead }}>
            {children}
        </DBContext.Provider>
    )

}
