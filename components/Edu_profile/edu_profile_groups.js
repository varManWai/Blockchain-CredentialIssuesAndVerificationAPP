import styles from '../../styles/Edu.module.css';
import React from 'react';
import { Col, Divider, Row } from 'antd';

import { Card } from 'antd';


export default function AllGroups() {

    const { Meta } = Card;
    return (
        <div >

            <h1 className={styles.groups_header}>GROUPS CREATED</h1>
            <div>
                <Row justify="space-around">
                    <Col span={4}><Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Group name here" description="group's description" />
                    </Card></Col>
                    <Col span={4}><Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Group name here" description="group's description" />
                    </Card></Col>
                    <Col span={4}><Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Group name here" description="group's description" />
                    </Card></Col>
                    <Col span={4}><Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Group name here" description="group's description" />
                    </Card></Col>
                </Row>

                






            </div>
        </div>
    )
}