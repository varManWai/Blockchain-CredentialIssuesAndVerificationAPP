import { Form, Select, message, Input, DatePicker, Row, Col, Button } from "antd"

import styles from './addCredential.module.css';
import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { Types } from "mongoose";
import Loader from '../Layout/loader';


import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";

export default function AddCertificate({ path }) {

    const router = useRouter();

    const { TextArea } = Input;  //for text area field

    //FORM Attributes
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [dateIssued, setDateIssued] = useState("");
    const [address, setAddress] = useState("");

    const { data: session, status } = useSession();

    const [loading, setLoading] = useState(false);
    // console.log(session.user.email);



    const createCertificate = async (event) => {

        setLoading(true);

        console.log("the blockchain stuff start from here");

        const accounts = await web3.eth.getAccounts();

        console.log(accounts);

        try {

            await factory.methods.createCertificate(title, desc, dateIssued).send({
                from: accounts[0],
            });

            const certAddress = await factory.methods.getDeployedCertificates().call();

            console.log(certAddress);

            const res = await fetch(`/api/educator/${path}/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: title,
                    desc: desc,
                    dateIssued: dateIssued,
                    address: certAddress[certAddress.length -1],
                    educatorEmail: session.user.email,
                }),
            });
            const data = await res.json();
            console.log(data);


            setLoading(false);
            router.push(`/educator/${path}`);

        } catch (err) {
            console.log(err);
        }
        setLoading(false);
    };

    //Layout for the form - start
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
    //Layout for the form - end


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

    const isBreakpoint = useMediaQuery(584);
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
    ];
    //sample data for the group selection field - end

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
        <>
            {loading
                ?
                <Loader />
                :
                <div className={styles.add_cert_container}>
                    <Form {...layout} name="control-ref" onSubmitCapture={createCertificate}>
                        <Row gutter={16}>
                            <Col span={isBreakpoint ? 24 : 12}>
                                <Form.Item
                                    name="title"
                                    label="Title"
                                >
                                    <Input value={title} onChange={(event) => { setTitle(event.target.value) }} />
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
                                    <TextArea rows={4} value={desc} onChange={(event) => { setDesc(event.target.value) }} />
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
            }


        </>

    )
}