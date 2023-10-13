import React, { useState } from "react";
import { Card, Switch } from "antd";
import { Appreciation } from "../app/types";
import Link from "next/link";

export const AppreciationCard = (props: Appreciation) => {
  const image = () => {
    return <img src="arrow.jpg" alt="" />;
  };

  let hasGif = "";
  let size = "150px";
  if (props.tenorUrl) {
    hasGif = "with-gif";
    size = "max-content";
  }

  const date = new Date(props.createdAt as string);
  const formattedDate = `${date.getDate()} ${date.toLocaleDateString("en-US", {
    month: "short",
  })} ${date.getFullYear()}`;
  const formattedTime = `${date.toLocaleTimeString("sv-SE", {
    hour: "numeric",
    minute: "numeric",
    second: undefined,
  })}`;

  const [appreciationHidden, setAppreciationHidden] = useState(props.isToggled);

  const handleToggleButton = () => {
    if (appreciationHidden === true) {
      setAppreciationHidden(false);
      props.hiddenCards!.push(props.id as string);
      props.hiddenCards?.forEach((card) => console.log(card));
      return;
    }
    setAppreciationHidden(true);
    const index: number = props.hiddenCards?.findIndex(
      (id) => id === props.id
    ) as number;
    props.hiddenCards!.splice(index, 1);
    return;
  };

  const generateCardTitle = () => {
    return (
      <div className="title-container">
        <div className="title-container-links">
          <Link
            className="title-profile-url"
            href={`/viewProfile/${props.senderId}`}
          >
            <img className="logo-img title" src={props.senderImageURL} alt="" />
            {props.senderName.substring(0, props.senderName.indexOf(" "))}
          </Link>
          <p className="from-to">appreciates:</p>
          <Link
            className="title-profile-url"
            href={`/viewProfile/${props.receiverId}`}
          >
            <img
              className="logo-img title"
              src={props.receiverImageURL}
              alt=""
            />
            {props.receiverName.substring(0, props.receiverName.indexOf(" "))}
          </Link>
        </div>
        {props.hasToggle && props.hasToggle === true ? (
          <Switch
            className="toggle-button"
            defaultChecked={props.isToggled}
            checkedChildren="Show"
            unCheckedChildren="Hidden"
            onChange={() => handleToggleButton()}
            style={{ justifySelf: "flex-end" }}
          />
        ) : null}
      </div>
    );
  };

  return (
    <Card
      className={`appreciation-card ${hasGif}`}
      title={generateCardTitle()}
      bordered={false}
      hoverable={false}
      headStyle={{
        background:
          "linear-gradient(90deg, rgba(52,125,205,1) 0%, var(--teal) 100%)",
        color: "#fff",
      }}
      bodyStyle={{
        backgroundColor: "var(--card-background)",
        height: size,
        padding: "0 25px 20px 25px",
        fontFamily: "var(--main-font)",
      }}
      style={{
        cursor: "default",
      }}
    >
      {!props.tenorUrl ? (
        <div className="comment-container without-gif">
          <p className="card-comment comment-without-gif">{props.comment}</p>
          <p className="card-timestamp">
            {formattedDate + " " + formattedTime}
          </p>
        </div>
      ) : (
        <div className="text-and-gif">
          <div className="comment-container">
            <p className="card-comment comment-with-gif">{props.comment}</p>
            <p className="card-timestamp">
              {formattedDate + " " + formattedTime}
            </p>
          </div>
          <img className="gif-image" src={props.tenorUrl} />
        </div>
      )}
    </Card>
  );
};
