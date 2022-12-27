import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Row, Col, Alert } from "antd";
import Password from "antd/lib/input/Password";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

import styles from "./login.module.css";

import { signIn } from "next-auth/react";
import Loader from "../Layout/loader";

export default function Edu_Login_Form() {
  const router = useRouter();

  // const [error, setError] = useState(false);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const loginEducator = async (event) => {
    event.preventDefault();

    try {
      const enteredEmail = emailInputRef.current.input.value;
      const enteredPassword = passwordInputRef.current.input.value;

      setLoading(true);

      const result = await signIn("credentials", {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });

      console.log(result);

      if (result.error) {
        throw new Error(result.error || "message something went wrong");
      }
      
      await router.push("/educator/certificates");

    } catch (err) {
      console.log(err);
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.sub_loginForm}>
          <h2 className={styles.header}>Login</h2>
          <p className={styles.sub_header}>
            <span className={styles.emphasize_word}>Educator</span>, Welcome
            Back
          </p>

          {error ? (
            <div style={{ marginBottom: "15px" }}>
              <Alert message={`Error: ${error}`} type="error" />
            </div>
          ) : (
            ""
          )}

          <hr className={styles.hr_line} />

          <Form
            name="educator_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onSubmitCapture={loginEducator}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
                ref={emailInputRef}
                required
                minLength="5"
                maxLength="50"
              />
            </Form.Item>
            <Form.Item
              name="password"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                ref={passwordInputRef}
                required
                minLength="1"
                maxLength="30"
              />
            </Form.Item>
            <Form.Item>
              <Row justify="space-between">
                <Col>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>
                </Col>

                <Col>
                  <Link
                    className="login-form-forgot"
                    href="/educator/forgotPwd"
                  >
                    Forgot password
                  </Link>
                </Col>
              </Row>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={`login-form-button ${styles.login_button}`}
              >
                Log in
              </Button>
            </Form.Item>

            <Form.Item className={styles.text_align}>
              Don't have an account?{" "}
              <Link href="/educator/signup">Sign Up</Link>
            </Form.Item>
          </Form>
        </div>
      )}
    </>
  );
}
