import Image from "next/image";

import { Row, Col } from "antd";

import styles from "./forgotPwdLayout.module.css";

export default function ForgotPwdLayout({ children }) {
  return (
    <div className={styles.edu_signup_layout}>
      <Row justify="space-between" align="middle" className={styles.edu_signup}>
        <Col
          span={14}
          xs={{
            span: 24,
          }}
          sm={{
            span: 11,
          }}
          lg={{
            span: 14,
          }}
          className={styles.edu_signup_image}
        >
          <img
            src="/images/resetPwd.jpg"
            alt={`Picture of sign up Page`}
            className={styles.standard_image}
          />
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
