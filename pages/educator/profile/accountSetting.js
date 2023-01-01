import Edu_account_settings from "../../../components/Edu_profile/account_settings_forms";

import { getSession } from "next-auth/react";
import Educator from "../../../models/educator";
import connectMongo from "../../../utils/connectMongo";

export default function updatePassword({ educatorDetails }) {
  return (
    <div>
      <Edu_account_settings educatorDetail={educatorDetails} />
    </div>

  );
}

export const getServerSideProps = async (context) => {

  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/educator/login",
        permanent: false,
      },
    };
  }
  try {

    await connectMongo();

    const educator = await Educator.findOne({ email: session.user.email });

    return { props: { educatorDetails: JSON.parse(JSON.stringify(educator)) } };

  } catch (error) {
    console.log(error); 

    return {
      notFound: true,
    };
  }
};
