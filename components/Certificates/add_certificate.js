import { Form, Input, DatePicker, Button } from "antd"

export default function AddCertificate() {

    const { TextArea } = Input;

    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };

    const tailLayout = {
        wrapperCol: {
            span: 16,
        },
    };

    const onChange = (value, dateString) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    };

    const onOk = (value) => {
        console.log('onOk: ', value);
    };



    return (
        <div>
            <h1>this is the add certificate.</h1>
            <Form {...layout} name="control-ref" >
                <Form.Item
                    name="note"
                    label="Note"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item label="TextArea">
                    <DatePicker showTime onChange={onChange} onOk={onOk} />
                </Form.Item>
                <Form.Item label="TextArea">
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}