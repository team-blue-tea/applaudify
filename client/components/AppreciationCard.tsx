import React from "react";
import { Card } from "antd";
import { Appreciation } from "../app/types";

export const AppreciationCard = (props: Appreciation) => {
  const image = () => {
    return <img src="arrow.jpg" alt="" />;
  };

  let hasGif = "";
  let size = "100px";
  if (props.tenorUrl) {
    hasGif = "with-gif";
    size = "200px";
  }

  const generateCardTitle = () => {
    return (
      <div className="title-container">
        <img className="logo-img title" src={props.senderImageURL} alt="" />
        {props.senderName}
        <span className="arrow">➞</span>
        {/* <img className="arrow" src="send-arrow.png"></img> */}
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
        paddingTop: 0,
        fontFamily: "var(--main-font)",
      }}
      style={{
        backgroundImage: 'url("/card-background-' + props.imageId + '.png")',
        cursor: "default",
      }}
    >
      {!props.tenorUrl ? (
        <p>{props.comment}</p>
      ) : (
        <div className="text-and-gif">
          <div className="comment-container">
            <p className="card-comment">{props.comment}</p>
          </div>
          <img className="gif-image" src={props.tenorUrl} />
        </div>
      )}
    </Card>
  );
};
