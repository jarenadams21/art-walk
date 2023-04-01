import { useAuth } from '@/context/AuthContext'
import { Box, Button, Checkbox, Group, TextInput } from '@mantine/core'
import React, { useState } from 'react'
import { HiCursorArrowRipple } from 'react-icons/hi2'
import styles from '@/styles/Home.module.css'
import { useForm } from '@mantine/form'
import { useRouter } from 'next/router'
import { useDB } from '@/context/DBContext'

const Signup = () => {
  const { user, signup } = useAuth()
  const [data, setData] = useState({
    email: '',
    password: '',
  })
  const router = useRouter()
  const {handleDBUpdate} = useDB()

  const handleSignup = async (email: string, password: string) => {
    try {   
        await signup(email, password)
    } catch (err) {
        console.log(err)
    }

    try {
      await handleDBUpdate("users", "" + user.uid, {
        email,
        password,
        id: user.uid,
        displayName: "",
        works: [],
        friends: []
      })
    } catch (err) {
      console.log(err)
    }

    console.log(data)
  }

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <div className={styles.signupPageStyles}>
    <h1 className={styles.userAuthHeader}>Signup</h1>
    <Box maw={300} mx="auto" my='4'>
      <form onSubmit={form.onSubmit((values) => 
        {handleSignup(values.email, values.password)})}>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />
        <TextInput
          withAsterisk
          label="Password (6 character minimum)"
          placeholder="123456 (not ideal)"
          {...form.getInputProps('password')}
        />
        <Group position="right" mt="md">
          <Button type="submit">Signup</Button>
        </Group>
      </form>
    </Box>
    <div className={styles.userAuthSwitch}>
    <h2>Head back to login</h2>
    <HiCursorArrowRipple onClick={() => router.push('/login')} className={styles.iconClick} size={30}/>
    </div>
    </div>
  );
}

export default Signup