import Visitor, { Student, Educator } from "./navbar";
import BFooter from "./footer";

import { Row, Col, Layout, Breadcrumb, Menu } from "antd";
const { Header, Footer, Content } = Layout;

export default function Final_Layout({ children, criteria, footer }) {
  const NavBar = () => {
    if (criteria == "student") {
      return <Student />;
    } else if (criteria == "educator") {
      return <Educator />;
    } else if (criteria == "visitor") {
      return <Visitor />;
    }
  };

  // const Footer = () => {
  //     if (footer) {
  //         return <BFooter />
  //     }
  // }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <NavBar />
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            background: 'white'
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
              background: 'white'
            }}
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
