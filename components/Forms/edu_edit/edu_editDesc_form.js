import { Form, Button, Select, Input } from 'antd';

import styles from '../../../styles/Login.module.css';

export default function EditDescription() {

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

    return (
        <div>
            <h1>Edit Description</h1>
            <Form
                {...layout}
                name="educator_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
            >
                <Form.Item label="Old description">
                    <TextArea rows={4} disabled value="example description for the  certicate, this is just the example ok!" />
                </Form.Item>
                <Form.Item label="New description">
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item {...tailLayout} className={styles.addCert_button_container}>
                    <Button type="primary">Submit</Button>
                </Form.Item>
            </Form>
        </div>
    )
}