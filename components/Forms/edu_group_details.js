import React from 'react';
import { useRef } from 'react';
import { useRouter } from "next/router";
import { useState } from "react";

import { Row, List, Typography, Button, Form, Col, Input, Alert } from 'antd';

export default function Edu_group_details({ group, receivers }) {
  const [form] = Form.useForm();
  const { Title } = Typography;
  const router = useRouter();

  const nameInputRef = useRef();
  const descriptionInputRef = useRef();
  const [error, setError] = useState("");

  const updateGroupHandler = async (e) => {
    e.preventDefault();
    console.log(group._id);
    // get user inputs

    const enteredName = nameInputRef.current.input.value;
    const enteredDesc = descriptionInputRef.current.input.value;

    try {
      if (enteredName || enteredDesc) {
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

      <Title level={2}>Group details</Title>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row" span={12}>
          <Form
            layout="vertical"
          >
            <Form.Item
              name="name"
              label="Current Display Name "
              rules={[]}
            >
              <Input placeholder={group.groupName} disabled />
            </Form.Item>
            <Form.Item
              name="desc"
              label="Current Description "
              rules={[]}
            >
              <Input placeholder={group.desc} disabled />
            </Form.Item>
          </Form>
        </Col>
        <Col className="gutter-row" span={12}>
          {error ? (
            <div style={{ marginBottom: "15px" }}>
              <Alert message={`Error: ${error}`} type="error" />
            </div>
          ) : (
            ""
          )}

          <Form
            layout="vertical"
            form={form}
            onSubmitCapture={updateGroupHandler}
          >
            <Form.Item
              name="name"
              label="Display Name "
              rules={[]}
            >
              <Input ref={nameInputRef} />
            </Form.Item>
            <Form.Item
              name="desc"
              label="Description "
              rules={[]}
            >
              <Input ref={descriptionInputRef} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button htmlType="button" onClick={() => { form.resetFields(); }}>
                Reset
              </Button>
            </Form.Item>
          </Form>

        </Col>

      </Row>

      <Title level={5}>Group receivers</Title>
      {receivers == undefined || receivers.length == 0 ? (
        <Row
          justify="center"
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
          wrap
        >
          <div>
            <h3 >0 receivers</h3>
          </div>
        </Row>
      ) : (
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
      )}


    </div>

  );

}
