import Image from "next/image";

import {
  EllipsisOutlined,
  EditOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import { Card, Avatar } from "antd";
import { useState } from "react";

export default function CertificateItem() {
  const { Meta } = Card;

  const style = {
    backgroundImage: "/hello world",
  };

  const [popover,setPopover] = useState(true);

  const handleOnClick = () => {
    setPopover(false);
  }

  return (
    <div>
      {/* <h1>
        this is the certificate small component 'show in the all certificates'
      </h1>
      <Image
        src="/images/login.jpg"
        alt="this is a certificate"
        height={500}
        width={500}
      />
      <div className="down-side">
        <Image
          src="/icons/close-circle-outline.svg"
          alt="a delete icon"
          height={20}
          width={20}
          priority
        />
      </div> */}

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
          <SettingOutlined key="setting" onClick={handleOnClick}/>,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          title="Card title"
          description="This is the description"
        />
      </Card>
    </div>
  );
}
