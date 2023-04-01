import { Button } from "@mantine/core"
import styles from '@/styles/Home.module.css'
import { useDB } from "@/context/DBContext"
import { auth } from "@/config/firebase"


export default function () {

    const { addToDB, handleDBUpdate } = useDB()

    return (
        <div className={styles.headers}>
            <h1>Playground</h1>
            <Button
                onClick={ async () => {
                    
                     addToDB("users", {

                        username: "bingus"
                     })
                }}
            >
                Click Me For Adding to DB!</Button>
                <Button
                onClick={ async () => {
                    
                     handleDBUpdate("users", 'uyfsnCnzETTo6t9uDSOJ', {

                         friends: [1, 2],
                     })
                }}
            >
                Click Me For Updating DB!</Button>
                
        </div>
    )
}