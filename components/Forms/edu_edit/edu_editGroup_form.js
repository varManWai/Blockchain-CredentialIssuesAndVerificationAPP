import { Form, Button, Select , Input} from 'antd';

import styles from '../../../styles/Login.module.css';

export default function EditGroup() {

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
            <h1>Edit Group</h1>
            <Form
                {...layout}
                name="educator_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
            >
                <Form.Item label="Old group">
                    <Input placeholder="your cuurrent group" disabled value="example group 1" />
                </Form.Item>
                <Form.Item label="New group">
                    <Select>
                        <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item {...tailLayout} className={styles.addCert_button_container}>
                    <Button type="primary">Submit</Button>
                </Form.Item>
            </Form>
        </div>
    )
}