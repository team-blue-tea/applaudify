"use client";

import { useEffect, useState } from "react";
import { Appreciation, User } from "../../types";
import { AppreciationCard } from "@/components/AppreciationCard";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

function Home() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("api/auth/signin?callbackUrl=/home");
    },
  });

  const user: User = {
    email: session?.user?.email!,
    firstName: session?.user?.name!,
  };

  const [data, setData] = useState([]);

  const getAppreciation = async () => {
    const response = await fetch(
      "https://applaudify.fly.dev" + "/appreciations"
    );
    const jsonData = await response.json();
    setData(jsonData);
    console.log(jsonData);
  };

  const addUserToDb = async () => {
    console.log(JSON.stringify(user));
    try {
      const res = await fetch("https://applaudify.fly.dev" + "/users/add", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      if (!res.ok) {
        throw new Error(`Failed to add user. Status code: ${res.status}`);
      }
    } catch (error) {
      console.error("Error adding user to DB:", error);
    }
  };

  useEffect(() => {
    getAppreciation();
    addUserToDb();
  }, []);

  return (
    <>
      <div className="main-content">
        <h1>Welcome {session?.user?.name}!</h1>
        <ul className="feed-appreciation-list">
          {data.map((element: Appreciation, index) => (
            <li key={index}>
              <AppreciationCard
                senderName={element.senderName}
                receiverName={element.receiverName}
                comment={element.comment}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Home;
