import { Image, Row, Col } from "antd"

import styles from "../../styles/Login.module.css";

export default function View_Certificate() {
    return (
        <div>
            <h1>this is the view certificate page</h1>
            <Row>
                <Col>
                    <Image
                        src="../../public/images/forgotPwd.jpg"
                        alt="this is the certificate pdf file show picture"
                        fill
                        priority
                    />
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <Row>
                                <Col><label htmlFor="">Id</label></Col>
                            </Row>
                        </Col>
                        <Col>
                            <p>1WE23456789QW</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <Col><label htmlFor="">Title</label></Col>
                                <Col>
                                    <Button type="text" primary>
                                        Edit
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <Col><label htmlFor="">Date and Time</label></Col>
                            </Row>
                        </Col>
                        <Col>
                            <p>5/10/2022 20:30</p>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <Row>
                                <Col><label htmlFor="">Description</label></Col>
                                <Col>
                                    <Button type="text" primary>
                                        Edit
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Expedita ullam ab dolore voluptate dignissimos, magni, sapiente suscipit tempora omnis ratione doloremque. Ullam quod animi adipisci.</p>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <Row>
                                <Col><label htmlFor="">Group</label></Col>
                                <Col>
                                    <Button type="text" primary>
                                        Edit
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                        <p>Group 1</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}