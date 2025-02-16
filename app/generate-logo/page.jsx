"use client";
import React, { useContext, useEffect } from "react";
import { UserDetailContext } from "../_context/userDetailContext";

function GenerateLogoPage() {
  const [userDetail] = useContext(UserDetailContext);

  useEffect(() => {
    console.log("User Detail in GenerateLogoPage:", userDetail);
  }, [userDetail]); // ✅ Log when it updates

  return (
    <div>
      <h1>Generate Logo Page</h1>
      <p>User: {userDetail ? userDetail.name : "Loading..."}</p>
    </div>
  );
}

export default GenerateLogoPage;
