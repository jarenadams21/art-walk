import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const ProtectedRoute = ({ children }: { children: React.ReactNode 
}) => {

    const { user } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if(!user) {
            router.push('/login')
        }
    }, [router.push, user])

    return <> {user ? children : null} </>
}

export default ProtectedRoute