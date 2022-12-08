import {
    BookOutlined,
    TeamOutlined,
    CheckCircleOutlined,
    UserOutlined,
    DownOutlined,
    SafetyOutlined,
    DesktopOutlined,
    BarsOutlined,
} from "@ant-design/icons";
import { Button, Menu, Layout, Space, Dropdown, Drawer, Row, Col } from "antd";
import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const { Header, Sider } = Layout;
const { MenuItemGroup } = Menu;

import { useRouter } from "next/router";

import styles from "./navbar.module.css";


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

const router = useRouter();

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
            label: <Link href="/educator/profile" >Profile</Link>,
            key: '0',
        },

        {
            type: 'divider',
        },
        {
            label: <Link href="/educator">Sign Out</Link>,
            key: '1',
        },
    ];

    return (
        <div>
            {isBreakpoint ? (
                <nav>
                    <Row className={styles.navbar_section_student} justify="space-between" align="center" >
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
                                className={styles.barsMenu_student}
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
                                <Row justify="center" align="center" style={{ minHeight: '100%' }}>
                                    <Col>
                                        <Row justify="center" align="center" >
                                            <Col span={24}>
                                                <Link className={styles.drawer_nav_link} href="/educator/certificates">
                                                    <Space>
                                                        <BookOutlined />
                                                        Credentials
                                                    </Space>
                                                </Link>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col span={24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }} onClick={() => { router.push("/educator/profile") }}>
                                        <a className={styles.drawer_nav_link_danger} >
                                            <Space>
                                                <UserOutlined />
                                                Sign Out
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
                    <Row className={styles.navbar_section_student} justify="space-between" align="center" >
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
                                                <Link className={styles.navbar_section_items_section_1_item_student} href="/student/credentials">Credentials</Link>
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

                                        <button className={styles.navbar_section_items_section_2_button_student}
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

export function Educator() {

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
            label: <Link href="/educator/profile">Profile</Link>,
            key: '0',
        },

        {
            type: 'divider',
        },
        {
            label: <Link href="/educator">Sign out</Link>,
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
                                <Row justify="center" align="center" style={{ minHeight: '100%' }}>
                                    <Col>
                                        <Row justify="center" align="center" >
                                            <Col span={24}>
                                                <Link className={styles.drawer_nav_link} href="/educator">
                                                    <Space>
                                                        <DesktopOutlined />
                                                        Dashboard
                                                    </Space>
                                                </Link>
                                            </Col>
                                            <Col span={24}>
                                                <Link className={styles.drawer_nav_link} href="/educator/certificates">
                                                    <Space>
                                                        <BookOutlined />
                                                        Certificates
                                                    </Space>
                                                </Link>
                                            </Col>
                                            <Col span={24}>
                                                <Link className={styles.drawer_nav_link} href="/educator/badges">
                                                    <Space>
                                                        <SafetyOutlined />
                                                        Badges
                                                    </Space>
                                                </Link>
                                            </Col>
                                            <Col span={24}>
                                                <Link className={styles.drawer_nav_link} href="/educator/profile">
                                                    <Space>
                                                        <UserOutlined />
                                                        Profile
                                                    </Space>
                                                </Link>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col span={24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }} onClick={() => { router.push("/educator/profile") }}>
                                        <a className={styles.drawer_nav_link_danger} >
                                            <Space>
                                                <UserOutlined />
                                                Sign Out
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
                                                <Link className={styles.navbar_section_items_section_1_item} href="/educator">Dashboard</Link>
                                            </Col>
                                            <Col >
                                                <Link className={styles.navbar_section_items_section_1_item} href="/educator/certificates">Certificates</Link>
                                            </Col>
                                            <Col >
                                                <Link className={styles.navbar_section_items_section_1_item} href="/educator/badges">Badges</Link>
                                            </Col>
                                            <Col >
                                                <Link className={styles.navbar_section_items_section_1_item} href="/educator/groups">groups</Link>
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
