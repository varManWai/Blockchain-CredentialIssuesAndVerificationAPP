import Image from "next/image";
import Layout from "../../components/Layout/layout";

const { LockOutlined, UserOutlined } = icons;
const { Button, Checkbox, Form, Input } = antd;

export default function Login() {
    return (
        <>
            <main>
                <section className="leftSide">
                    <Image
                        src="/images/login.jpg"
                        alt="Picture of Login Page"
                        width="100%"
                        height="100%"
                        objectFit="cover"
                        objectPosition="bottom"
                        priority //the image that must be show first
                    ></Image>
                </section>

                <section className="rightSide">
                    <h2>Login</h2>
                    <p>Welcome Back</p>

                    <form>
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
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Username!',
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
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>

                                <a className="login-form-forgot" href="">
                                    Forgot password
                                </a>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                                Or <a href="">register now!</a>
                            </Form.Item>
                        </Form>
                        <p>
                            Don't have an account? <a href="" >Sign Up</a>
                        </p>
                    </form>
                </section>
            </main>
        </>
    );
}
