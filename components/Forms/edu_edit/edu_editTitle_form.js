import { Form, Input, Button } from "antd";

import styles from '../../../styles/Login.module.css';

export default function EditTitle() {

  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 20,
    },
  };

  const tailLayout = {
    wrapperCol: {
      span: 24,
    },
  };

  return (
    <div>
      <h1>Edit Title</h1>
      <Form
        {...layout}
        name="educator_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item label="Title">
          <Input placeholder="your current title" disabled value="example title"/>
        </Form.Item>
        <Form.Item label="New Title">
          <Input placeholder="Your new title" />
        </Form.Item>
        <Form.Item {...tailLayout} className={styles.addCert_button_container}>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
}
