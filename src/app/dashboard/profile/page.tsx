"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session, status } = useSession();

  useEffect(() => {}, []);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    return <div>Please log in to view this page.</div>;
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <div>
        <p>Welcome {session?.user?.name || session?.user?.email}</p>
        <p>Roles: {session?.user?.roles?.join(", ")}</p>
      </div>
    </div>
  );
}
