import Image from "next/image";

import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";

import { Card, Avatar } from "antd";
import { useState } from "react";
import { useRouter } from "next/router";

import styles from './certItem.module.css';

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



  let actions = [
    <EyeOutlined key="view" onClick={() => router.push(`/educator/certificates/${cert._id}`)} />,
    < DeleteOutlined
      key="delete"
      onClick={() => console.log("clicked 3")}
    />
  ];

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
        actions={actions}
      >
        <div className={styles.meta} >
          <p className={styles.title}>{cert.title} </p>
          <p className={styles.description}>{cert.desc}</p>
        </div>
      </Card>
    </div >
  );
}
