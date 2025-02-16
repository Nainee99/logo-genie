"use client";

import { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";
import Header from "./_components/header";
import Footer from "./_components/footer";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { UserDetailContext } from "./_context/userDetailContext";

export function Providers({ children }) {
  const { user } = useUser();
  const [userDetail, setUserDetail] = useState(null);

  const CheckUserAuth = async () => {
    if (!user) return; // Prevent unnecessary API calls

    try {
      const result = await axios.post("/api/users", {
        userName: user.fullName,
        userEmail: user.primaryEmailAddress?.emailAddress,
      });

      setUserDetail(result.data); // ✅ Update state correctly
      console.log("User Detail Updated:", result.data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  useEffect(() => {
    CheckUserAuth();
  }, [user]); // ✅ Only call when user changes

  return (
    <UserDetailContext.Provider value={[userDetail, setUserDetail]}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </UserDetailContext.Provider>
  );
}
