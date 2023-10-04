"use client";

import Form from "@/components/Form";
import { useEffect, useState } from "react";
import backendUrl from "@/app/backendURL";

function Appreciate() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(backendUrl + "/users");
    const jsonData = await response.json();
    console.log(jsonData);
    setUsers(jsonData);
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
