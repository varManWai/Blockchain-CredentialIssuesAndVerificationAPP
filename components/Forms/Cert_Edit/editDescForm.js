import { Form, Button, Select, Input, Alert, Row, Col } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import Loader from "../../Layout/loader";
import Badge from "../../../ethereum/badge";
import Certificate from "../../../ethereum/certificate";
import styles from "./editDescForm.module.css";
import web3 from "../../../ethereum/web3";
import { LeftOutlined } from "@ant-design/icons";

export default function EditDescription({ credential, type }) {
  const { TextArea } = Input;
  const router = useRouter();

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

  const [isLoading, setIsLoading] = useState(false);
  const [desc, setDesc] = useState("");
  const [error, setError] = useState("");

  const updateDesc = async (event) => {
    if (type == "certificate") {
      setIsLoading(true);
      try {
        const accounts = await web3.eth.getAccounts();

        // console.log(accounts);

        const certificateEth = Certificate(credential.address);

        await certificateEth.methods.setDescription(desc).send({
          from: accounts[0],
        });

        const res = await fetch(`/api/${type}s/updateDesc`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            certificate: credential,
            desc: desc,
          }),
        });

        const result = await res.json();

        if (!res.ok) {
          throw new Error(result.message || "Something went wrong!");
        }

        router.push(`/educator/${type}s/edit/editDesc/${credential._id}`);
      } catch (err) {
        // console.log(err);
        setError(err.message);
      }
    }

    if (type == "badge") {
      setIsLoading(true);
      try {
        const accounts = await web3.eth.getAccounts();

        // console.log(accounts);

        const badgeEth = Badge(credential.address);

        await badgeEth.methods.setDescription(desc).send({
          from: accounts[0],
        });

        const res = await fetch(`/api/${type}s/updateDesc`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            badge: credential,
            desc: desc,
          }),
        });

        const result = await res.json();

        if (!res.ok) {
          throw new Error(result.message || "Something went wrong!");
        }

        router.push(`/educator/${type}s/edit/editDesc/${credential._id}`);
      } catch (err) {
        // console.log(err);
        setError(err.message);
      }
    }

    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div>
            <Row
              style={{ marginBottom: "20px" }}
              className={styles.view_cert_container}
            >
              <Col>
                <Button
                  onClick={() => router.back()}
                  icon={<LeftOutlined width="150px" height="150px" />}
                  type="text"
                ></Button>
              </Col>
            </Row>
            <h1>Edit Description</h1>
            {error ? (
              <div style={{ marginBottom: "15px" }}>
                <Alert message={`Error: ${error}`} type="error" />
              </div>
            ) : (
              ""
            )}
            <Form
              {...layout}
              name="educator_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onSubmitCapture={updateDesc}
            >
              <Form.Item label="Old description">
                <TextArea rows={4} disabled value={credential.desc} />
              </Form.Item>
              <Form.Item label="New description">
                <TextArea
                  rows={4}
                  value={desc}
                  onChange={(event) => {
                    setDesc(event.target.value);
                  }}
                  required
                  minLength="1"
                  maxLength="1000"
                />
              </Form.Item>
              <Form.Item {...tailLayout} className={styles.button_align}>
                <Button
                  type="primary"
                  htmlType="submit"
                  className={styles.button}
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </>
      )}
    </>
  );
}
