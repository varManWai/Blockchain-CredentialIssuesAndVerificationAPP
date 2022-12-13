import CertificateGrid from "./certificate_grid"

import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { useState, useCallback, useEffect } from "react";



import styles from '../../styles/Login.module.css';
import { useRouter } from "next/router";


export default function AllCertificate({ Certificates, path }) {

  const router = useRouter();

  const { TextArea } = Input;  // for text area field
  const [open, setOpen] = useState(false);  //for drawer

  const onClose = () => {
    setOpen(false);
  }

  //FORM Attributes
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [dataIssued, setDateIssued] = useState("");

  const createCertificate = async (event) => {
    event.preventDefault();


    const res = await fetch(`/api/educator/${path}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        desc: desc,
        dateIssued: dataIssued,
        address: "address got from the smart contract",
      }),
    });
    const data = await res.json();
    // console.log(data);

    router.reload();
  };

  //code for responsive - start
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

  const isBreakpoint = useMediaQuery(925);
  //code for responsive - end


  //sample data for the group selection field - start
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
  //sample data for the group selection field - end

  const tailLayout = {
    wrapperCol: {
      span: 24,
    },
  };


  //date selector - start 
  const onChange = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
    setDateIssued(dateString);
  };

  const onOk = (value) => {
    console.log('onOk: ', value);
  };
  //date selector - end


  //group selector - start
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  //group selector - end

  return (
    <div className={styles.all_certificates_section}>
      <div className={styles.add_new_cert}>
        <Button icon={<PlusOutlined />} onClick={isBreakpoint ? (() => { router.push(`/educator/${path}/add`); }) : (() => { setOpen(true) })} type="primary">New</Button>
      </div>
      <Drawer
        title={`Create a new ${path}`}
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={createCertificate} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" requiredMark onSubmitCapture={createCertificate}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="title"
                label="Title"
              >
                <Input value={title} onChange={(event) => { setTitle(event.target.value) }} />
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
                <TextArea rows={4} value={desc} onChange={(event) => { setDesc(event.target.value) }} />
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
      <CertificateGrid items={Certificates} specDeletePath={path} />
    </div>
  )
}

