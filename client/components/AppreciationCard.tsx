import React from "react";
import { Card } from "antd";
import { Appreciation } from "../app/types";

export const AppreciationCard = (props: Appreciation) => {
  const image = () => {
    return <img src="arrow.jpg" alt="" />;
  };

  let hasGif = "";
  let size = "120px";
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

  const generateCardTitle = () => {
    return (
      <div className="title-container">
        <img className="logo-img title" src={props.senderImageURL} alt="" />
        {props.senderName}
        <span className="arrow">➞</span>
        <img className="logo-img title" src={props.receiverImageURL} alt="" />
        {props.receiverName}
      </div>
    );
  };

  return (
    <Card
      className={`appreciation-card ${hasGif}`}
      title={generateCardTitle()}
      bordered={true}
      hoverable={false}
      headStyle={{
        background:
          "linear-gradient(90deg, rgba(52,125,155,1) 0%, rgba(68,141,171,1) 100%)",
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
            <p className="card-comment">{props.comment}</p>
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
