import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { updateProfile, getAuth } from "firebase/auth";
import React from "react";
import Timeline from "./components/TimeBranch";
import UserCard from './components/UserCard';
import styles from '@/styles/Home.module.css'
import Navbar from "./components/Navbar";


const profile = () => {

    return (
        <div className={styles.profilePageStyles}>
            <Navbar/>
            <div className={styles.profilePageStylesMain}>
            <UserCard/>
            <Timeline/>
            </div>
        </div>
    )
}


export default profile;