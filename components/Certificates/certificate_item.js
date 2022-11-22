import Image from "next/image";

import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";

import { Card, Avatar } from "antd";
import { useState } from "react";
import { useRouter } from "next/router";

export default function CertificateItem({ cert }) {
  const { Meta } = Card;
  const router = useRouter();

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
          <EyeOutlined key="view" onClick={() => router.push(`/educator/certificates/${cert.id}`)} />,
          <EditOutlined key="edit" onClick={() => console.log("clicked 2")} />,
          <DeleteOutlined
            key="delete"
            onClick={() => console.log("clicked 3")}
          />,
        ]}
      >
        <Meta title={cert.product} description={cert.description} />
      </Card>
    </div>
  );
}
