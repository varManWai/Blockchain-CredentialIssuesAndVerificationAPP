import React from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import { Divider,Button, Space, Avatar, List } from 'antd';
import { PlusOutlined } from '@ant-design/icons';


// work with hardcode list of items
export default function All_groups({ groups }) {
    const router = useRouter();
    return (
        <div>
            <Button icon={<PlusOutlined />}type="primary" onClick={() => router.push('/educator/group/create')} >New</Button>
            <Divider orientation="left" orientationMargin="0">
                Your group
            </Divider>
            <List
                itemLayout="horizontal"
                dataSource={groups}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                            title={<Link href={`/educator/group/${encodeURIComponent(item._id)}`}>{item.groupName}</Link>}
                            description={item.desc}
                        />
                    </List.Item>
                )}
            />
        </div>


    )
}
