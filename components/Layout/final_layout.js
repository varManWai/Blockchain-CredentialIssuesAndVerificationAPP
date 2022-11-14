import Visitor, { Student, Educator } from "./navbar";
import BFooter from "./footer";


import { UserOutlined } from '@ant-design/icons';
import { Row, Col, Layout, Breadcrumb, Menu, Dropdown } from "antd";
const { Header, Footer, Content } = Layout;

import styles from '../../styles/Login.module.css'


export default function Final_Layout({ children, criteria, footer }) {
  const handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  };

  const items = [
    {
      label: '1st menu item',
      key: '1',
      icon: <UserOutlined />,
    },
    {
      label: '2nd menu item',
      key: '2',
      icon: <UserOutlined />,
    },
    {
      label: '3rd menu item',
      key: '3',
      icon: <UserOutlined />,
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  const LayoutSelector = () => {
    if (criteria == "student") {
      return (
        <div>
          <Student />
          {children}
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </div>
      )

    } else if (criteria == "educator") {
      return (
        <>
          <Layout style={{ minHeight: "100vh" }}>
            <Educator />
            <Layout className="site-layout">
              <Header
                className="site-layout-background"
                style={{
                  padding: 0,
                  background: "white",
                }}
              />
              {/* <Dropdown.Button menu={menuProps} placement="bottom" icon={<UserOutlined />}>
              Dropdown
            </Dropdown.Button> */}
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
                    background: "white",
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
        </>
      );
    } else if (criteria == "visitor") {
      return (
        <div>
          <Visitor />
          {children}
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </div>
      )
    }
  };

  return <LayoutSelector />;
}
