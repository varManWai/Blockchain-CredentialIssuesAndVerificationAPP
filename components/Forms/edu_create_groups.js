
import React from 'react';
import { Col, Row, Button, Input, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';




export default function Edu_create_groups() {
    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };
    return (

        <div>
            <Row>
                <h1>Groups details</h1>
            </Row>
            <Row>
                <h4>Display name</h4>
                <Input placeholder="name" />
            </Row>
            <br />
            <Row>
                <h4>Description</h4>
                <Input placeholder="description" />
            </Row>
            <br />
            <Row>
                <h4>Related skill set</h4>
                <Input placeholder="skill set" />
            </Row>
            <br />
            <Row>
                <h4>Related category</h4>
                <Input placeholder="category" />
            </Row>
            <br />
            <br />
            <Row>
                <h1>Groups photo</h1>
            </Row>
            <Row>
                <Col span={6}>Badge</Col>
                <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Upload a badge</Button>
                </Upload>
            </Row>
            <br />
            <Row>
                <Col span={6}>Certificate</Col>
                <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Upload a certificate</Button>
                </Upload>

            </Row><br /><br />
            <Row>
                <Button type="primary">Primary Button</Button>
            </Row>





        </div>

    );

}
