import Link from 'next/link';

import { FileOutlined, TeamOutlined, UserOutlined, DesktopOutlined, PieChartOutlined } from '@ant-design/icons';
import { Button, Menu ,Layout } from 'antd';
import { useState } from 'react';
const {Sider} = Layout 

import styles from '../../styles/Login.module.css'

export default function Visitor() {
    return (
        <div>
            <h1>This is visitor nav bar</h1>
        </div>
    )
}

export function Student() {
    return (
        <div>
            <h1>this is student navigation bar</h1>
        </div>
    )
}

export function Educator() {

    const [collapsed, setCollapsed] = useState(false);

    const getItem = (label, key, icon, children) => {
        return {
            key,
            icon,
            children,
            label,
        };
    }

    const items = [
        getItem('Option 1', '1', <PieChartOutlined />),
        getItem('Option 2', '2', <DesktopOutlined />),
        getItem('User', 'sub1', <UserOutlined />, [
            getItem('Tom', '3'),
            getItem('Bill', '4'),
            getItem('Alex', '5'),
        ]),
        getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
        getItem('Files', '9', <FileOutlined />),
    ];

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} className={styles.edu_sider}>
            <div className="logo" />
            <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
    )
}