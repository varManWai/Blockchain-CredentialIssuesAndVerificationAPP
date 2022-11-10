import Image from "next/image";

import { Row, Col } from "antd";

import styles from "../../../styles/Login.module.css";

export default function Edu_SignUp_Layout({ children }) {
  return (
    <div className={styles.edu_signup_layout}>
      <Row justify="center" align="center" className={styles.edu_signup}>
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
          <Image
            src="/images/forgotPwd.jpg"
            alt={`Picture of sign up Page`}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority //the image that must be show first
          ></Image>
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
