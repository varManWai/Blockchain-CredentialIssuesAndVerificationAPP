import CertificateItem from "./certificate_item"

import { Row, Col, Space, Pagination } from "antd"
import styles from '../../styles/Login.module.css';

export default function CertificateGrid() {

    const items = [
        { key: '1', id: '1',item: 123, product: "name 1" , description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, accusantium."},
        { key: '2', id: '2',item: 123, product: "name 2" , description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, accusantium."},        
        { key: '3', id: '3',item: 123, product: "name 3" , description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, accusantium."},       
        { key: '4', id: '4',item: 123, product: "name 4" , description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, accusantium."},
        { key: '5', id: '5',item: 123, product: "name 5" , description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, accusantium."},
        { key: '6', id: '6',item: 123, product: "name 6" , description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, accusantium."},
        { key: '7', id: '7',item: 123, product: "name 7" , description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, accusantium."},       
    ]

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
                            <CertificateItem cert={item}/>
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