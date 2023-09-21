import React from "react";
import { Card } from "antd";
import { Appreciation } from "../app/types";

export const AppreciationCard = (props: Appreciation) => {
  const image = () => {
    return <img src="arrow.jpg" alt="" />;
  };
  return (
    <Card
      className="appreciation-card"
      title={`${props.senderName} → ${props.receiverName}`}
      bordered={true}
      hoverable={true}
      headStyle={{ backgroundColor: "var(--card-background)" }}
      bodyStyle={{
        backgroundColor: "var(--card-background)",
        height: "100px",
        paddingTop: 0,
      }}
      style={{
        backgroundImage: 'url("/card-background-' + props.imageId + '.png")',
      }}
    >
      <p>{props.comment}</p>
    </Card>
  );
};
