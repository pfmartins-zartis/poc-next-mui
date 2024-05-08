"use client";
import { useUserContext } from "@/client/contexts/user/user";
import { IUser } from "@/client/contexts/user/user.types";
import { isEmpty } from "lodash";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const login = async (
  setUser: (user: IUser) => void,
  redirect: (route: string) => void,
) => {
  const data: Response = await fetch("/login");
  const user: IUser = await data.json();
  console.log(user);
  setUser(user);
  if (!isEmpty(user?.brandsOfInterest)) {
    redirect(`/dashboard/brands/${user.brandsOfInterest[0].slug}`);
  }
};

export default function Dashboard() {
  const { user, setUser } = useUserContext();
  useEffect(() => {
    if (isEmpty(user.name)) {
      login(setUser, redirect);
    }
  }, [user, setUser]);

  return <></>;
}
