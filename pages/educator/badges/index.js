import { getSession } from "next-auth/react";
import Script from "next/script";
import AllBadge from "../../../components/Credentials/allCredentials";

import BadgeModel from "../../../models/badge";
import Badge_Educator from "../../../models/badge_educator";
import Educator from "../../../models/educator";
import connectMongo from "../../../utils/connectMongo";


export default function Badges({ Badges }) {
  return (
    <div>
      <Script
        src="https://widget.Cloudinary.com/v2.0/global/all.js"
        type="text/javascript"
      />
      <AllBadge Certificates={Badges} path="badges" />
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

  console.log(session.user.email);

  try {
    await connectMongo();

    const { _id } = await Educator.findOne({ email: session.user.email });

    console.log(_id);

    const certArr = await Badge_Educator.find({ educatorID: _id });

    console.log(certArr);

    const badges = await certArr.map(async (badgeId) => {
      const badge = await BadgeModel.findById({
        _id: badgeId.badgeID,
      });
      return badge;
    });

    const badgesData = await Promise.all(badges).then((values) => {
      return values;
    });

    console.log(badgesData);

    return {
      props: {
        Badges: JSON.parse(JSON.stringify(badgesData)),
      },
    };
  } catch (error) {
    console.log(error);

    return {
      notFound: true,
    };
  }
};
