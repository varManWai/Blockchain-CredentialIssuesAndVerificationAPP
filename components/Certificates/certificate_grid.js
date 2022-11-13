import CertificateItem from "./certificate_item"

import { Row, Col, Space } from "antd"
import styles from '../../styles/Login.module.css';

export default function CertificateGrid() {

    const items = [
        { item: 123, product: "name" },
        { item: 123, product: "name" },
        { item: 123, product: "name" },
        { item: 123, product: "name" }
    ]

    return (
        <div>
            <Row gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
            }}
            wrap
            >
                {items.map(item => {
                    return (
                        <Col
                            
                            className={`gutter-row ${styles.margin_bottom_card}`}
                            >
                            <CertificateItem />
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}