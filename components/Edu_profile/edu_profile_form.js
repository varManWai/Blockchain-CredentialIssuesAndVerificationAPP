import { Button, Checkbox, Form, Input, Col, Select, Option, AutoComplete, Divider, Row, Tooltip } from "antd";
import { Image } from 'antd';
import styles from '../../styles/Edu.module.css';

import { InfoCircleOutlined, UserOutlined, EditOutlined } from '@ant-design/icons';




export default function Edu_profile_form() {

    // const style = {
    //     padding: '8px 0',
    // };

    return (
        <div >
            <Row 
                gutter={{
                    xs: 8,
                    sm: 16,
                    md: 24,
                    lg: 32,
                }}
            >
                <Col className="gutter-row" span={9}>
                    {/* <div style={style}>col-6</div> */}
                    <p>Home &lt; <span>[Profile]</span></p>
                </Col>
                <Col className="gutter-row" span={6} >
                    {/* <div style={style}>col-6</div> */}
                    <p><span> Welcome Back, [Educators' name]</span>,</p>
                </Col>

            </Row>

            <Row
                gutter={{
                    xs: 8,
                    sm: 16,
                    md: 24,
                    lg: 32,
                }}
            >
                <Col className="gutter-row" span={6} style={{ margin: 50 }}>
                    <Image
                        width={200}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        style={{ borderRadius: 500 }}
                    />
                   
                </Col>
                <Col className="gutter-row" span={6} style={{ margin: 50 }}>
                    <Input
                        placeholder="Details here" disabled
                    />
                    <br />
                    <br />
                    <Input placeholder="Details here" disabled />
                    <br />
                    <br />
                    <Input placeholder="Details here" disabled />
                </Col>

                <EditOutlined />
            </Row>



            <hr className={styles.hr_line} />


        </div>

    );
}
