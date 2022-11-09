import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Row, Col } from "antd";
import { useRouter } from "next/router";

import styles from "../../styles/Login.module.css";


export default function Stud_Login_Form() {
    const router = useRouter();
    
    const redirectToSignUp = (event) =>{
        event.preventDefault();
        router.push('/acc_student/signup');
    }

    return (
        <div className={styles.sub_loginForm}>
            <h2 className={styles.header}>Login</h2>
            <p className={styles.sub_header}>Student, Welcome Back</p>

            <button>Google</button>

            <hr className={styles.hr_line}/>

            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
            >
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Email!",
                        },
                    ]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Email"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Password!",
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
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
                            <a className="login-form-forgot" href="">
                                Forgot password
                            </a>
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
                    Don't have an account? <a href="" onClick={redirectToSignUp}>Sign Up</a>
                </Form.Item>
            </Form>
        </div>
    );
}
