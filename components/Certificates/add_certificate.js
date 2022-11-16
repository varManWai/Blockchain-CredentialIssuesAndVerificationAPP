import { Form, Select, Input, DatePicker, Button } from "antd"

import styles from '../../styles/Login.module.css';

export default function AddCertificate() {

    const { TextArea } = Input;

    const layout = {
        labelCol: {
            span: 4,
        },
        wrapperCol: {
            span: 20,
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
        <div>
            <Form {...layout} name="control-ref" >
                <Form.Item
                    name="title"
                    label="Title"
                >
                    <Input />
                </Form.Item>
                <Form.Item label="Date and Time release">
                    <DatePicker showTime onChange={onChange} onOk={onOk} />
                </Form.Item>
                <Form.Item label="Description">
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item label="Group">
                    <Select
                        defaultValue="lucy"
                        style={{
                            width: 120,
                        }}
                        onChange={handleChange}
                        options={selectContent}
                    />
                </Form.Item>
                <Form.Item {...tailLayout} className={styles.addCert_button_container}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}