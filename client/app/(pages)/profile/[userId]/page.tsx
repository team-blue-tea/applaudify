"use client";

import { Appreciation, User } from "@/app/types";
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
  const [appreciations, setAppreciations] = useState([]);
  const [updatedAppreciations, setUpdatedAppreciations] = useState([]);
  const [showingCard, setShowingCard] = useState(false);
  const [hiddenCards, setHiddenCards] = useState<string[]>([]);
  const [showingSave, setShowingSave] = useState(false);
  const [showingEdit, setShowingEdit] = useState(true);
  const [userId, setUserId] = useState<string>("");
  const [user, setUser] = useState<User>();

  const getAppreciations = async () => {
    const response = await fetch(backendUrl + "/appreciations");
    const jsonData = await response.json();
    setAppreciations(jsonData);
  };

  const toggleFilter = (showing: boolean) => {
    showing ? setShowingSent(false) : setShowingSent(true);
  };

  const getUserAndUpdate = async (urlString: string) => {
    const urlObject = new URL(urlString);
    const pathname = urlObject.pathname;
    const parts = pathname.split("/");
    const userId = parts[parts.length - 1];
    setUserId(userId);
    const response = await fetch(backendUrl + "/users/id/" + userId);
    const user = await response.json();
    setUser(user);
    const appreciationsResponse = await fetch(backendUrl + "/appreciations");
    const appreciations = await appreciationsResponse.json();
    setAppreciations(appreciations);
    updateAppreciations(user, appreciations);
  };

  const updateAppreciations = (user: User, appreciations: any) => {
    const updatedAppreciations = appreciations.filter(
      (appreciation: Appreciation) =>
        !user.hiddenCards!.includes(appreciation.id as string)
    );
    setUpdatedAppreciations(updatedAppreciations);
  };

  const handleEdit = () => {
    setShowingCard(true);
    setShowingSave(true);
    setShowingEdit(false);
    setUpdatedAppreciations(appreciations);
  };

  const handleSave = async () => {
    setShowingSave(false);
    setShowingCard(false);
    setShowingEdit(true);
    const response = await fetch(
      backendUrl + "/users/" + userId + "/hidden-cards",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          hiddenCards,
        }),
      }
    );
    updateAppreciations(user as User, appreciations);
  };

  const handleReset = () => {};

  const doSTuff = async () => {
    await getAppreciations();
    await getUserAndUpdate(window.location.href);
  };

  useEffect(() => {
    doSTuff();
  }, []);

  return (
    <>
      <div className="profile-container">
        <img
          className="logo-img profile"
          src={session?.user?.image as string}
          alt="Profile image"
        />
        <p className="profile-container__name">{session?.user?.name}</p>
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
            <div className="edit-buttons-container">
              {showingEdit && (
                <Button
                  type="primary"
                  className="button-edit"
                  onClick={handleEdit}
                  style={{ alignSelf: "flex-start" }}
                >
                  Edit
                </Button>
              )}
              {showingSave && (
                <Button
                  type="primary"
                  className="button-edit"
                  onClick={handleSave}
                  style={{ alignSelf: "flex-start", backgroundColor: "green" }}
                >
                  Save
                </Button>
              )}
              {showingSave && (
                <Button
                  type="primary"
                  className="button-edit"
                  onClick={handleReset}
                  style={{
                    alignSelf: "flex-start",
                    marginLeft: "15px",
                    backgroundColor: "red",
                  }}
                >
                  Reset
                </Button>
              )}
            </div>
            <ul className="feed-appreciation-list">
              {updatedAppreciations
                .toReversed()
                .filter((element: Appreciation) =>
                  showingSent
                    ? element.senderName === session?.user?.name
                    : element.receiverName === session?.user?.name
                )
                .map((element: Appreciation, index) => {
                  let toggled = true;
                  if (user?.hiddenCards!.includes(element.id as string)) {
                    toggled = false;
                  }
                  return (
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
                        isToggled={toggled}
                      />
                    </li>
                  );
                })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default page;
