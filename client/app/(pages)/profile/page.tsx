"use client";

import { Appreciation } from "@/app/types";
import { AppreciationCard } from "@/components/AppreciationCard";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

function page() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("api/auth/signin?callbackUrl=/home");
    },
  });

  const backendUrl: string = process.env.NEXT_PUBLIC_BACKEND_URL as string;

  const [showingSent, setShowingSent] = useState(false);
  const [data, setData] = useState([]);

  const getAppreciation = async () => {
    const response = await fetch(backendUrl + "/appreciations");
    const jsonData = await response.json();
    setData(jsonData);
  };

  useEffect(() => {
    if (status === "authenticated") {
      getAppreciation();
    }
  }, [status]);

  return (
    <>
      <div className="profile-container">
        <img
          className="logo-img profile"
          src={session?.user?.image as string}
          alt="Profile image"
        />
        <p className="profile-container__name">Name: {session?.user?.name}</p>
      </div>
      <div className="">
        {status === "loading" ? (
          <div className="loading-indicator">
            <img src="loading.png" alt="loading..." />
          </div>
        ) : (
          <div className="main-content">
            <h2>Your {showingSent ? "Received" : "Sent"} Appreciations:</h2>
            <ul className="feed-appreciation-list">
              {data
                .filter(
                  (element: Appreciation) =>
                    element.receiverName === session?.user?.name
                )
                .map((element: Appreciation, index) => (
                  <li key={index}>
                    <AppreciationCard
                      senderName={element.senderName}
                      receiverName={element.receiverName}
                      senderImageURL={element.senderImageURL}
                      receiverImageURL={element.receiverImageURL}
                      comment={element.comment}
                      imageId={0}
                      tenorUrl={element.tenorUrl}
                    />
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default page;
