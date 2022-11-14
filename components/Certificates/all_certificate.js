import CertificateGrid from "./certificate_grid"

import { Pagination, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import styles from '../../styles/Login.module.css';

export default function AllCertificate() {

  return (
    <div className={styles.all_certificates_section}>
      <Button icon={<PlusOutlined />} type="primary">Primary Button</Button>
      <h2>this is all certificate</h2>
      <CertificateGrid />
    </div>
  )
}