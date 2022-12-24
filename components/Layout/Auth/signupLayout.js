import Image from "next/image";

import { Row, Col } from "antd";

import styles from "./signupLayout.module.css";

export default function SignUpLayout({ children }) {
  return (
    <div className={styles.edu_signup_layout}>
      <Row justify="space-between" align="middle" className={styles.edu_signup}>
        <Col
          span={10}
          xs={{
            span: 24,
          }}
          sm={{
            span: 7,
          }}
          lg={{
            span: 10,
          }}
          className={styles.edu_signup_image}
        >
        </Col>

        <Col
          span={10}
          className={styles.loginForm}
          xs={{
            span: 24,
          }}
          sm={{
            span: 13,
          }}
          lg={{
            span: 10,
          }}
        >
          {children}
        </Col>
      </Row>
    </div>
  );
}
