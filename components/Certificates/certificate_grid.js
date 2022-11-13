import CertificateItem from "./certificate_item"

import { Row, Col, Space } from "antd"
import styles from '../../styles/Login.module.css';

export default function CertificateGrid() {

    const items = [
        { key: '1', item: 123, product: "name" },
        { key: '2', item: 123, product: "name" },
        { key: '3', item: 123, product: "name" },
        { key: '4', item: 123, product: "name" },
        { key: '5', item: 123, product: "name" },
        { key: '6', item: 123, product: "name" },
        { key: '7', item: 123, product: "name" }
    ]

    return (
        <div>
            <Row
                justify="start"
                gutter={{
                    xs: 8,
                    sm: 16,
                    md: 24,
                    lg: 32,
                }}
                wrap
            >
                {items.map((item) => {
                    return (
                        <Col
                            key={item.key}
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