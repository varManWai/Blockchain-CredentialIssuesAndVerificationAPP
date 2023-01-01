import { Image, Row, Col, Button } from "antd";
import { useRouter } from "next/router";
import { useRef } from "react";

import styles from "./viewCredential.module.css";
import GeneratePDF from "../utils/GeneratePDF";
import { DeleteOutlined, DownloadOutlined, LeftOutlined } from "@ant-design/icons";

import TransformImage from '../utils/imageCloudinary';
import Link from "next/link";


export default function ViewCredential({ Certificate, CredentialType , GroupData}) {
  const router = useRouter();

  // console.log(Certificate);

  const deleteCertificate = async () => {

    if (CredentialType == "certificate") {


      // console.log("start certificate deelte");
      const res = await fetch("/api/educator/certificates/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          address: Certificate.address,
        }),
      });
      const data = await res.json();
      // console.log(data);

      router.push("/educator/certificates");
    }

    if (CredentialType == "badge") {
      // console.log("start badge deelte");

      const res = await fetch("/api/educator/badges/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          address: Certificate.address,
        }),
      });
      const data = await res.json();
      // console.log(data);

      router.push("/educator/badges");
    }

  };

  const pdfRef = useRef();

  return (
    <div>
      <Row style={{ marginBottom: "20px", }} className={styles.view_cert_container} >
        <Col >
          <Button onClick={() => router.back()}
            icon={<LeftOutlined width="150px" height="150px" />}
            type="text"></Button>
        </Col>
      </Row>
      <Row className={styles.view_cert_container} wrap>
        <Col
          className={styles.view_cert_section1}
          span={12}
          xs={{
            span: 24,
          }}
          sm={{
            span: 12,
          }}
          lg={{
            span: 12,
          }}
        >
          {CredentialType === "certificate"
            ?
            <div className={styles.content} ref={pdfRef}>
              <div>
                <div className={styles.subContent}>
                  <h1 className={styles.userName}>username</h1>
                  <hr style={{ width: "100%" }} />
                  <p id="text" className={styles.paragraph}>
                    {Certificate.title}
                  </p>
                  <p id="text" className={styles.paragraph2}>
                    {Certificate.desc}
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
              {Certificate.imageAddress ? (
                <>
                  <TransformImage
                    crop={'scale'}
                    image={Certificate.imageAddress}
                    width={300}
                    height={300}
                  />
                </>
              ) : (
                <img src="/images/defaultBadge.png" width={300} height={300} alt="default badge image" srcSet="" />
              )}
            </>
          }
        </Col>
        <Col
          span={12}
          className={styles.view_cert_section2}
          xs={{
            span: 24,
          }}
          sm={{
            span: 12,
          }}
          lg={{
            span: 12,
          }}
        >
          <Row>
            <Col span={24}>
              <Row>
                <Col span={24}>
                  <label htmlFor="" className={styles.view_cert_labels}>
                    Id
                  </label>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <p className={styles.view_cert_texts}>{Certificate._id}</p>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Row justify="space-between">
                <Col>
                  <label htmlFor="" className={styles.view_cert_labels}>
                    Title
                  </label>
                </Col>
                <Col>
                  <Link
                    href={`/educator/${CredentialType}s/edit/editTitle/${Certificate._id}`}
                    className={styles.view_cert_link}
                    type="text"
                    primary="true"
                  >
                    Edit
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <p className={styles.view_cert_texts}>{Certificate.title}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <Col span={24}>
                  <label htmlFor="" className={styles.view_cert_labels}>
                    Date and Time
                  </label>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <p className={styles.view_cert_texts}>{Certificate.dateIssued}</p>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Row justify="space-between">
                <Col>
                  <label htmlFor="" className={styles.view_cert_labels}>
                    Description
                  </label>
                </Col>
                <Col>
                  <Link
                    href={`/educator/${CredentialType}s/edit/editDesc/${Certificate._id}`}
                    className={styles.view_cert_link}
                    type="text"
                    primary="true"
                  >
                    Edit
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col>
              <p className={styles.view_cert_texts}>{Certificate.desc}</p>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Row justify="space-between">
                <Col>
                  <label htmlFor="" className={styles.view_cert_labels}>
                    Group
                  </label>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <p className={styles.view_cert_texts}>{GroupData.groupName}</p>
            </Col>
          </Row>
          <Row style={{ width: "100%" }} justify="space-between" align="middle" >

            {CredentialType === "certificate"
              ?
              <>
                <Col span={12}>
                  <GeneratePDF html={pdfRef} />
                </Col>
                <Col span={12}>
                  <Button
                    onClick={deleteCertificate}
                    style={{ width: "90%" }}
                    type="danger"
                  >
                    <DeleteOutlined />
                    Delete
                  </Button>
                </Col>
              </>
              :
              <Col span={24}>
                <Button
                  onClick={deleteCertificate}
                  style={{ width: "100%" }}
                  type="danger"
                >
                  <DeleteOutlined />
                  Delete
                </Button>
              </Col>
            }

          </Row>
        </Col>
      </Row>
    </div>
  );
}
