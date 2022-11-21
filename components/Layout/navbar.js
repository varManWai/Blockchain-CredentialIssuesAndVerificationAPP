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

import Image from "next/image";

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

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    const items = [
        {
            label: <a href="" onClick={() => router.push("/educator/profile")}>Profile</a>,
            key: '0',
        },

        {
            type: 'divider',
        },
        {
            label: <a href="" onClick={() => router.push("/educator")}>Sign Out</a>,
            key: '1',
        },
    ];

    return (
        <div>
            {isBreakpoint ? (
                <nav>
                    <Row className={styles.navbar_section} justify="space-between" align="center" >
                        <Col className={styles.navbar_section_items} span={4}>
                            <Image
                                src="/images/forgotPwd.jpg"
                                alt="this is our logo"
                                fill
                                priority
                                sizes="100%"
                                className={styles.navbar_section_items_1_image}
                            />
                        </Col>
                        <Col className={styles.navbar_section_items} >
                            <Button
                                className={styles.barsMenu}
                                type="primary"
                                onClick={showDrawer}
                            >
                                <BarsOutlined />
                                {/* <span className={styles.barsBtn} /> */}
                            </Button>
                            <Drawer
                                title=""
                                placement="right"
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
                        </Col>
                    </Row>
                </nav>
            ) : (
                <nav>
                    <Row className={styles.navbar_section} justify="space-between" align="center" >
                        <Col className={styles.navbar_section_items} span={3}>
                            <Image
                                src="/images/forgotPwd.jpg"
                                alt="this is our logo"
                                fill
                                priority
                                sizes="100%"
                                className={styles.navbar_section_items_1_image}
                            />
                        </Col>
                        <Col className={styles.navbar_section_items} span={20}>
                            <Row className={styles.navbar_section_items_section} justify="space-between" align="center">
                                <Col span={20}>
                                    <Row>
                                        <Space size="large">
                                            <Col>
                                                <a className={styles.navbar_section_items_section_1_item} onClick={() => router.push("/educator")}>Dashboard</a>
                                            </Col>
                                            <Col >
                                                <a className={styles.navbar_section_items_section_1_item} onClick={() => router.push("/educator/certificates")}>Certificates</a>
                                            </Col>
                                            <Col >
                                                <a className={styles.navbar_section_items_section_1_item} onClick={() => router.push("/educator/badges")}>Badges</a>
                                            </Col>
                                            <Col >
                                                <a className={styles.navbar_section_items_section_1_item} onClick={() => router.push("/educator/groups")}>groups</a>
                                            </Col>
                                        </Space>
                                    </Row>
                                </Col>
                                <Col className={styles.navbar_section_items_section_2} span={4}>
                                    <Dropdown
                                        placement="bottom"
                                        arrow={{
                                            pointAtCenter: true,
                                        }}
                                        menu={{
                                            items,
                                        }}
                                        trigger={['click']}
                                        className={styles.navbar_section_items_section_2_dropdown}
                                    >

                                        <button className={styles.navbar_section_items_section_2_button}
                                            onClick={(e) => e.preventDefault()}>
                                            <Image
                                                src="/images/resetPwd.jpg"
                                                alt="personal image"
                                                fill
                                                priority
                                                sizes="100%"
                                                className={styles.navbar_section_items_section_2_item}
                                            />
                                        </button>
                                    </Dropdown>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </nav>
            )}
        </div>
    );
}
