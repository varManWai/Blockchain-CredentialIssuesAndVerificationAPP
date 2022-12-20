import { Row, Space, Spin } from "antd";
import styles from './loader.module.css';

export default function Loader() {
  return (
    <Row justify="center" align="middle" className={styles.center}>
      <Space>
        <Spin size="large" />
      </Space>
    </Row>
  );
}
