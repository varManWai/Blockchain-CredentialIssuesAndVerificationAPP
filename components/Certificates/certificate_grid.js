import CertificateItem from "./certificate_item"

import { Row, Col, Space, Pagination } from "antd"
import styles from '../../styles/Login.module.css';

export default function CertificateGrid({items,remove}) {

    

    const itemRender = (_, type, originalElement) => {
        if (type === 'prev') {
            return <a>Previous</a>;
        }
        if (type === 'next') {
            return <a>Next</a>;
        }
        return originalElement;
    };


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
                {items.map((item) => {
                    return (
                        <Col
                            key={item.key}
                            className={`gutter-row ${styles.margin_bottom_card}`}
                        >
                            <CertificateItem cert={item} remove={remove} />
                        </Col>
                    )
                })}

            </Row>
            <Row justify="center">
                <Col>
                    <Pagination total={80} itemRender={itemRender} />
                </Col>
            </Row>
        </div>
    )
}