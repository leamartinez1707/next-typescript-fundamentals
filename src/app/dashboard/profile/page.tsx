"use client";

import { auth } from "@/app/api/auth";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

export const ProfilePage = () => {
  const { data: session } = useSession();

  useEffect(() => {}, []);

  return (
    <div>
      <h1>Profile Page</h1>
    </div>
  );
};
