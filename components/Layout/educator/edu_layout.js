import Image from "next/image";

import {  Row, Col } from "antd";

import styles from "../../../styles/Login.module.css";

export default function Edu_Layout({imgSrc, children}) {

  return (
    <div className={styles.edu_login_layout}>
      <Row justify="center" className={styles.edu_login}>
        <Col
          span={12}
          className={styles.edu_loginForm}
          xs={{
            span: 24,
          }}
          sm={{
            span: 12,
          }}
          lg={{
            span: 12,
          }}
        >
          {children}

        </Col>
      </Row>
    </div>
  );
}
