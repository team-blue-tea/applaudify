"use client";

import { useState } from "react";

function page() {
  const [users, setUsers] = useState([]);

  const backendUrl: string = process.env.NEXT_PUBLIC_BACKEND_URL as string;

  const getAppreciation = async () => {
    const response = await fetch(backendUrl + "/users");
    const jsonData = await response.json();
    setUsers(jsonData);
    console.log(jsonData);
  };

  return (
    <div>
      <h1>Appreciate</h1>
    </div>
  );
}

export default page;
