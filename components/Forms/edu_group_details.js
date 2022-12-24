import React from 'react';


import { Typography, Button, Checkbox, Form, Col, Row, Input, Upload, Select, Image } from 'antd';


export default function Edu_group_details({ group }) {
    const { Title } = Typography;
    return (

        <div>
            <Title level={2}>Group details</Title><br/>

            <Col span={12}>
                <Form
                    // form={form}
                    layout="vertical"
                    // onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                // onClick={onCreate}
                >
                    <Form.Item
                        name="name"
                        label="Display Name "
                        rules={[
                            {
                                required: true,
                                message: 'Please give your group a name!',
                            },
                            {
                                type: 'string',
                                min: 8,
                            },
                        ]}
                    >
                        <p>{group.groupName}</p>
                    </Form.Item>
                    <Form.Item
                        name="desc"
                        label="Description "
                        rules={[
                            {
                                required: true,
                                message: 'Please explain what this group of credential holders had to do to earn the credential!',
                            },
                            {
                                type: 'string',
                                min: 20,
                            },
                        ]}
                    >
                        <p>{group.desc}</p>
                    </Form.Item>
                    <Form.Item
                        name="recipients"
                        label="Receivers "
                        rules={[
                            {
                                required: true,
                                message: '',
                            },
                            {
                                type: 'string',
                                min: 20,
                            },
                        ]}
                    >
                         <p>none</p>
                    </Form.Item>

                </Form>

            </Col>


        </div>

    );

}