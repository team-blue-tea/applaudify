"use client";

import backendUrl from "@/app/backendURL";
import { Appreciation, User } from "@/app/types";
import { AppreciationCard } from "@/components/AppreciationCard";
import { Switch } from "antd";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { URL } from "whatwg-url";

function page() {
  const [user, setUser] = useState<User>({});

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
    getUser(window.location.href);
    getAppreciation();
  }, []);

  const getUser = async (urlString: string) => {
    const urlObject = new URL(urlString);
    const pathname = urlObject.pathname;
    const parts = pathname.split("/");
    const userId = parts[parts.length - 1];
    const response = await fetch(backendUrl + "/users/id/" + userId);
    const jsonData = await response.json();
    setUser(jsonData);
  };

  return (
    <>
      <div className="profile-container">
        <img
          className="logo-img profile"
          src={user.imageURL as string}
          alt="Profile image"
        />
        <p className="profile-container__name">Name: {user.name}</p>
      </div>
      <div className="">
        {status === "loading" ? (
          <div className="loading-indicator">
            <img src="loading.png" alt="loading..." />
          </div>
        ) : (
          <div className="main-content">
            <div className="toggle-container">
              <h2 className="toggle-text">Appreciations:</h2>
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
                .toReversed()
                .filter((element: Appreciation) =>
                  showingSent
                    ? element.senderName === user.name
                    : element.receiverName === user.name
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
