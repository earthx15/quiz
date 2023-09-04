import { API_URL } from "utils/api";
import { Input, Button, Card, Title, Stack } from "@mantine/core";
import { useForm } from "react-hook-form";
import useStore from "utils/store";
import useUsers from "utils/useuser";
import axios from "axios";
import { type Form,formSchema } from "utils/types";


export default function Form() {
  const FormRHF = () => {
    const [open, setOpen, fetchUsers] = useStore((state) => [
      state.open,
      state.setOpen,
      state.fetchUsers,
    ]);


  
    async function sendData(data) {
      try {
        const res = await axios.post(API_URL, data);
        setOpen(false);
        fetchUsers();
        reset(getInitData(false));
      } catch (err) {
        console.log(err);
      }
    }

  return (
    <Card withBorder shadow="xs" p="xl" bg="cyan.2">
      <Title order={1} color="blue">
        Donate
      </Title>

      <form>
        <Stack spacing={"xs"}>
          <Input.Wrapper>
            <Input.Label>First Name</Input.Label>
            <Input 
              type="text"
              id="firstName"
              disabled={isSubmitting}/>
            <Input.Error>{/* Error goes here */}</Input.Error>
          </Input.Wrapper>

          <Input.Wrapper>
            <Input.Label>Last Name</Input.Label>
            <Input />
            <Input.Error>{/* Error goes here */}</Input.Error>
          </Input.Wrapper>

          <Input.Wrapper>
            <Input.Label>Email</Input.Label>
            <Input />
            <Input.Error>{/* Error goes here */}</Input.Error>
          </Input.Wrapper>

          <Input.Wrapper>
            <Input.Label>Donation Amount</Input.Label>
            <Input />
            <Input.Error>{/* Error goes here */}</Input.Error>
          </Input.Wrapper>
          <Button>Submit</Button>
        </Stack>
      </form>
    </Card>
  );
}
