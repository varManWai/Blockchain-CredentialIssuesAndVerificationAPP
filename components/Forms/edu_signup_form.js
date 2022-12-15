import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Row, Col, Select, Option, AutoComplete } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

import { useState } from "react";

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

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [jobTitle,setJobTitle] = useState('');
    const [phoneNo,setPhoneNo] = useState('');
    const [orgName,setOrgName] = useState('');
    const [orgURL,setOrgURL] = useState('');

    const registerEducator = async (event) => {
        event.preventDefault();

        const res = await fetch(`/api/educator/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
                name:name,
                phoneNum:phoneNo,
                jobTitle:jobTitle,
                orgName:orgName,
                orgURL:orgURL,
                accountType: 'free'
            }),
        });
        const data = await res.json();
        // console.log(data);

        router.push('/educator_acc/login');
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
                    <Input value={name} onChange={(event)=>{setName(event.target.value)}}/>
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
                    <Input value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
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
                    <Input.Password value={password} onChange={(event)=>{setPassword(event.target.value)}}/>
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
                    <Input value={jobTitle} onChange={(event)=>{setJobTitle(event.target.value)}}/>
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
                    <Input value={phoneNo} onChange={(event)=>{setPhoneNo(event.target.value)}}/>
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
                    <Input value={orgName} onChange={(event)=>{setOrgName(event.target.value)}}/>
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
                        <Input value={orgURL} onChange={(event)=>{setOrgURL(event.target.value)}}/>
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
