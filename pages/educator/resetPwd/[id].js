import ForgotPwdLayout from "../../../components/Layout/Auth/forgotPwdLayout";
import ResetPwdForm from "../../../components/Forms/resetPwd";
import { getSession } from "next-auth/react";
import Educator from "../../../models/educator";
import { Types } from "mongoose";
import connectMongo from "../../../utils/connectMongo";

export default function ResetPwd({ educatorData }) {
  return (
    <ForgotPwdLayout>
      <ResetPwdForm educatorData={educatorData} />
    </ForgotPwdLayout>
  );
}

export const getServerSideProps = async (context) => {
  const { id } = context.query;
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

    await connectMongo();

    const educator = await Educator.findById(id);

    return {
      props: {
        educatorData: JSON.parse(JSON.stringify(educator)),
      },
    };
  } catch (error) {
    console.log(error);

    return {
      notFound: true,
    };
  }
};
