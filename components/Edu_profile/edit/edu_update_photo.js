import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Button } from 'antd';
import React from 'react';
const { Meta } = Card;
import styles from '../../../styles/Edu.module.css';


export default function Edu_update_photo() {
    // const style = {
    //     padding: '8px 0',
    // };
    return (

        <div>
            <Card title="Update profile photo"
                style={{
                    width: 300,
                    textAlign:'center'
                    
                }}
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }
                actions={[
                    <Button type="primary">UPLOAD PHOTO</Button>,
                    <Button type="dashed" >CANCEL</Button>,
                    // <SettingOutlined key="setting" />,
                    // <EditOutlined key="edit" />,
                    // <EllipsisOutlined key="ellipsis" />,
                ]}
            >
                {/* <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title="Card title"
                    description="This is the description"
                /> */}
            </Card>



        </div>

    );

}
