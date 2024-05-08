"use client";
import { IUser } from "@/client/contexts/user/user.types";
import { isEmpty, isEqual } from "lodash";
import {
  Context,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const userInitialValue = {
  name: null,
  suportID: null,
  brandsOfInterest: [],
  selectedSubject: null,
} as unknown as IUser;

const ContextComponent: Context<{
  user: IUser;
  setUser: (user: IUser) => void;
}> = createContext({
  user: userInitialValue,
  setUser: (user: IUser) => {},
});

export const useUserContext = () => useContext(ContextComponent);

export const UserContext = ({
  children,
  user,
}: PropsWithChildren<{ user: IUser }>) => {
  const [userState, setUser] = useState<IUser>(userInitialValue);

  useEffect(() => {
    if (!isEmpty(user) && isEqual(userInitialValue, userState)) {
      setUser(user);
    }
  }, [userState, user, setUser]);
  return (
    <ContextComponent.Provider value={{ user: userState, setUser }}>
      {children}
    </ContextComponent.Provider>
  );
};
