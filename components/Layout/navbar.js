import Link from 'next/link';

import Image from 'next/image';

import { BookOutlined, TeamOutlined, CheckCircleOutlined, UserOutlined, DownOutlined, AppstoreOutlined, PieChartOutlined } from '@ant-design/icons';
import { Button, Menu, Layout, Space, Dropdown, Row, Col } from 'antd';
import { useState, useCallback, useEffect } from 'react';

const { Header, Sider } = Layout

import styles from '../../styles/Login.module.css'
import { useRouter } from 'next/router';

export default function Visitor() {
    return (
        <div>
            <Header>
                <div className="logo" />
                <Menu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
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
    )
}

export function Student() {
    const items = [
        {
            label: <a href="https://www.antgroup.com">1st menu item</a>,
            key: '0',
        },
        {
            label: <a href="https://www.aliyun.com">2nd menu item</a>,
            key: '1',
        },
        {
            type: 'divider',
        },
        {
            label: '3rd menu item',
            key: '3',
        },
    ];

    return (
        <div>
            <Header>
                <div className="logo" />
                <Menu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
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
                    trigger={['click']}
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
    )
}

export function Educator() {

    const [collapsed, setCollapsed] = useState(false);

    const router = useRouter();

    const getItem = (label, key, icon, children, type, danger) => {
        return {
            key,
            icon,
            children,
            label,
            type,
            danger,
        };
    }

    const items = [
        getItem('Dashboard', '/educator', <AppstoreOutlined />),
        getItem('Certificate', 'certificates', <BookOutlined />, [
            getItem('All', '/educator/certificates'),
            getItem('Add', '/educator/certificates/add'),
        ], "group"),
        getItem('Badge', 'badges', <CheckCircleOutlined />, [
            getItem('All', '/educator/badges'),
            getItem('Add', '/educator/badges/add'),
        ], "divider"),
        getItem('Profile', '/educator/profile', <UserOutlined />),
        getItem('Sign Out', '', <UserOutlined />, "", "", true)
    ];

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

    const isBreakpoint = useMediaQuery(584)

    const currentPath = router.pathname;

    return (
        <div>
            {isBreakpoint ? (
                <div>
                    <h1>small nav</h1>
                </div>
            ) : (
                <Row justify="center" align="center">
                    <Col span={2}>Logo</Col>
                    <Col span={20}>
                        <Row justify="space-between" align="center">
                            <Col span={20}>
                                <Row align="center">
                                    <Col span={2}>Nav1</Col>
                                    <Col span={2}>Nav1</Col>
                                    <Col span={2}>Nav1</Col>
                                    <Col span={2}>Nav1</Col>
                                </Row>
                            </Col>
                            <Col span={4}>Profile</Col>
                        </Row>
                    </Col>
                </Row>

            )}
        </div>


    )
}