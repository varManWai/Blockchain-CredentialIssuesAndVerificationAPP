import Educator from "./navbar";

import { UserOutlined } from "@ant-design/icons";
import { Row, Col, Layout, Breadcrumb, Menu, Dropdown } from "antd";
const { Header, Footer, Content } = Layout;

import styles from "./layout.module.css";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function EducatorLayout({ children }) {
  const router = useRouter();

  // Breadcrumb logic - start
  let pathArr = router.pathname.split("/");

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
  };
  // Breadcrumb logic - end

  const { data: session, status } = useSession();
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    if (status === "authenticated") {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [status]);

  return (
    <>
      {isLogin ? (
        <div style={{background:"white"}}>{children}</div>
      ) : (
        <Layout style={{ minHeight: "100vh" }}>
          <Educator />
          <Layout style={{
                background: "white",
              }}>
            {/* <Dropdown.Button menu={menuProps} placement="bottom" icon={<UserOutlined />}>
          Dropdown
        </Dropdown.Button> */}
            <Content
              style={{
                margin: "0 1.6rem",
                background: "white",
              }}
            >
              <Breadcrumb
                style={{
                  margin: "20px 20px",
                }}
              >
                {pathArr.map((path) => {
                  return (
                    <Breadcrumb.Item key={keyNum++}>
                      <a href="" onClick={(e) => handleNav(e, path)}>
                        {path.charAt(0).toUpperCase() + path.slice(1)}
                      </a>
                    </Breadcrumb.Item>
                  );
                })}
              </Breadcrumb>

              <div
                className="site-layout-background"
                style={{
                  padding: 24,
                  paddingBottom: 50,
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
                background:"black",
                color:"white",
              }}
            >
              CredBLOCK ©2022 Created by Lai & Ho
            </Footer>
          </Layout>
        </Layout>
      )}
    </>
  );
}
