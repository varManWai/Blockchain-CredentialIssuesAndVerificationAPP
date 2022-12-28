import React from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import { Divider, Button, Space, Avatar, List, Row } from 'antd';
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
            {groups == undefined || groups.length == 0 ? (
                <Row
                    justify="center"
                    gutter={{
                        xs: 8,
                        sm: 16,
                        md: 24,
                        lg: 32,
                    }}
                    wrap
                >
                    <div>
                        <h2 >0 groups</h2>
                    </div>
                </Row>
            ) : (
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
            )}

        </div >


    )
}
