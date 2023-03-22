import { useAuth } from '@/context/AuthContext'
import { Box, Button, Checkbox, Group, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import Router, { useRouter } from 'next/router'
import React, { useState } from 'react'
import styles from '@/styles/Home.module.css'
import {HiCursorArrowRipple} from 'react-icons/hi2'
import nope from '../media/gifs/horseridinggif.gif'
import Image from 'next/image'

const Login = () => {
  const { user, login } = useAuth()
  const router = useRouter()

  const handleLogin = async (email: string, password: string) => {
    try {
        
        await login(email, password)
        router.push('/')
    } catch (err) {
        console.log(err)
    }
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
    <div className={styles.loginPageStyles}>
      <Image alt='nope' width={140} height={140} src={nope}/>
    <h1 className={styles.userAuthHeader}>Login</h1>
    <Box maw={300} mx="auto" my='4'>
      <form onSubmit={form.onSubmit((values) => {handleLogin(values.email, values.password)})}>
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

        <Checkbox
          mt="md"
          label="I agree to sell my privacy"
          {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        />

        <Group position="right" mt="md">
          <Button type="submit">Login</Button>
        </Group>
      </form>
    </Box>
    <div className={styles.userAuthSwitch}>
    <h2>Don't have a login?</h2>
    <HiCursorArrowRipple onClick={() => router.push('/signup')} className={styles.iconClick} size={30}/>
    </div>
    </div>
  );
}

export default Login