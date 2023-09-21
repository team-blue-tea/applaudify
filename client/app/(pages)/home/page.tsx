"use client";

import { useEffect, useState } from "react";
import { Appreciation, User } from "../../types";
import { AppreciationCard } from "@/components/AppreciationCard";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

function Home() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("api/auth/signin?callbackUrl=/home");
    },
  });

  const backendUrl: string = process.env.NEXT_PUBLIC_BACKEND_URL as string;

  const user: User = {
    email: session?.user?.email!,
    name: session?.user?.name!,
  };

  const [data, setData] = useState([]);

  const getAppreciation = async () => {
    const response = await fetch(backendUrl + "/appreciations");
    const jsonData = await response.json();
    setData(jsonData);
  };

  const addUserToDb = async () => {
    if (!user.email) {
      return;
    }
    try {
      const res = await fetch(backendUrl + "/users/add", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(`Failed to add user. Status code: ${res.status}`);
      }
    } catch (error) {
      console.error("Error adding user to DB:", error);
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      getAppreciation();
      addUserToDb();
    }
  }, [status]);

  function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <>
      {status === "loading" ? (
        <div className="loading-indicator">
          <img src="loading.png" alt="loading..." />
        </div>
      ) : (
        <div className="main-content">
          <h1 className="main-title">Welcome {user.name}!</h1>
          <ul className="feed-appreciation-list">
            {data.map((element: Appreciation, index) => (
              <li key={index}>
                <AppreciationCard
                  senderName={element.senderName}
                  receiverName={element.receiverName}
                  comment={element.comment}
                  imageId={randomIntFromInterval(2, 5)}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Home;
