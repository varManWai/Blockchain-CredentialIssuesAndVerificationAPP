import {
    BookOutlined,
    TeamOutlined,
    CheckCircleOutlined,
    UserOutlined,
    DownOutlined,
    AppstoreOutlined,
    PieChartOutlined,
} from "@ant-design/icons";
import { Button, Menu, Layout, Space, Dropdown, Drawer, Row, Col } from "antd";
import { useState, useCallback, useEffect } from "react";

const { Header, Sider } = Layout;
const { MenuItemGroup } = Menu;

import { useRouter } from "next/router";

import styles from "./navbar.module.css";

export default function Visitor() {
    return (
        <div>
            <Header>
                <div className="logo" />
                <Menu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={["2"]}
                    items={new Array(4).fill(null).map((_, index) => {
                        const key = index + 1;
                        return {
                            key,
                            label: `nav ${key}`,
                        };
                    })}
                />
                {/* <Dropdown.Button menu={menuProps} placement="bottom" icon={<UserOutlined />}>
                    Dropdown
                </Dropdown.Button> */}
            </Header>
        </div>
    );
}

export function Student() {
    const items = [
        {
            label: <a href="https://www.antgroup.com">1st menu item</a>,
            key: "0",
        },
        {
            label: <a href="https://www.aliyun.com">2nd menu item</a>,
            key: "1",
        },
        {
            type: "divider",
        },
        {
            label: "3rd menu item",
            key: "3",
        },
    ];

    return (
        <div>
            <Header>
                <div className="logo" />
                <Menu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={["1"]}
                    items={new Array(4).fill(null).map((_, index) => {
                        const key = index + 1;
                        return {
                            key,
                            label: `nav ${key}`,
                        };
                    })}
                />
                <Dropdown
                    menu={{
                        items,
                    }}
                    trigger={["click"]}
                >
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            Click me
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
            </Header>
        </div>
    );
}

export function Educator() {
    const router = useRouter();

    const useMediaQuery = (width) => {
        const [targetReached, setTargetReached] = useState(false);

        const updateTarget = useCallback((e) => {
            if (e.matches) {
                setTargetReached(true);
            } else {
                setTargetReached(false);
            }
        }, []);

        useEffect(() => {
            const media = window.matchMedia(`(max-width: ${width}px)`);
            media.addEventListener("change", updateTarget);

            // Check on mount (callback is not called until a change occurs)
            if (media.matches) {
                setTargetReached(true);
            }

            return () => media.removeEventListener("change", updateTarget);
        }, []);

        return targetReached;
    };

    const isBreakpoint = useMediaQuery(584);

    const [current, setCurrent] = useState("mail");
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    const rediretTo = (location) => {

        router.push(location);

    }

    return (
        <div>
            {isBreakpoint ? (
                <div>
                    <h1>small nav</h1>
                </div>
            ) : (
                <nav className={styles.menuBar}>
                    <div className={styles.logo}>
                        <a href="www.marca.com">logo</a>
                    </div>
                    <div className={styles.menuCon}>
                        <div className={styles.leftMenu}>
                            <Menu mode="horizontal">
                                <Menu.Item key="mail">
                                    <a href="www.marca.com">Home</a>
                                </Menu.Item>
                                {/* <SubMenu title={<span>Blogs</span>}>
                                    <MenuItemGroup title="Item 1">
                                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                                    </MenuItemGroup>
                                    <MenuItemGroup title="Item 2">
                                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                                    </MenuItemGroup>
                                </SubMenu> */}
                                <Menu.Item key="alipay">
                                    <a href="www.marca.com">Contact Us</a>
                                </Menu.Item>
                            </Menu>
                        </div>
                        <div className={styles.rightMenu}>
                            <Menu mode="horizontal">
                                <Menu.Item key="mail">
                                    <a href="www.marca.com">Signin</a>
                                </Menu.Item>
                                <Menu.Item key="app">
                                    <a href="www.marca.com">Signup</a>
                                </Menu.Item>
                            </Menu>
                        </div>
                        <Button
                            className={styles.barsMenu}
                            type="primary"
                            onClick={showDrawer}
                        >
                            <span className={styles.barsBtn} />
                        </Button>
                        <Drawer
                            title="Basic Drawer"
                            placement="right"
                            closable={false}
                            onClose={onClose}
                            open={visible}
                        >
                            <Row justify="center" align="center">
                                <Col span={24}>
                                    <a onClick={() => { router.push("/educator") }}>nav 1</a>
                                </Col>
                                <Col span={24}>
                                    <a onClick={() => { router.push("/educator/certificates") }}>nav 1</a>
                                </Col>
                                <Col span={24}>
                                    <a onClick={() => { router.push("/educator/badges") }}>nav 1</a>
                                </Col>
                                <Col span={24}>
                                    <a onClick={() => { router.push("/educator/profile") }}>nav 1</a>
                                </Col>
                            </Row>
                        </Drawer>
                    </div>
                </nav>
            )}
        </div>
    );
}
