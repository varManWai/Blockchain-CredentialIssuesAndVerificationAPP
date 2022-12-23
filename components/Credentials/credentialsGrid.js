import CertificateItem from "./credentialItem";

import { Row, Col, Space, Pagination } from "antd";
import styles from "./credentialsGrid.module.css";
import { useState } from "react";

export default function CredentialsGrid({ items, specDeletePath }) {

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Row
        justify="center"
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
        wrap
      >
        {items == undefined || items.length == 0 ? (
          <div>
            <h2>0 credentials</h2>
          </div>
        ) : (
          items.map((item) => {
            return (
              <Col
                key={item._id}
                className={`gutter-row ${styles.margin_bottom_card}`}
              >
                <CertificateItem cert={item} deletePath={specDeletePath} />
              </Col>
            );
          })
        )}
        {/* {console.log("below the things")}
                {console.log(items)} */}
      </Row>
      <Row justify="center">
        <Col>
          <Pagination defaultCurrent={1} total={50} />
        </Col>
      </Row>
    </div>
  );
}
