export default function EditTitle() {
  const [form] = Form.useForm();

  return (
    <div>
      <h1>this is edit title page</h1>
      <Form
        name="educator_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item label="Title">
          <Input placeholder="your current title"/>
        </Form.Item>
        <Form.Item label="New Title">
          <Input placeholder="Your new title" />
        </Form.Item>
        <Form.Item >
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
}
