import CertificateGrid from "./certificate_grid"

import { Pagination } from "antd";

import styles from '../../styles/Login.module.css';

export default function AllCertificate() {

  return (
    <div className={styles.all_certificates_section}>
      <h2>this is all certificate</h2>
      <CertificateGrid />
    </div>
  )
}