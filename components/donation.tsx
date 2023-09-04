import { API_URL } from "utils/api"; 
import { type Donation } from "utils/types"; 
import { Paper, Text, Stack, Group, Title, Card } from "@mantine/core";
import UserList from "utils/userlist";



export default async function Donation() {
  

  return (
    <Card withBorder shadow="xs" bg="gray.3">
      <Group mb={20}>
        <Title order={1} color="gray">
          Total
        </Title>
        <Title order={1} variant="gradient">
          10000
        </Title>
        <Title order={1} color="gray">
          THB
        </Title>
      </Group>
      <Stack>
      {users.map((user) => (
          <UserList key={user.id} user={user} />
        ))}
      </Stack>
    </Card>
  );
}
