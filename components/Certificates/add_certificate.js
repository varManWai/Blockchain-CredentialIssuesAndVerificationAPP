import { Form, Select, Input, DatePicker, Row, Col, Button } from "antd"

import styles from './addCert.module.css';
import { useState, useCallback, useEffect } from "react";

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


    const useMediaQuery = (width) => {
        const [targetReached, setTargetReached] = useState(false);

        const updateTarget = useCallback((e) => {
            if (e.matches) {
                setTargetReached(true);
            } else {
                setTargetReached(false);
            }
        }, []);

        useEffect(() => {
            const media = window.matchMedia(`(max-width: ${width}px)`);
            media.addEventListener("change", updateTarget);

            // Check on mount (callback is not called until a change occurs)
            if (media.matches) {
                setTargetReached(true);
            }

            return () => media.removeEventListener("change", updateTarget);
        }, []);

        return targetReached;
    };

    const isBreakpoint = useMediaQuery(584);

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

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [dataIssued, setDateIssued] = useState("");
    const [address, setAddress] = useState("");

    const createCertificate = async (event) => {
        event.preventDefault();

        const res = await fetch("/api/educator/certificate/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                date: "12/12/2022",
                title: title,
                desc: desc,
                dateIssued: dataIssued,
                address: address,
                student: Types.ObjectId("6394d3ddcef135c5f57771d2"),
            }),
        });
        const data = await res.json();
        console.log(data);

        router.reload();
    };

    return (
        <div className={styles.add_cert_container}>
            <Form {...layout} name="control-ref" onSubmitCapture={createCertificate}>
                <Row gutter={16}>
                    <Col span={isBreakpoint ? 24 : 12}>
                        <Form.Item
                            name="title"
                            label="Title"
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={isBreakpoint ? 24 : 12}>
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