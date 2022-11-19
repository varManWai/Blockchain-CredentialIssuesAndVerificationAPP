import CertificateGrid from "./certificate_grid"

import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { useState, useCallback, useEffect } from "react";


import styles from '../../styles/Login.module.css';
import { useRouter } from "next/router";

export default function AllCertificate() {
  const {TextArea} = Input;


  const [open, setOpen] = useState(false);

  const { Option } = Select;

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const router = useRouter()

  const redirectToAddCert = () => {
    router.push('/educator/certificates/add');
  }

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

  const isBreakpoint = useMediaQuery(925)

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

  const tailLayout = {
    wrapperCol: {
      span: 24,
    },
  };

  return (
    <div className={styles.all_certificates_section}>


      <div className={styles.add_new_cert}>
        <Button icon={<PlusOutlined />} onClick={isBreakpoint ? (redirectToAddCert) : (showDrawer)} type="primary">New</Button>
      </div>
      <Drawer
        title="Create a new account"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
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
                <DatePicker showTime onChange={onChange} onOk={onOk} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={20}>
              <Form.Item label="Description">
                <TextArea rows={4} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={20}>
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
        </Form>
      </Drawer>
      <CertificateGrid />
    </div>
  )
}