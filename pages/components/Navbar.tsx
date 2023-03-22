import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/router'
import styles from '@/styles/Home.module.css'

const NavbarComp = () => {
    const {user, logout} = useAuth()
    const router = useRouter()
  return (   
          <Nav className="me-auto"> 
          <div className={styles.mainNavbar}>
                <h1>
                  ArtWalk
                </h1>
         
            {user ? (
               <Nav.Link
               onClick={ () => {
                   logout()
                   router.push('/login')
               }}
               >
                   Logout
                </Nav.Link>       
            ) : (
            <>
                <Link href="/signup" passHref>
                  <Nav.Link>Signup</Nav.Link>
                </Link>
                <Link href="/login" passHref>
                  <Nav.Link>Login</Nav.Link>
                </Link>   
                </>
                )}
                 </div>
          </Nav>
  )
}

export default NavbarComp