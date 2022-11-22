import { Form, Select, Input, DatePicker, Row, Col, Button } from "antd"

import styles from './addCert.module.css';

export default function AddCertificate() {

    const { TextArea } = Input;

    const layout = {
        labelCol: {
            span: 24,
        },
        wrapperCol: {
            span: 24,
        },
    };


    const tailLayout = {
        wrapperCol: {
            span: 24,
        },
    };

    const onChange = (value, dateString) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    };

    const onOk = (value) => {
        console.log('onOk: ', value);
    };


    const selectContent = [
        {
            value: 'jack',
            label: 'Jack',
        },
        {
            value: 'lucy',
            label: 'Lucy',
        },
        {
            value: 'disabled',
            disabled: true,
            label: 'Disabled',
        },
        {
            value: 'Yiminghe',
            label: 'yiminghe',
        },
    ]

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    return (
        <div className={styles.add_cert_container}>
            <Form {...layout} name="control-ref" >
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="title"
                            label="Title"
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Date and Time release">
                            <DatePicker
                                showTime
                                onChange={onChange}
                                onOk={onOk}
                                style={{
                                    width: "100%",
                                }} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item label="Description">
                            <TextArea rows={4} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item label="Group">
                            <Select
                                defaultValue="lucy"
                                style={{
                                    width: "100%",
                                }}
                                onChange={handleChange}
                                options={selectContent}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item {...tailLayout} className={styles.addCert_button_container}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}