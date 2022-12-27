import { Form, Select, message, Input, DatePicker, Row, Col, Button, Alert } from "antd"

import styles from './addCredential.module.css';
import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { Types } from "mongoose";
import Loader from '../Layout/loader';


import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";

export default function AddCertificate({ path, groupsArr }) {

    const router = useRouter();

    const { TextArea } = Input;  //for text area field

    //FORM Attributes
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [dateIssued, setDateIssued] = useState("");
    const [imageAddress, setImageAddress] = useState("");
    const [groupID, setGroupID] = useState('');

    const { data: session, status } = useSession();

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState('');

    const openWidget = () => {
        // create the widget
        const widget = window.cloudinary.createUploadWidget(
            {
                cloudName: "dhfvht9ju",
                uploadPreset: "ml_default",
            },
            (error, result) => {
                if (
                    result.event === "success" &&
                    result.info.resource_type === "image"
                ) {
                    console.log(result.info);
                    setImageAddress(result.info.public_id);
                }
            }
        );
        widget.open(); // open up the widget after creation
    };

    const createCertificate = async (event) => {


        if (path === "certificates") {
            setLoading(true);

            console.log("the blockchain stuff start from here");

            const accounts = await web3.eth.getAccounts();

            console.log("accounts");
            console.log(accounts);

            try {

                const dateTime = new Date().toLocaleString();

                await factory.methods.createCertificate(title, desc, dateTime).send({
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
                        dateIssued: dateTime,
                        address: certAddress[certAddress.length - 1],
                        educatorEmail: session.user.email,
                        groupID: groupID,
                    }),
                });

                const result = await res.json();

                if (!res.ok) {
                    throw new Error(result.message || 'Something went wrong!');
                }

                setLoading(false);
                router.push(`/educator/${path}`);

            } catch (err) {
                console.log(err);
                setError(err.message);
            }
        }

        if (path === "badges") {
            setLoading(true);

            console.log("the blockchain stuff start from here");

            const accounts = await web3.eth.getAccounts();

            console.log(accounts);

            try {

                const dateTime = new Date().toLocaleString();

                await factory.methods.createBadge(title, desc, dateTime).send({
                    from: accounts[0],
                });

                const badgeAddress = await factory.methods.getDeployedBadges().call();

                console.log(badgeAddress);

                const res = await fetch(`/api/educator/${path}/add`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        title: title,
                        desc: desc,
                        dateIssued: dateTime,
                        address: badgeAddress[badgeAddress.length - 1],
                        imageAddress: imageAddress,
                        educatorEmail: session.user.email,
                        groupID: groupID,
                    }),
                });

                const result = await res.json();

                if (!res.ok) {
                    throw new Error(result.message || 'Something went wrong!');
                }

                setLoading(false);
                router.push(`/educator/${path}`);

            } catch (err) {
                console.log(err);
                setError(err.message);
            }
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

    //group selector - start
    const handleChange = (value) => {
        setGroupID(value);
        console.log(groupID);
    };
    //group selector - end


    return (
        <>
            {loading
                ?
                <Loader />
                :
                <>
                    <div className={styles.add_cert_container}>
                        {error
                            ?
                            <div style={{ marginBottom: "15px" }}>
                                <Alert message={`Error: ${error}`} type="error" />
                            </div>
                            :
                            ''
                        }
                        <Form {...layout} name="control-ref" onSubmitCapture={createCertificate}>
                            <Row gutter={16}>
                                <Col span={path === 'certificates' ? 24 : 12}>
                                    <Form.Item
                                        name="title"
                                        label="Title"
                                    >
                                        <Input
                                            value={title}
                                            onChange={(event) => { setTitle(event.target.value) }}
                                            required
                                            minLength="1"
                                            maxLength="256"
                                        />
                                    </Form.Item>
                                </Col>
                                {path === 'certificates'
                                    ?
                                    ''
                                    :
                                    <Col span={isBreakpoint ? 24 : 12}>
                                        <Form.Item label="Badge Image">
                                            <Button onClick={openWidget} type="primary" style={{ width: "100%" }}>Upload</Button>
                                        </Form.Item>
                                    </Col>
                                }
                            </Row>
                            <Row gutter={16}>
                                <Col span={24}>
                                    <Form.Item label="Description">
                                        <TextArea
                                            rows={4}
                                            value={desc}
                                            onChange={(event) => { setDesc(event.target.value) }}
                                            required
                                            minLength="1"
                                            maxLength="1024"
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col span={24}>
                                    <Form.Item label="Group">
                                        <Select
                                            defaultValue="Select your group"
                                            style={{
                                                width: "100%",
                                            }}
                                            onChange={handleChange}
                                            options={groupsArr}
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
                </>
            }
        </>
    )
}