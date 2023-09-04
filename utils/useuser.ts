import useStore from "./store";
import { useEffect } from "react";
import axios from "axios";
import { API_URL } from "./api"; 
import { type Donation ,usersSchema} from "./types"; 


function useUsers(right: boolean) {
  const [donation, setUsers, setFetchUsers, error, setError] = useStore(
    (state) => [
      state.donation,
      state.setUsers,
      state.setFetchUsers,
      state.error,
      state.setError,
    ]
  );

  async function fetchUsers() {
    const URL = API_URL;
    const res = await axios.get<Donation[]>(URL);
    const result = usersSchema.safeParse(res.data);

    if (!result.success) {
      console.log({ error: result.error.issues });
      setError(JSON.stringify(result.error.issues));
      return;
    }
    setUsers(result.data);
  }

  useEffect(() => {
    fetchUsers();
    setFetchUsers(fetchUsers);
  }, []);

  return { donation, error };
}

export default useUsers;