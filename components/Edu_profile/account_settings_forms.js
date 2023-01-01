import React, { useState } from 'react';
import { Typography, Form, Divider, Button, Menu, Col, Row, Input, Checkbox } from "antd";
import Update_details_form from './update_details_form';
import Update_password_form from './update_password_form';

export default function Account_settings_form({ educatorDetail }) {
    const { Title } = Typography;
    const [form] = Form.useForm();

    const items = [
        {
            label: 'Details',
            key: '1',
        },
        {
            label: 'Password',
            key: '2',
        },
    ]

    // to switch bwtween menu
    const [menu, setMenu] = useState('1');

    const onClick = (e) => {

        // console.log('click ', e);
        setMenu(e.key);
    };

    return (
        <div>
            <Row>
                <Divider>Account settings</Divider>
            </Row>
            {/* sub menu */}
            <Row>
                <Col span={6}>
                    <div
                        style={{
                            width: 256,
                        }}>

                        <Menu onClick={onClick} theme="light" defaultSelectedKeys={['1']}
                            mode="inline" items={items}>
                        </Menu>

                    </div >
                </Col>

                <Col span={12}>
                    {
                        menu === '1' ? <Update_details_form educator={educatorDetail} /> : <Update_password_form educatorData={educatorDetail} />
                    }
                </Col>
            </Row>

        </div>
    );
}