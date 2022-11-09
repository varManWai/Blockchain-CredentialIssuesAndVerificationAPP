import Image from "next/image";
import Layout from "../../components/Layout/layout";

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Row, Col, Space } from 'antd';

import styles from '../../styles/Login.module.css';

export default function Login() {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div className={styles.login_layout}>
            <Row justify="center" className={styles.login}>
                <Col span={12}
                    xs={{
                        span: 24,
                    }}
                    sm={{
                        span: 12,
                    }}
                    lg={{
                        span: 12,
                    }}
                >
                    <Image
                        src="/images/login.jpg"
                        alt="Picture of Login Page"
                        layout='fill'
                        objectFit="cover"
                        objectPosition="bottom"
                        priority //the image that must be show first
                    ></Image>
                </Col>

                <Col
                    span={12}
                    className={styles.loginForm}
                    xs={{
                        span: 24,
                    }}
                    sm={{
                        span: 12,
                    }}
                    lg={{
                        span: 12,
                    }}
                >
                    <div className={styles.sub_loginForm}>
                        <h2 className={styles.header}>Login</h2>
                        <p className={styles.sub_header}>Welcome Back</p>


                        <button>Google</button>

                        <hr />

                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Email!',
                                    },
                                ]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Password!',
                                    },
                                ]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item >
                                <Row justify="space-between">
                                    <Col >
                                        <Form.Item name="remember" valuePropName="checked" noStyle>
                                            <Checkbox>Remember me</Checkbox>
                                        </Form.Item>
                                    </Col>

                                    <Col >
                                        <a className="login-form-forgot" href="" >
                                            Forgot password
                                        </a>
                                    </Col>
                                </Row>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className={`login-form-button ${styles.login_button}`}>
                                    Log in
                                </Button>
                            </Form.Item>

                            <Form.Item className={styles.text_align}>
                                Don't have an account? <a href="" >Sign Up</a>
                            </Form.Item>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
