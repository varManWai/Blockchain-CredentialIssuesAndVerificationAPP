import React from 'react';
import { Form, Button, Input, Alert } from "antd";
import { useRef } from "react";
import { useRouter } from 'next/router';
import { useState } from "react";


export default function Update_Detail_Form({ educator }) {
    const [form] = Form.useForm();

    const nameInputRef = useRef();
    const phoneNumInputRef = useRef();
    const jobTitleInputRef = useRef();
    const orgNameInputRef = useRef();
    const orgURLInputRef = useRef();

    const router = useRouter();

    const [error, setError] = useState("");

    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };

    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };

    const onFinish = (values) => {
        console.log(values);
    };

    // form onsubmit fucntion
    const updateDetailsHandler = async (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.input.value;
        const enteredPhoneNum = phoneNumInputRef.current.input.value;
        const enteredJobTitle = jobTitleInputRef.current.input.value;
        const enteredOrgName = orgNameInputRef.current.input.value;
        const enteredOrgURL = orgURLInputRef.current.input.value;

        try {
            if (enteredName || enteredPhoneNum || enteredJobTitle || enteredOrgName || enteredOrgURL) {

                const res = await fetch(`/api/educator/updateDetails`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        educatorId: educator._id,
                        name: enteredName,
                        phoneNum: enteredPhoneNum,
                        jobTitle: enteredJobTitle,
                        orgName: enteredOrgName,
                        orgURL: enteredOrgURL
                    }),
                });

                router.reload(window.location.pathname);
            } else {
                throw new Error("Please update something!");
            }



        } catch (err) {
            console.log(err);
            setError(err.message);
        }
    };

    return (
        <div>
            {error ? (
                <div style={{ marginBottom: "15px" }}>
                    <Alert message={`Error: ${error}`} type="error" />
                </div>
            ) : (
                ""
            )}
            <Form
                name="control-hooks"
                onFinish={onFinish}
                autoComplete="off"
                {...layout}
                form={form}
                onSubmitCapture={updateDetailsHandler}
            >
                <Form.Item
                    label="Current name"
                    name="current name"
                >
                    <span>{educator.name}</span>
                </Form.Item>
                <Form.Item
                    label="Current phone number"
                    name="current phone number"
                >
                    <span>{educator.phoneNum}</span>
                </Form.Item>
                <Form.Item
                    label="Current job title"
                    name="current job title"
                >
                    <span>{educator.jobTitle}</span>
                </Form.Item>
                <Form.Item
                    label="Current organization name"
                    name="current organization name"
                >
                    <span>{educator.orgName}</span>
                </Form.Item>
                <Form.Item
                    label="Current organization URL"
                    name="current organization URL"
                >
                    <span>{educator.orgURL}</span>
                </Form.Item>


                <Form.Item
                    label="New name"
                    name="new name"
                >
                    <Input placeholder='Your new name' ref={nameInputRef} />
                </Form.Item>
                <Form.Item
                    label="New phone number"
                    name="new phone number"
                >
                    <Input placeholder='Your new phone number' ref={phoneNumInputRef} />
                </Form.Item>
                <Form.Item
                    label="New job title"
                    name="new job title"
                >
                    <Input placeholder='Your new job title' ref={jobTitleInputRef} />
                </Form.Item>
                <Form.Item
                    label="New organization name"
                    name="new organization name"
                >
                    <Input placeholder='Your new organization name' ref={orgNameInputRef} />
                </Form.Item>
                <Form.Item
                    label="New organization URL"
                    name="new organization URL"
                >
                    <Input placeholder='Your new organization URL' ref={orgURLInputRef} />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button htmlType="button" onClick={() => { form.resetFields(); }}>
                        Reset
                    </Button>
                </Form.Item>
            </Form>

        </div>
    );
}