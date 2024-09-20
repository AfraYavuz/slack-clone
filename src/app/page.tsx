"use client";
import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";
import React from "react";

const Home = () => {
  const { signOut } = useAuthActions();
  return (
    <div>
      logged in
      <Button onClick={() => signOut()}></Button>
    </div>
  );
};

export default Home;
