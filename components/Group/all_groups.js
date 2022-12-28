import React from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import { Divider, Button, Space, Avatar, List } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styles from "../Credentials/allCredentials.module.css";

// work with hardcode list of items
export default function All_groups({ groups }) {
    const router = useRouter();
    return (
        <div>
            <div className={styles.add_new_cert}>
                <Button style={{
                    marginRight: "2.5vw",
                }}
                    icon={< PlusOutlined />} type="primary" onClick={() => router.push('/educator/group/create')} > New
                </Button >
            </div>

            <List
                itemLayout="horizontal"
                dataSource={groups}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            title={<Link href={`/educator/group/${encodeURIComponent(item._id)}`}>{item.groupName}</Link>}
                            description={item.desc}
                        />
                    </List.Item>
                )}
            />
        </div >


    )
}
