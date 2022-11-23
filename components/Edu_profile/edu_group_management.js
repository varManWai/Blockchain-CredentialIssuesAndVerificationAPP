import { Button, Checkbox, Form, Input, Col, Select, Option, AutoComplete, Divider, Row, Tooltip, Card } from "antd";
import { Image } from 'antd';
import styles from '../../styles/Edu.module.css';
const { Meta } = Card;
import { InfoCircleOutlined, UserOutlined, EditOutlined } from '@ant-design/icons';




export default function Edu_group_management() {

    // const style = {
    //     padding: '8px 0',
    // };

    return (
        <div >
            <Row
                gutter={{
                    xs: 8,
                    sm: 16,
                    md: 24,
                    lg: 32,
                }}
            >
                <Col className="gutter-row" span={9}>
                    {/* <div style={style}>col-6</div> */}
                    <p>Home &lt; <span>Groups</span></p>
                </Col>

                <EditOutlined />
            </Row>
            <Row>
                <Col span={18} push={6}>
                <Row justify="space-between">
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
                </Col>
                <Col span={6} pull={18}>
                    filter here
                </Col>
            </Row>
            





        </div>

    );
}
