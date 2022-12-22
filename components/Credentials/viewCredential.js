import { Image, Row, Col, Button } from "antd"
import { useRouter } from "next/router";

import styles from "./viewCredential.module.css";



export default function ViewCredential({ Certificate }) {

    const router = useRouter();

    const deleteCertificate = async () =>{
        const res = await fetch("/api/educator/certificates/delete", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            _id: Certificate._id,
          }),
        });
        const data = await res.json();
        console.log(data);
        
        router.push('/educator/certificates');
      }

    return (
        <div>
            <Row
                className={styles.view_cert_container}
                wrap
            >
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
                    <Image
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        alt="certificate pdf file "
                        fill
                        priority
                        className={styles.view_cert_image}
                    />
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
                                <Col span={24}><label htmlFor="" className={styles.view_cert_labels}>Id</label></Col>
                            </Row>
                        </Col>
                        <Col span={24}>
                            <p className={styles.view_cert_texts}>{Certificate._id}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Row justify="space-between">
                                <Col><label htmlFor="" className={styles.view_cert_labels}>Title</label></Col>
                                <Col>
                                    <a className={styles.view_cert_link} type="text" primary>
                                        Edit
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={24}>
                            <p className={styles.view_cert_texts}>{Certificate.title}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            <Row>
                                <Col span={24}><label htmlFor="" className={styles.view_cert_labels}>Date and Time</label></Col>
                            </Row>
                        </Col>
                        <Col span={24}>
                            <p className={styles.view_cert_texts}>{Certificate.dateIssued}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Row justify="space-between">
                                <Col><label htmlFor="" className={styles.view_cert_labels}>Description</label></Col>
                                <Col>
                                    <a className={styles.view_cert_link} type="text" primary>
                                        Edit
                                    </a>
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
                                <Col><label htmlFor="" className={styles.view_cert_labels}>Group</label></Col>
                                <Col>
                                    <a className={styles.view_cert_link} type="text" primary>
                                        Edit
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={24}>
                            <p className={styles.view_cert_texts}>Group 1</p>
                        </Col>
                    </Row>
                    <Row style={{width:"100%"}}>
                        <Col style={{width:"100%"}}>
                            <Button onClick={deleteCertificate} style={{width:"100%"}} type="danger">
                                Delete
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}