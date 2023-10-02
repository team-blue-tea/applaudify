"use client";

import { useEffect, useState } from "react";
import { Appreciation, User } from "../../types";
import { AppreciationCard } from "@/components/AppreciationCard";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import backendUrl from "@/app/backendURL";

function Home() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("api/auth/signin?callbackUrl=/home");
    },
  });

  const user: User = {
    email: session?.user?.email as string,
    name: session?.user?.name as string,
    imageURL: session?.user?.image as string,
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
                  senderId={element.senderId}
                  receiverName={element.receiverName}
                  receiverId={element.receiverId}
                  senderImageURL={element.senderImageURL}
                  receiverImageURL={element.receiverImageURL}
                  comment={element.comment}
                  imageId={0}
                  tenorUrl={element.tenorUrl}
                  createdAt={element.createdAt}
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
