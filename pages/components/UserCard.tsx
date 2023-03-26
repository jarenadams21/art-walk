import { Card, Group, TextInput, Loader, Image, Text, Badge, Button } from "@mantine/core"
import { useDB } from "@/context/DBContext";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

const UserCard = () => {

    const { user } = useAuth()
    const { changeName } = useDB()
    const [isEditing, setIsEditing] = useState(false)
    const [visibleName, setVisibleName] = useState('')

    return (
        <>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={user.photoURL}
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
          { !isEditing ? (
        <Text weight={500}>{user.displayName}</Text>) : (
        <TextInput
        placeholder={user.displayName}
        rightSection={<Loader onClick={() => {
            changeName(visibleName, '/profile')
            setIsEditing(false)

        }} color="teal" size="xs" variant="bars" />} 
        
        value={visibleName}
        onChange={(e) => setVisibleName(e.target.value)}
         />
        )
          }
        <Text weight={500}>{user.email}</Text>
        <Text weight={500}>{user.uid}</Text>
        <Badge color="pink" variant="light">
          Badge
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        Bio goes here
      </Text>

      <Button
       variant="light" 
       color="blue" 
       fullWidth 
       mt="md" 
       radius="md"
       onClick={() => setIsEditing(!isEditing)}
       >
        {isEditing ? (<> Cancel </>) : (<> Edit Profile </>)}
      </Button>
    </Card>
        </>
    )
}

export default UserCard;