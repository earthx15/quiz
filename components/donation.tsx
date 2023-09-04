"use client";
import { API_URL } from "utils/api"; 
import { type Donation } from "utils/types"; 
import { Paper, Text, Stack, Group, Title, Card } from "@mantine/core";
import UserList from "utils/userlist";
import useUsers from "utils/useuser";


export default async function Donation() {
  const { donations, error } = useUsers(true);

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
      {donations.map((d: { time: string; id: string; firstName: string; lastName: string; email: string; amount: string; }) => (
          <UserList key={d.id} donation={d} />
        ))}
      </Stack>
    </Card>
  );
}
