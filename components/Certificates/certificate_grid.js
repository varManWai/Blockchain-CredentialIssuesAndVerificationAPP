import CertificateItem from "./certificate_item"

import { Row, Col, Space } from "antd"
import styles from '../../styles/Login.module.css';

export default function CertificateGrid() {

    const items = [
        { key: 1, item: 123, product: "name" },
        { key: 2,item: 123, product: "name" },
        { key: 3,item: 123, product: "name" },
        { key: 4,item: 123, product: "name" }
    ]

    return (
        <div>
            <Row 
            justify="center"
            gutter={{
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
                            <CertificateItem key={item.key}/>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}