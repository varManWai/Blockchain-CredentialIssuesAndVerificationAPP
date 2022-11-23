import Visitor, { Student, Educator } from "./navbar";
import BFooter from "./footer";


import { UserOutlined } from '@ant-design/icons';
import { Row, Col, Layout, Breadcrumb, Menu, Dropdown } from "antd";
const { Header, Footer, Content } = Layout;

import styles from '../../styles/Login.module.css'
import { useRouter } from "next/router";

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

  const router = useRouter();
  const pathArr = router.pathname.split("/");
  let keyNum = 0;
  pathArr.shift();
  pathArr.shift();
  pathArr.unshift("Home");

  const handleNav = (event, currentPath) => {

    event.preventDefault();

    console.log("clicked");

    if (currentPath == "Home") {
      router.push("/educator/");
    } else {
      const redirectPath = router.pathname.split(currentPath);
      console.log(redirectPath[0]);
      router.push(redirectPath[0] + currentPath);

    }
  }

  const LayoutSelector = () => {
    if (criteria == "student") {

      return (
        <>
          <Layout style={{ minHeight: "100vh" }}>
            <Student />
            <Layout>
              {/* <Dropdown.Button menu={menuProps} placement="bottom" icon={<UserOutlined />}>
              Dropdown
            </Dropdown.Button> */}
              <Content
                style={{
                  margin: "0 1.6rem",
                }}
              >
                <Breadcrumb
                  style={{
                    margin: "16px 0",
                  }}
                >
                  {pathArr.map(path => {
                    return (
                      <Breadcrumb.Item key={keyNum++}>
                        <a href="" onClick={e => handleNav(e, path)}>{path.charAt(0).toUpperCase() + path.slice(1)}</a>
                      </Breadcrumb.Item>
                    )
                  })}

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
      )

    } else if (criteria == "educator") {



      return (
        <>
          <Layout style={{ minHeight: "100vh" }}>
            <Educator />
            <Layout>
              {/* <Dropdown.Button menu={menuProps} placement="bottom" icon={<UserOutlined />}>
              Dropdown
            </Dropdown.Button> */}
              <Content
                style={{
                  margin: "0 1.6rem",
                }}
              >
                <Breadcrumb
                  style={{
                    margin: "16px 0",
                  }}
                >
                  {pathArr.map(path => {
                    return (
                      <Breadcrumb.Item key={keyNum++}>
                        <a href="" onClick={e => handleNav(e, path)}>{path.charAt(0).toUpperCase() + path.slice(1)}</a>
                      </Breadcrumb.Item>
                    )
                  })}

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
    } else {
      return (
        <div>
          {children}
        </div>
      )
    }
  };

  return <LayoutSelector />;
}
