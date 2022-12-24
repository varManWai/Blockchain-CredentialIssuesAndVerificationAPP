import { getSession } from "next-auth/react";
import SignUpForm from "../../components/Forms/signup";
import SignUpLayout from "../../components/Layout/Auth/signupLayout";

export default function SignUp() {
  return (
    <SignUpLayout>
      <SignUpForm />
    </SignUpLayout>
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
