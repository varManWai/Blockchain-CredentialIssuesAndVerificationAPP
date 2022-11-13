import CertificateGrid from "./certificate_grid"

import { Pagination } from "antd";

export default function AllCertificate() {
    const itemRender = (_, type, originalElement) => {
        if (type === 'prev') {
          return <a>Previous</a>;
        }
        if (type === 'next') {
          return <a>Next</a>;
        }
        return originalElement;
      };

    return (
        <div>
            <h2>this is all certificate</h2>
            <CertificateGrid />
            <Pagination total={80} itemRender={itemRender} />
        </div>
    )
}