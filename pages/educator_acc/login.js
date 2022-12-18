import { Row, Space, Spin } from "antd";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Edu_Login_Form from "../../components/Forms/edu_login_form";
import Edu_Login_Layout from "../../components/Layout/educator/edu_login_layout";
import Loader from "../../components/Layout/loader";

export default function Login() {
  const router = useRouter();

  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   getSession().then((session) => {
  //     if (!session) {
  //       // router.replace("/educator_acc/login");
  //     } else {
  //       setIsLoading(false);
  //     }
  //   });
  // }, [router]);

  // if (isLoading) {
  //   return <Loader />
  // }

  return (
    <Edu_Login_Layout>
      <Edu_Login_Form />
    </Edu_Login_Layout>
  );
}
