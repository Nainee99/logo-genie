"use client";

import { useContext, useEffect, useState } from "react";
import { UserDetailContext } from "../_context/userDetailContext";
import { useSearchParams } from "next/navigation";

function GenerateLogoPage() {
  const [userDetail] = useContext(UserDetailContext);
  const [formData, setFormData] = useState({});
  const searchParams = useSearchParams();
  const planType = searchParams.get("type");

  useEffect(() => {
    console.log("User Detail in GenerateLogoPage:", userDetail);

    if (typeof window !== "undefined") {
      const storage = localStorage.getItem("logogenie_form_data");
      if (storage) {
        const parsedData = JSON.parse(storage);
        setFormData(parsedData);
        console.log("Loaded from localStorage:", parsedData);
      }
    }
  }, [userDetail]);

  return (
    <div>
      <h1>Generate Logo Page</h1>
      <p>User: {userDetail ? userDetail.name : "Loading..."}</p>
      <p>Plan Type: {planType}</p>
      <p>Form Data: {JSON.stringify(formData)}</p>
    </div>
  );
}

export default GenerateLogoPage;
