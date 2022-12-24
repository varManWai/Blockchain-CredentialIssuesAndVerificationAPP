import ForgotPwdLayout from "../../components/Layout/Auth/forgotPwdLayout";
import ForgotPwdForm from "../../components/Forms/forgotPwd";
import { getSession } from "next-auth/react";

export default function ForgotPwd() {
  return (
    <ForgotPwdLayout>
      <ForgotPwdForm />
    </ForgotPwdLayout>
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
