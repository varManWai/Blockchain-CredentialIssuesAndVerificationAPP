import { Form, Input, Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../../styles/Login.module.css";

export default function Edu_ForgotPwd_Form() {
  const router = useRouter();

  const [form] = Form.useForm();

  return (
    <div className={styles.sub_loginForm}>
      <h2 className={styles.forgotPwd_header}>Forgot Password</h2>
      <p className={styles.forgotPwd_sub_header}>
        Please provide your account email
      </p>

      <Form form={form} name="forgot password" scrollToFirstError>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
          className={styles.margin_bottom_input}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={`login-form-button ${styles.login_button}`}
          >
            Send
          </Button>
        </Form.Item>
      </Form>
      <Link
        href="/educator_acc/login"
        className={styles.forgotPwd_redirect}
      >
        Back to login
      </Link>
    </div>
  );
}
