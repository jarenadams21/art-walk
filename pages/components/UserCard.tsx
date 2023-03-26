import { Card, Group, Image, Text, Badge, Button } from "@mantine/core"
import { getAuth, updateProfile } from "firebase/auth"

const UserCard = () => {

    const auth = getAuth()
    const user = auth.currentUser
    
    const handleUpdates = async () => {
       
        if(user) {
        updateProfile(user, {
            displayName: 'jaren',
            photoURL: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/226.png',
        })
    }
    }

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
        <Text weight={500}>{user.displayName}</Text>
        <Text weight={500}>{user.email}</Text>
        <Text weight={500}>{user.uid}</Text>
        <Badge color="pink" variant="light">
          Badge
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        Bio goes here
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Edit Profile
      </Button>
    </Card>
        </>
    )
}

export default UserCard;