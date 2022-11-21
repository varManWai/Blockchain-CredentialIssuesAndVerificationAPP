import {
    BookOutlined,
    TeamOutlined,
    CheckCircleOutlined,
    UserOutlined,
    DownOutlined,
    AppstoreOutlined,
    PieChartOutlined,
    BarsOutlined,
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
                <nav>
                    <Row className={styles.navbar_section} justify="center" align="center" >
                        <Col className={styles.navbar_section_items} span={2}>Logo</Col>
                        <Col className={styles.navbar_section_items} span={18}>
                            <Row className={styles.navbar_section_items_section} justify="space-between">
                                <Col span={22}>
                                    <Row>
                                        <Col span={3}>
                                            <a href="" onClick={() => router.push("/educator")}></a> nav 1
                                        </Col>
                                        <Col span={3}>
                                            <a href="" onClick={() => router.push("/educator")}></a> Nav 2
                                        </Col>
                                        <Col span={3}>
                                            <a href="" onClick={() => router.push("/educator")}></a> Nav 3
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={2}>Profile</Col>
                            </Row>
                        </Col>
                    </Row>



                    <Button
                        className={styles.barsMenu}
                        type="primary"
                        onClick={showDrawer}
                    >
                        <BarsOutlined />
                        {/* <span className={styles.barsBtn} /> */}
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
                                <a className={styles.drawer_nav_link} onClick={() => { router.push("/educator") }}>
                                    <Space>
                                        <UserOutlined />
                                        Dashboard
                                    </Space>
                                </a>
                            </Col>
                            <Col span={24}>
                                <a className={styles.drawer_nav_link} onClick={() => { router.push("/educator/certificates") }}>
                                    <Space>
                                        <UserOutlined />
                                        Certificates
                                    </Space>
                                </a>
                            </Col>
                            <Col span={24}>
                                <a className={styles.drawer_nav_link} onClick={() => { router.push("/educator/badges") }}>
                                    <Space>
                                        <UserOutlined />
                                        Badges
                                    </Space>
                                </a>
                            </Col>
                            <Col span={24}>
                                <a className={styles.drawer_nav_link} onClick={() => { router.push("/educator/profile") }}>
                                    <Space>
                                        <UserOutlined />
                                        Profile
                                    </Space>
                                </a>
                            </Col>
                        </Row>
                    </Drawer>
                </nav>
            )}
        </div>
    );
}
