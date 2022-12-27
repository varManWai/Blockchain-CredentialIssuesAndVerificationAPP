import { Typography, Button, Checkbox, Form, Input, Col, Select, Option, AutoComplete, Divider, Row, Tooltip } from "antd";

export default function Edu_profile_form({ details }) {

    const { Title } = Typography;

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
                    <p>Home &lt; <span>[Profile]</span></p>
                </Col>
            </Row>
            <Row
                gutter={{
                    xs: 8,
                    sm: 16,
                    md: 24,
                    lg: 32,
                }}
            >
                <Col className="gutter-row" span={12} >
                    {/* <div style={style}>col-6</div> */}
                    <Title> Welcome Back, {details.name}</Title>
                </Col>

            </Row>

            <Row
                gutter={{
                    xs: 8,
                    sm: 16,
                    md: 24,
                    lg: 32,
                }}
            >

                <Col className="gutter-row" span={6} style={{ margin: 50 }}>
                    <Title level={3}>Name:</Title>
                    <p><span>{details.name}</span></p>
                </Col>
                <Col className="gutter-row" span={6} style={{ margin: 50 }}>
                    <Title level={3}>Job Title:</Title>
                    <p><span>{details.jobTitle}</span></p>
                </Col>
                <Col className="gutter-row" span={6} style={{ margin: 50 }}>
                    <Title level={3}>Organization Name:</Title>
                    <p><span>{details.orgName}</span></p>
                </Col>

            </Row>





        </div>

    );
}
