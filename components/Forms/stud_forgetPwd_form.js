import { Form, Input, Button } from "antd";
import { useRouter } from "next/router"

import styles from "../../styles/Login.module.css";

export default function Stud_ForgotPwd_Form() {

    const router = useRouter();

    const redirectToLogin = (event) => {
        event.preventDefault();
        router.push('/acc_student/login');
    }

    const [form] = Form.useForm();

    return (
        <div className={styles.sub_loginForm}>
            <h2 className={styles.forgotPwd_header}>Forgot Password</h2>
            <p className={styles.forgotPwd_sub_header}>Please provide your account email</p>

            <Form
                form={form}
                name="forgot password"
                scrollToFirstError
            >
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                    className={styles.margin_bottom_input}
                >
                    <Input />
                </Form.Item>

                {/* <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                 */}

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className={`login-form-button ${styles.login_button}`}>
                        Register
                    </Button>
                </Form.Item>
            </Form>
            <a href="" onClick={redirectToLogin} className={styles.forgotPwd_redirect}>Back to login</a>
        </div>
    )
}