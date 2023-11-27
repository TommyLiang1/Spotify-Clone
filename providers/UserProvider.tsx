"use client";

import { MyUserContextProvider } from "@/hooks/useUser";

interface UserProvideProps {
  children: React.ReactNode;
}

const UserProvider = ({ children }: UserProvideProps) => {
  return <MyUserContextProvider>{children}</MyUserContextProvider>;
};

export default UserProvider;
