import Image from "next/image";

import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";

import { Card, Avatar } from "antd";
import { useRef, useState } from "react";
import { useRouter } from "next/router";

import styles from "./credentialItem.module.css";

import TransformImage from '../utils/imageCloudinary';

export default function CertificateItem({ cert, deletePath, imageAddress }) {
  const { Meta } = Card;
  const router = useRouter();

  const style = {
    backgroundImage: "/hello world",
  };

  const [popover, setPopover] = useState(true);

  const handleOnClick = () => {
    setPopover(false);
  };

  const deleteCertificate = async () => {
    const res = await fetch(`/api/educator/${deletePath}/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: cert._id,
      }),
    });
    const data = await res.json();
    console.log(data);

    router.push(`/educator/${deletePath}`);
  };

  let actions = [
    <EyeOutlined
      key="view"
      onClick={() => router.push(`/educator/${deletePath}/${cert._id}`)}
    />,
    <DeleteOutlined key="delete" onClick={deleteCertificate} />,
  ];

  const pdfRef = useRef();

  return (
    <div>
      <Card
        style={{
          width: 300,
        }}
        cover={
          <>
            {deletePath === "certificates"
              ?
              <div className={styles.content} ref={pdfRef}>
                <div>
                  <div className={styles.subContent}>
                    <h1 className={styles.userName}>username</h1>
                    <hr style={{ width: "100%" }} />
                    <p id="text" className={styles.paragraph}>
                      {cert.title}
                    </p>
                    <p id="text" className={styles.paragraph2}>
                      {cert.desc}
                    </p>
                  </div>
                  <div className={styles.subContent2}>
                    <img
                      src="/images/signatureCred.png"
                      alt="this is the signature"
                      className={styles.signature}
                    />
                    <hr style={{ width: "100%" }} />
                    <img
                      src="/images/logo-stud.svg"
                      alt="this is the credBLOCK logo"
                      className={styles.logo}
                    />
                  </div>
                </div>
              </div>
              :
              <>
                {cert.imageAddress ? (
                  <>
                    <TransformImage
                      crop={'scale'}
                      image={cert.imageAddress}
                      width={300}
                      height={300}
                    />
                  </>
                ) : (
                  <img src="/images/defaultBadge.png" width={300} height={300} alt="default badge image" srcSet="" />
                )}
              </>
            }
          </>
        }
        actions={actions}
      >
        <div className={styles.meta}>
          <p className={styles.title}>{cert.title} </p>
          <p className={styles.description}>{cert.desc}</p>
        </div>
      </Card>
    </div >
  );
}
