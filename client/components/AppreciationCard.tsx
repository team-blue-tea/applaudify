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
    size = "200px"
  }

  return (
    <Card
      className={`appreciation-card ${hasGif}`}
      title={`${props.senderName} → ${props.receiverName}`}
      bordered={true}
      hoverable={true}
      headStyle={{ backgroundColor: "var(--card-background)" }}
      bodyStyle={{
        backgroundColor: "var(--card-background)",
        height: size,
        paddingTop: 0,
      }}
      style={{
        backgroundImage: 'url("/card-background-' + props.imageId + '.png")',
      }}
    >
      {!props.tenorUrl ? (<p>{props.comment}</p>) :
        <div className="text-and-gif">
          <p>{props.comment}</p>
          <img className="gif-image" src={props.tenorUrl} />
        </div>}
    </Card>
  );
};
