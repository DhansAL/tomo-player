import {
  createSignal,
  createContext,
  useContext,
  Component,
  JSXElement,
  JSX,
  Setter,
  Accessor,
} from "solid-js";

export type AuthUser = {
  name: string;
  email: string;
};
type UserContextType = {
  user: Accessor<AuthUser> | null;
  setUser: Setter<AuthUser>;
};
type UserContextProviderProps = {
  children: JSXElement;
};
export const UserContext = createContext<UserContextType | null>(null);

export const UserContextProvider = (props: UserContextProviderProps) => {
  const [user, setUser] = createSignal<null | AuthUser>({
    name: "hellonane",
    email: "lolemail@email.com",
  });

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
