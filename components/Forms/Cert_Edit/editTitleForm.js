import { Form, Input, Button, Alert, Row, Col } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import web3 from "../../../ethereum/web3";
import Loader from "../../Layout/loader";
import Badge from "../../../ethereum/badge";
import Certificate from "../../../ethereum/certificate";
import styles from "./editTitleForm.module.css";
import { LeftOutlined } from "@ant-design/icons";

export default function EditTitle({ credential, type }) {
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
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const updateTitle = async (event) => {
    if (type == "certificate") {
      try {
        setIsLoading(true);

        const accounts = await web3.eth.getAccounts();

        // console.log(accounts);

        const certificateEth = Certificate(credential.address);

        await certificateEth.methods.setTitle(title).send({
          from: accounts[0],
        });

        const res = await fetch(`/api/${type}s/updateTitle`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            certificate: credential,
            title: title,
          }),
        });

        const result = await res.json();

        if (!res.ok) {
          throw new Error(result.message || "Something went wrong!");
        }

        router.push(`/educator/${type}s/edit/editTitle/${credential._id}`);
      } catch (err) {
        // console.log(err);
        setError(err.message);
      }
    }

    if (type == "badge") {
      try {
        setIsLoading(true);

        const accounts = await web3.eth.getAccounts();

        // console.log(accounts);

        const badgeEth = Badge(credential.address);

        await badgeEth.methods.setTitle(title).send({
          from: accounts[0],
        });

        const res = await fetch(`/api/${type}s/updateTitle`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            badge: credential,
            title: title,
          }),
        });

        const result = await res.json();

        if (!res.ok) {
          throw new Error(result.message || "Something went wrong!");
        }

        router.push(`/educator/${type}s/edit/editTitle/${credential._id}`);
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
            <h1>Edit Title</h1>
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
              onSubmitCapture={updateTitle}
            >
              <Form.Item label="Old title">
                <Input
                  placeholder="your current title"
                  disabled
                  value={credential.title}
                />
              </Form.Item>
              <Form.Item label="New title">
                <Input
                  placeholder="Your new title"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  required
                  minLength="1"
                  maxLength="100"
                />
              </Form.Item>
              <Form.Item {...tailLayout} className={styles.button_align}>
                <Button
                  htmlType="submit"
                  type="primary"
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
