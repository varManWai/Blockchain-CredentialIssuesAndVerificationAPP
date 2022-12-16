import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Row, Col, Select, Option, AutoComplete } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

import { useRef, useState } from "react";

import styles from "../../styles/Login.module.css";


export default function Edu_SignUp_Form() {
    const router = useRouter();

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

    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const jobTitleInputRef = useRef();
    const phoneNoInputRef = useRef();
    const orgNameInputRef = useRef();
    const orgURLInputRef = useRef();

   
    const registerEducator = async (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.input.value;
        const enteredEmail = emailInputRef.current.input.value;
        const enteredPassword = passwordInputRef.current.input.value;
        const enteredJobTitle = jobTitleInputRef.current.input.value;
        const enteredPhoneNo = phoneNoInputRef.current.input.value;
        const enteredOrgName = orgNameInputRef.current.input.value;
        const enteredOrgURL = orgURLInputRef.current.input.value;
    
        console.log(enteredName);
        console.log(enteredEmail);
        console.log(enteredPassword);
        console.log(enteredJobTitle);
        console.log(enteredPhoneNo);
        console.log(enteredOrgURL);


        try {
            const res = await fetch(`/api/auth/educator/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                    name: enteredName,
                    phoneNum: enteredPhoneNo,
                    jobTitle: enteredJobTitle,
                    orgName: enteredOrgName,
                    orgURL: enteredOrgURL,
                    accountType: 'free',
                }),
            });

            const result = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'Something went wrong!');
            }

            console.log(result);



        } catch (err) {
            console.log('Error happend on: educator sign up page');
            console.log(err);
        }

        // router.push('/educator_acc/login');
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

                onSubmitCapture={registerEducator}
            >
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your first name!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input ref={nameInputRef} />
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
                    <Input ref={emailInputRef} />
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
                    <Input.Password ref={passwordInputRef} />
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
                    <Input ref={jobTitleInputRef} />
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
                    <Input ref={phoneNoInputRef} />
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
                    <Input ref={orgNameInputRef} />
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
                        <Input ref={orgURLInputRef} />
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
                        Sign Up
                    </Button>
                </Form.Item>

                <Form.Item className={`${styles.margin_bottom_input} ${styles.text_align}`}
                    {...tailFormItemLayout}>
                    Already have an account? <Link href="/educator_acc/login" >Login</Link>
                </Form.Item>
            </Form>
        </div>
    );
}
