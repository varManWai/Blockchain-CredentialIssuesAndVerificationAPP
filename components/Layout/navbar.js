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
import { useSession, signOut, getSession } from "next-auth/react";




export default function Educator() {
    const router = useRouter();

    const { data: session, status } = useSession()


    useEffect(() => {
        getSession().then((session) => {
            if (!session) {
                router.replace("/educator/login");
            }
        });
    }, [router]);

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

    const logoutHandler = () => {
        signOut();
    }

    const items = [
        {
            label: <Link href="/educator/profile">Profile</Link>,
            key: '0',
        },

        {
            type: 'divider',
        },
        {
            label: <a onClick={logoutHandler}>Logout</a>,
            key: '1',
        },
    ];


    const [isLogin, setIsLogin] = useState(true);

    useEffect(() => {
        if (status === "authenticated") {
            setIsLogin(false);
        } else {
            setIsLogin(true);
        }
    }, [status]);

    return (
        <div>
            {
                isLogin
                    ?
                    ''
                    :
                    <div>
                        {isBreakpoint ? (
                            <nav>
                                <Row
                                    className={styles.navbar_section_student}
                                    justify="space-between"
                                    align="middle"
                                >
                                    <Col className={styles.navbar_section_items} span={4}>
                                        <img
                                            src="/images/logo.svg"
                                            alt="this is our logo"
                                            className={styles.navbar_section_items_1_image}
                                        />
                                    </Col>
                                    <Col className={styles.navbar_section_items}>
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
                                            <Row
                                                justify="center"
                                                align="middle"
                                                style={{ minHeight: "100%" }}
                                            >
                                                <Col>
                                                    <Row justify="center" align="middle">
                                                        <Col span={24}>
                                                            <Link
                                                                className={styles.drawer_nav_link}
                                                                href="/educator/certificates"
                                                            >
                                                                <Space>
                                                                    <BookOutlined />
                                                                    Certificates
                                                                </Space>
                                                            </Link>
                                                        </Col>
                                                    </Row>
                                                    <Row justify="center" align="middle">
                                                        <Col span={24}>
                                                            <Link
                                                                className={styles.drawer_nav_link}
                                                                href="/educator/badges"
                                                            >
                                                                <Space>
                                                                    <BookOutlined />
                                                                    Badges
                                                                </Space>
                                                            </Link>
                                                        </Col>
                                                    </Row>
                                                    <Row justify="center" align="middle">
                                                        <Col span={24}>
                                                            <Link
                                                                className={styles.drawer_nav_link}
                                                                href="/educator/group"
                                                            >
                                                                <Space>
                                                                    <BookOutlined />
                                                                    Group
                                                                </Space>
                                                            </Link>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col
                                                    span={24}
                                                    style={{
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "flex-end",
                                                    }}
                                                    onClick={() => {
                                                        router.push("/educator/profile");
                                                    }}
                                                >
                                                    <a className={styles.drawer_nav_link_danger}>
                                                        <Space>
                                                            <UserOutlined />
                                                            <a onClick={logoutHandler}>Logout</a>
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
                                <Row
                                    className={styles.navbar_section_student}
                                    justify="space-between"
                                    align="middle"
                                >
                                    <Col className={styles.navbar_section_items} span={5}>
                                        <img
                                            src="/images/logo.svg"
                                            alt="this is our logo"
                                            className={styles.navbar_section_items_1_image}
                                        />
                                    </Col>
                                    <Col className={styles.navbar_section_items} span={19}>
                                        <Row
                                            className={styles.navbar_section_items_section}
                                            justify="space-between"
                                            align="middle"
                                        >
                                            <Col span={20} >
                                                <Row>
                                                    <Space size="large">
                                                        <Col>
                                                            <Link
                                                                className={
                                                                    styles.navbar_section_items_section_1_item_student
                                                                }
                                                                href="/educator/certificates"
                                                            >
                                                                Certificates
                                                            </Link>
                                                        </Col>
                                                        <Col>
                                                            <Link
                                                                className={
                                                                    styles.navbar_section_items_section_1_item_student
                                                                }
                                                                href="/educator/badges"
                                                            >
                                                                Badges
                                                            </Link>
                                                        </Col>
                                                        <Col>
                                                            <Link
                                                                className={
                                                                    styles.navbar_section_items_section_1_item_student
                                                                }
                                                                href="/educator/group"
                                                            >
                                                                Group
                                                            </Link>
                                                        </Col>
                                                    </Space>
                                                </Row>
                                            </Col>
                                            <Col
                                                className={styles.navbar_section_items_section_2}
                                                span={4}
                                            >
                                                <Dropdown
                                                    placement="bottom"
                                                    arrow={{
                                                        pointAtCenter: true,
                                                    }}
                                                    menu={{
                                                        items,
                                                    }}
                                                    trigger={["click"]}
                                                    className={styles.navbar_section_items_section_2_dropdown}
                                                >
                                                    <button
                                                        className={
                                                            styles.navbar_section_items_section_2_button_student
                                                        }
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            src="/images/resetPwd.jpg"
                                                            alt="personal image"
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
            }

        </div>
    );
}
