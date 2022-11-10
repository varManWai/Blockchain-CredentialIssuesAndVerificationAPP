import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Row, Col, Select, Option, AutoComplete } from "antd";
import { useRouter } from "next/router";

import { useState } from "react";

import styles from "../../styles/Login.module.css";


export default function Edu_SignUp_Form() {
    const router = useRouter();

    const redirectToLogin = (event) => {
        event.preventDefault();
        router.push('/acc_educator/login');
    }

    const [autoCompleteResult, setAutoCompleteResult] = useState([]);

    const onWebsiteChange = (value) => {
        if (!value) {
            setAutoCompleteResult([]);
        } else {
            setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
        }
    };
    const websiteOptions = autoCompleteResult.map((website) => ({
        label: website,
        value: website,
    }));

    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 8,
            },
        },
        wrapperCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 16,
            },
        },
    };

    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
        },
    };

    return (
        <div className={styles.sub_loginForm}>
            <h2 className={styles.header}>Sign Up</h2>
            <p className={styles.sub_header}><span className={styles.emphasize_word}>Educator</span>, Welcome Back</p>

            <hr className={styles.hr_line} />

            <Form
                {...formItemLayout}
                name="educator_signup"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
            >
                <Form.Item
                    name="firstName"
                    label="First Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your first name!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="lastName"
                    label="Last Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your last name!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
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
                >
                    <Input />
                </Form.Item>

                <Form.Item
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

                <Form.Item
                    name="jobTitle"
                    label="Job Title"
                    tooltip="What is your job position?"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your nickname!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your phone number!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="orgName"
                    label="Organization Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your organization name!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="organizationURL"
                    label="Organization URL"
                    rules={[
                        {
                            required: true,
                            message: 'Please input organization url!',
                        },
                    ]}
                    className={styles.margin_bottom_input}
                >
                    <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">
                        <Input />
                    </AutoComplete>
                </Form.Item>

                <Form.Item
                    {...tailFormItemLayout}
                >
                    <Button
                        type="primary"
                        htmlType="submit"
                        className={`login-form-button ${styles.login_button}`}
                    >
                        Log in
                    </Button>
                </Form.Item>

                <Form.Item className={`${styles.margin_bottom_input} ${styles.text_align}`}
                    {...tailFormItemLayout}>
                    Already have an account? <a href="" onClick={redirectToLogin} >Login</a>
                </Form.Item>
            </Form>
        </div>
    );
}
