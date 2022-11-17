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
                        <Col>text tex tex</Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <Col><label htmlFor="">Title</label></Col>
                                <Col>Edit button</Col>
                            </Row>
                        </Col>
                        <Col>text tex tex</Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <Col><label htmlFor="">Date and Time</label></Col>
                            </Row>
                        </Col>
                        <Col>text tex tex</Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <Row>
                                <Col><label htmlFor="">Description</label></Col>
                                <Col>Edit button</Col>
                            </Row>
                        </Col>
                        <Col>description example</Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <Row>
                                <Col><label htmlFor="">Group</label></Col>
                                <Col>Edit button</Col>
                            </Row>
                        </Col>
                        <Col>this is the group text</Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}