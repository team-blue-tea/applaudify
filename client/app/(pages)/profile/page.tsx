"use client";

import { Appreciation } from "@/app/types";
import { AppreciationCard } from "@/components/AppreciationCard";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { Switch } from "antd";

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

  const toggleFilter = (showing: boolean) => {
    showing ? setShowingSent(false) : setShowingSent(true);
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
            <div className="toggle-container">
              <h2 className="toggle-text">Your appreciations:</h2>
              <Switch
                className="toggle-button"
                defaultChecked
                checkedChildren="Received"
                unCheckedChildren="Sent"
                onChange={() => toggleFilter(showingSent)}
              />
            </div>
            <ul className="feed-appreciation-list">
              {data
                .filter((element: Appreciation) =>
                  showingSent
                    ? element.senderName === session?.user?.name
                    : element.receiverName === session?.user?.name
                )
                .map((element: Appreciation, index) => (
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
      </div>
    </>
  );
}

export default page;
