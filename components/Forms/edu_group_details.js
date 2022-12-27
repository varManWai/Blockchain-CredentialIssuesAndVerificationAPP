import React, { useState } from 'react';
import { useRef } from 'react';
import { useRouter } from "next/router";

import { Row, List, Typography, Button, Form, Col, Input } from 'antd';
import { EditOutlined, CloseOutlined, SaveOutlined } from '@ant-design/icons'

export default function Edu_group_details({ group, receivers }) {
    const { Title } = Typography;
    const router = useRouter();

    const nameInputRef = useRef();
    const descriptionInputRef = useRef();

    const [componentDisabled, setComponentDisabled] = useState(true);
    const onFormLayoutChange = (disabled) => {
        setComponentDisabled(disabled);
    };

    const updateGroupHandler = async (e) => {
        //e.preventDefault();
        console.log(group._id);
        // get user inputs

        const enteredName = nameInputRef.current.value;
        const enteredDesc = descriptionInputRef.current.value;

        if (enteredName || enteredDesc || (enteredName && enteredDesc)) {
            const res = await fetch(`/api/educator/group/edit`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    groupID: group._id,
                    name: enteredName,
                    desc: enteredDesc
                }),
            });
        }
        else {
            console.log("Please fill in something");
        }

        // ready to POST it to API to create a group
        console.log("here");

        // const data = await res.json();
        router.back();

    };

    return (

        <div>
            <Row>
                <Title level={2}>Group details</Title>
                <Button
                    icon={<EditOutlined />}
                    style={{ marginLeft: "70vw" }}
                    checked={componentDisabled}
                    onClick={(e) => setComponentDisabled(e.target.checked)}
                    type="primary">
                    Edit
                </Button><br /><br />
                {/* <Col span={24}>col</Col> */}
            </Row>

            <Col span={12}>
                <Form
                    layout="vertical"
                    onValuesChange={onFormLayoutChange}
                    disabled={componentDisabled}
                    onSubmitCapture={updateGroupHandler}
                >
                    <Form.Item
                        name="name"
                        label="Display Name "
                        rules={[
                            {
                                message: 'Please give your group a name!',
                            },
                            {
                                type: 'string',

                            },
                        ]}
                    >
                        <input placeholder={group.groupName} ref={nameInputRef} size="202" />
                    </Form.Item>
                    <Form.Item
                        name="desc"
                        label="Description "
                        rules={[
                            {
                                message: 'Please explain what this group of credential holders had to do to earn the credential!',
                            },
                            {
                                type: 'string',

                            },
                        ]}
                    >
                        <input placeholder={group.desc} ref={descriptionInputRef} size="202" />
                    </Form.Item>
                    <button icon={<SaveOutlined />} style={{ marginRight: "2.5vw", }} type="primary"  >Save</button>
                    <button icon={<CloseOutlined />} danger style={{ marginRight: "2.5vw" }} >Cancel</button><br /><br />
                    {/* {receivers.map((receiver) => (
                            <ul>
                                <li>{receiver.name}</li>
                            </ul>

                        ))} */}

                </Form>
                <Title level={5}>Group receivers</Title>
                <List
                    itemLayout="horizontal"
                    dataSource={receivers}
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                                title={item.name}
                                description={item.email}
                            />
                        </List.Item>
                    )}
                />

            </Col>


        </div>

    );

}