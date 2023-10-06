"use client";

import { Appreciation } from "@/app/types";
import { AppreciationCard } from "@/components/AppreciationCard";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Switch } from "antd";
import backendUrl from "@/app/backendURL";
import { url } from "inspector";

function page() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("api/auth/signin?callbackUrl=/home");
    },
  });

  const [showingSent, setShowingSent] = useState(false);
  const [data, setData] = useState([]);
  const [showingCard, setShowingCard] = useState(false);
  const [hiddenCards, setHiddenCards] = useState<string[]>([]);
  const [showingSave, setShowingSave] = useState(false);
  const [userId, setUserId] = useState<string>("");

  const getAppreciation = async () => {
    const response = await fetch(backendUrl + "/appreciations");
    const jsonData = await response.json();
    setData(jsonData);
  };

  const toggleFilter = (showing: boolean) => {
    showing ? setShowingSent(false) : setShowingSent(true);
  };

  const getUser = async (urlString: string) => {
    const urlObject = new URL(urlString);
    const pathname = urlObject.pathname;
    const parts = pathname.split("/");
    const userId = parts[parts.length - 1];
    setUserId(userId);
  };

  const showSaveButton = () => {
    setShowingSave(true);
  }

  const handleEdit = () => {
    setShowingCard(true);
    showSaveButton();
  }

  const handleSave = async () => {
    const response = await fetch(backendUrl + "/users/" + userId + "/hiddencards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        hiddenCards,
      }),
    })
    setShowingSave(false);
  }

  const handleReset = () => {

  }

  useEffect(() => {
    if (status === "authenticated") {
      getAppreciation();
      getUser(window.location.href);
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
            <Button type="primary" className="button-edit" onClick={handleEdit} style={{ alignSelf: "flex-start", marginLeft: "0 50px" }}>Edit</Button>
            {showingSave && <Button type="primary" className="button-edit" onClick={handleSave} style={{ alignSelf: "flex-start", marginLeft: "0 50px", backgroundColor: "green" }}>Save</Button>}
            {showingSave && <Button type="primary" className="button-edit" onClick={handleReset} style={{ alignSelf: "flex-start", marginLeft: "0 50px", backgroundColor: "red" }}>Reset</Button>}
            <ul className="feed-appreciation-list">
              {data
                .toReversed()
                .filter((element: Appreciation) =>
                  showingSent
                    ? element.senderName === session?.user?.name
                    : element.receiverName === session?.user?.name
                )
                .map((element: Appreciation, index) => (
                  <li key={index}>
                    <AppreciationCard
                      id={element.id}
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
                      hasToggle={showingCard}
                      hiddenCards={hiddenCards}
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
