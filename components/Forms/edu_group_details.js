import React from 'react';
import { useRouter } from 'next/router';

import { Button, Checkbox, Form, Col, Row, Input, Upload, Select, Image } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { EditOutlined } from '@ant-design/icons';


export default function Edu_group_details({ group }) {

    const router = useRouter();
    const data = router.query;
    return (
        <div>
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
            </Row>
            <h1 style={{ textAlign: "center" }}>Group details</h1>
            <Row>
                <Col span={24}>
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
                            <Input placeholder="" />{data.name}
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
                            <Input placeholder="{data.desc}" />
                        </Form.Item>
                        <Form.Item
                            name="skillsets"
                            label="Related skill set "
                            rules={[
                                {
                                    required: true,
                                    message: 'Please write down the related skill set!',
                                    min: 8,
                                },
                            ]}
                        >
                            <Input placeholder="To identify the skills that these group of credentials holders had to perform or had learned during the process of learning " />
                        </Form.Item>
                        <Form.Item
                            name="category"
                            label="Related category"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please choose a category!',
                                },
                            ]}
                        >
                            <Select
                                options={[
                                    {
                                        value: 'softwareDev',
                                        label: 'Software Development',
                                    },
                                    {
                                        value: 'cyberSec',
                                        label: 'Cyber Security',
                                    },
                                    {
                                        value: 'dataScience',
                                        label: 'Data Science',
                                    },
                                    {
                                        value: 'accounting',
                                        label: 'Accounting',
                                    },
                                    {
                                        value: 'businessAnalytics',
                                        label: 'Business Analytics',
                                    },
                                ]}
                            />
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    );

}

export async function getStaticProps({ params }) {
    const req = await fetch('http://localhost:3000/educator/group/create');
    const data = await req.json();
    return {
        props: { group: data }
    }
}
