import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Row, Col } from "antd";
import Password from "antd/lib/input/Password";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import styles from "../../styles/Login.module.css";


export default function Edu_Login_Form() {
    const router = useRouter();

    const [error, setError] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginEducator = async (event) => {
        event.preventDefault();

        const res = await fetch(`/api/educator/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });
        const data = await res.json();
        console.log("\n this is the data data");
        console.log(data);

        const { educator } = data;



        if (educator == null) {
            setError(true);
            // router.reload();
        } else {
            console.log('redirect to other page');
            // router.push('/educator/certificates');
        }
    };

    return (
        <div className={styles.sub_loginForm}>
            <h2 className={styles.header}>Login</h2>
            <p className={styles.sub_header}><span className={styles.emphasize_word}>Educator</span>, Welcome Back</p>

            <button>Google</button>

            {
                error
                    ?
                    <div>
                        <p>Invalid Email or Password 1</p>
                    </div>
                    :
                    ''
            }


            <hr className={styles.hr_line} />

            <Form
                name="educator_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onSubmitCapture={loginEducator}
            >
                <Form.Item
                    name="email"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: "Please input your Email!",
                        },
                    ]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Email"
                        value={email}
                        onChange={(event) => { setEmail(event.target.value) }}
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: "Please input your Password!",
                        },
                    ]}
                >
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => { setPassword(event.target.value) }}
                    />
                </Form.Item>
                <Form.Item>
                    <Row justify="space-between">
                        <Col>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                        </Col>

                        <Col>
                            <Link className="login-form-forgot" href="/educator_acc/forgotPwd">
                                Forgot password
                            </Link>
                        </Col>
                    </Row>
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className={`login-form-button ${styles.login_button}`}
                    >
                        Log in
                    </Button>
                </Form.Item>

                <Form.Item className={styles.text_align}>
                    Don't have an account? <Link href="/educator_acc/signup" >Sign Up</Link>
                </Form.Item>
            </Form>
        </div>
    );
}
