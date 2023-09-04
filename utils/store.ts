import { create } from "zustand";
import { type Donation } from "./types";
interface Store {
  open: boolean;
  setOpen: (open: boolean) => void;
  donation: Donation[];
  setUsers: (donation: Donation[]) => void;
  fetchUsers: () => void;
  setFetchUsers: (fetchUsers: () => void) => void;
  error: string;
  setError: (error: string) => void;
}

const useStore = create<Store>((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
  donation: [],
  setUsers: (donation) => set({ donation }),
  fetchUsers: () => {},
  setFetchUsers: (fetchUsers) => set({ fetchUsers }),
  error: "",
  setError: (error) => set({ error }),
}));

export default useStore;
