import { Image, Row, Col, Button } from "antd"

import styles from "./viewCert.module.css";



export default function View_Certificate() {
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
                            <p className={styles.view_cert_texts}>1WE23456789QW</p>
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
                            <p className={styles.view_cert_texts}>Lorem ipsum dolor sit amet.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            <Row>
                                <Col span={24}><label htmlFor="" className={styles.view_cert_labels}>Date and Time</label></Col>
                            </Row>
                        </Col>
                        <Col span={24}>
                            <p className={styles.view_cert_texts}>5/10/2022 20:30</p>
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
                            <p className={styles.view_cert_texts}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Expedita ullam ab dolore voluptate dignissimos, magni, sapiente suscipit tempora omnis ratione doloremque. Ullam quod animi adipisci.</p>
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
                </Col>
            </Row>
        </div>
    )
}