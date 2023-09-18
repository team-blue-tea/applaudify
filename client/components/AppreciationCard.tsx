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
    >
      <p>{props.comment}</p>
    </Card>
  );
};
