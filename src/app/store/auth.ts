import create from "solid-zustand";
//TODO: shift context to zustand

interface AuthStore {
  username: string;
  token: string;
  authenticate: boolean;
}

export const authStore = create<AuthStore>(() => ({
  token: null,
  username: null,
  authenticate: false,
}));
