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

  return (
    <Card
      className={`appreciation-card ${hasGif}`}
      title={`${props.senderName} → ${props.receiverName}`}
      bordered={true}
      hoverable={false}
      headStyle={{ backgroundColor: "var(--card-background)" }}
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
