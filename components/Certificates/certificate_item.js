import Image from "next/image";

import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";

import { Card, Avatar } from "antd";
import { useState } from "react";

export default function CertificateItem() {
  const { Meta } = Card;

  const style = {
    backgroundImage: "/hello world",
  };

  const [popover, setPopover] = useState(true);

  const handleOnClick = () => {
    setPopover(false);
  };

  return (
    <div>
      <Card
        style={{
          width: 300,
        }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <EyeOutlined key="setting" onClick={() => console.log("clicked")} />,
          <EditOutlined key="edit" />,
          <DeleteOutlined key="ellipsis" />,
        ]}
      >
        <Meta title="Card title" description="This is the description" />
      </Card>
    </div>
  );
}
