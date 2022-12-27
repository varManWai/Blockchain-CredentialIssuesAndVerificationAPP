import React from "react";
import { useRouter } from "next/router";

import {
  Typography,
  Button,
  Checkbox,
  Form,
  Col,
  Row,
  Input,
  Upload,
  Select,
  Image,
} from "antd";
import { EditOutlined, CloseOutlined, SaveOutlined } from "@ant-design/icons";

export default function Edu_group_details({ group, receivers }) {
  const { Title } = Typography;
  const router = useRouter();

  const updateGroupHandler = async (e) => {
    //e.preventDefault();
    console.log(group._id);
    // get user inputs
    // const enteredName = nameInputRef.current.value;
    // const enteredDesc = descriptionInputRef.current.value;

    // ready to POST it to API to create a group
    console.log("here");
    const res = await fetch(`/api/educator/group/edit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        groupID: group._id,
        name: "NextJS Certification edited ",
        desc: "edited desc 2",
      }),
    });
    // const data = await res.json();

    // back to display all group page
    router.push("educator/group/");
  };

  return (
    <div>
      <Title level={2}>Group details</Title>
      <br />

      <Col span={12}>
        <Form
          // form={form}
          layout="vertical"
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
          // onClick={onCreate}
        >
          <Form.Item
            name="name"
            label="Display Name "
            rules={[
              {
                required: true,
                message: "Please give your group a name!",
              },
              {
                type: "string",
                min: 8,
              },
            ]}
          >
            <p>{group.groupName}</p>
          </Form.Item>
          <Form.Item
            name="desc"
            label="Description "
            rules={[
              {
                required: true,
                message:
                  "Please explain what this group of credential holders had to do to earn the credential!",
              },
              {
                type: "string",
                min: 20,
              },
            ]}
          >
            <p>{group.desc}</p>
          </Form.Item>
          <Form.Item
            name="recipients"
            label="Receivers "
            rules={[
              {
                required: true,
                message: "",
              },
              {
                type: "string",
                min: 20,
              },
            ]}
          >
            {receivers.map((receiver) => (
              <ul key={receiver._id}>
                <li>{receiver.name}</li>
              </ul>
            ))}
          </Form.Item>

          <Button icon={<EditOutlined />} type="primary">
            Edit
          </Button>
          <br />
          <br />
          <Button icon={<CloseOutlined />} danger>
            Cancel
          </Button>
          <br />
          <br />
          <Button
            icon={<SaveOutlined />}
            type="primary"
            onClick={() => updateGroupHandler()}
          >
            Save
          </Button>
        </Form>
      </Col>
    </div>
  );
}
