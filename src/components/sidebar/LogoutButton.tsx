"use client";

import { useSession, signOut, signIn } from "next-auth/react";
import { CiLogout } from "react-icons/ci";
import { IoLogInOutline, IoShieldOutline } from "react-icons/io5";

const LogoutButton = () => {
  const { data: session, status } = useSession();

  console.log("Session data:", session);
  if (status === "loading") {
    return (
      <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
        <IoShieldOutline />
        <span className="group-hover:text-gray-700">Loading..</span>
      </button>
    );
  }

  if (status === "unauthenticated") {
    return (
      <button
        onClick={() => signIn()}
        className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
      >
        <IoLogInOutline />
        <span className="group-hover:text-gray-700">Sign In</span>
      </button>
    );
  }
  return (
    <button
      onClick={() => signOut()}
      className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
    >
      <CiLogout />
      <span className="group-hover:text-gray-700">Logout</span>
    </button>
  );
};

export default LogoutButton;
