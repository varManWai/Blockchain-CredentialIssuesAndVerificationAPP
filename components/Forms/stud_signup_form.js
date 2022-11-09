import { LockOutlined, UserOutlined, CheckSquareOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Row, Col } from "antd";
import { useRouter } from "next/router";

import styles from "../../styles/Login.module.css";

export default function Stud_SignUp_Form() {

    const router = useRouter();

    const redirectToLogin = (event) => {
        event.preventDefault();
        router.push('/acc_student/login');
    }

    return (
        <div className={styles.sub_loginForm}>
            <h2 className={styles.header}>Sign Up</h2>
            <p className={styles.sub_header}>Student, Welcome Back</p>

            <button>Google</button>

            <hr className={styles.hr_line} />

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
                    <Button
                        type="primary"
                        htmlType="submit"
                        className={`login-form-button ${styles.login_button}`}
                    >
                        Log in
                    </Button>
                </Form.Item>

                <Form.Item>
                    <Row>
                        <Col span={1}>
                            <CheckSquareOutlined style={{ fontSize: '110%'}}/>
                        </Col>
                        <Col span={23} style={{paddingLeft: '10px'}}>
                            <span className={styles.xs_font}>
                                By signing up, you are agree to our <a href="">Terms & Conditions and Privacy Policy</a>, including Cookie Use.
                            </span>
                        </Col>
                    </Row>
                </Form.Item>

                <Form.Item className={styles.text_align}>
                    Already have an account? <a href="" onClick={redirectToLogin}>Login</a>
                </Form.Item>
            </Form>
        </div>
    );
}
