"use client";

import Form from "@/components/Form";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

function Appreciate() {
  const [users, setUsers] = useState([]);
  const { data: session, status } = useSession();

  const backendUrl: string = process.env.NEXT_PUBLIC_BACKEND_URL as string;

  const getUsers = async () => {
    const response = await fetch(backendUrl + "/users");
    const jsonData = await response.json();
    setUsers(jsonData);
    console.log(jsonData);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {users.length === 0 ? (
        <div className="loading-indicator">
          <img src="loading.png" alt="loading..." />
        </div>
      ) : (
        <div className="appreciate-container">
          <Form list={users}></Form>
        </div>
      )}
    </>
  );
}

export default Appreciate;
