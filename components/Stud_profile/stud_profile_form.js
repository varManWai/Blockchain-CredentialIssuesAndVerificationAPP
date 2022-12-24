import { Typography, Button, Checkbox, Form, Input, Col, Select, Option, AutoComplete, Divider, Row, Tooltip } from "antd";


export default function Stud_profile_form({ details }) {

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


            {/* <Divider orientation="left">Your credentials</Divider> */}
            <Divider orientation="left" orientationMargin="0">
                Your credentials
            </Divider>
            <p>Put Man Wai's display credential design here</p>
        </div>


    );
}
