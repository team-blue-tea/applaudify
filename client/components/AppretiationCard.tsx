import React from 'react';
import { Card } from 'antd';
import { Appreciation } from "../app/types";

export const AppretiationCard = (props: Appreciation) => {
  return (
    <Card title={`${props.senderName} --> ${props.receiverName}`} bordered={false} style={{ width: 300 }}>
      <p>{props.comment}</p>
    </Card>
  )
}
