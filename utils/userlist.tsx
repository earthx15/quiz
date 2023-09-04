"use client";
import { FC } from "react";
import { type Donation } from "./types"; 
import { Paper, Text, Group} from "@mantine/core";
interface Props {
  donation: Donation;
}

const UserList: FC<Props> = ({ donation }) => {
  return (
    <Paper shadow="xs" p="md">
          <Group>
            <Text>{donation.firstName}</Text>
            <Text>{donation.lastName}</Text>
            <Text>{donation.email}</Text>
            <Text>{donation.amount}</Text>
            <Text>{donation.time}</Text>
          </Group>
    </Paper>
  );
};

export default UserList;