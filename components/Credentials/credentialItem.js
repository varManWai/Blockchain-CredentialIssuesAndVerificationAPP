import Image from "next/image";

import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";

import { Card, Avatar, Popconfirm, message } from "antd";
import { useRef, useState } from "react";
import { useRouter } from "next/router";

import styles from "./credentialItem.module.css";

import TransformImage from '../utils/imageCloudinary';

export default function CertificateItem({ cert, deletePath, imageAddress }) {

  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [condition, setCondition] = useState(false);

  const [error, setError] = useState('');

  const confirm = async () => {
    setOpen(false);

    try {
      const res = await fetch(`/api/educator/${deletePath}/delete`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          address: cert.address,
        }),
      });
      const result = await res.json();
      console.log(result);



      if (!res.ok) {
        throw new Error(result.message || "Something went wrong!");
      }

      message.success('Deleted');
      router.push(`/educator/${deletePath}`);

    } catch (err) {
      console.log(err);
      setError(err.message);
      message.success(err.message);
    }

    
  };
  const cancel = () => {
    setOpen(false);
    message.error('Cancel');
  };
  const handleOpenChange = async (newOpen) => {
    if (!newOpen) {
      setOpen(newOpen);
      return;
    }

    console.log(condition);
    if (condition) {
      confirm();
    } else {
      setOpen(newOpen);
    }
  };

  let actions = [
    <EyeOutlined
      key="view"
      onClick={() => router.push(`/educator/${deletePath}/${cert._id}`)}
    />,
    <Popconfirm
      title="Delete the credential"
      description="Are you sure to delete this credential?"
      open={open}
      onOpenChange={handleOpenChange}
      onConfirm={confirm}
      onCancel={cancel}
      okText="Confirm"
      cancelText="Cancel"
    >
      <DeleteOutlined key="delete" />
    </Popconfirm>
    ,
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
