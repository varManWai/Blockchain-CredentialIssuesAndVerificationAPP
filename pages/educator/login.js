import { Row, Space, Spin } from "antd";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoginForm from "../../components/Forms/login";
import LoginLayout from "../../components/Layout/Auth/loginLayout";
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
    <LoginLayout>
      <LoginForm />
    </LoginLayout>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  try {
    if (session) {
      return {
        redirect: {
          destination: "/educator/certificates",
          permanent: false,
        },
      };
    }

    return {
      props: {
        Certificates: "123",
      },
    };
  } catch (error) {
    console.log(error);

    return {
      notFound: true,
    };
  }
};
