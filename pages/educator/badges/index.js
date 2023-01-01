import { Types } from "mongoose";
import { getSession } from "next-auth/react";
import Script from "next/script";
import AllBadge from "../../../components/Credentials/allCredentials";

import BadgeModel from "../../../models/badge";
import Badge_Educator from "../../../models/badge_educator";
import Educator from "../../../models/educator";
import GroupModel from "../../../models/group";
import connectMongo from "../../../utils/connectMongo";

export default function Badges({ Badges, groupsArr }) {
  return (
    <div>
      <Script
        src="https://widget.Cloudinary.com/v2.0/global/all.js"
        type="text/javascript"
      />
      <AllBadge Certificates={Badges} path="badges" groupsArr={groupsArr} />
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

    // console.log(_id);

    const groups = await GroupModel.find({ educatorID: _id });
    // console.log("FETCHED DOCUMENTS");

    const groupsArr = [];
    const groupsSelection = await groups.map(async (group) => {
      groupsArr.push({
        value: group._id,
        label: group.groupName,
      });
    });

    // console.log("groupsSelection");

    // console.log(groupsArr);

    const badgeArr = await Badge_Educator.find({ educatorID: _id });


    //start
    const temp1Badge = await BadgeModel.find().distinct("address");

    const temp1 = new Map();

    const badges = await badgeArr.map(async (certID) => {
      const badge = await BadgeModel.findById({
        _id: certID.badgeID,
      });

      if (!temp1.get(badge.address)) {
        // console.log("running");
        temp1.set(badge.address, badge._id);
      }

      return badge;
    });

    const badgeData = await Promise.all(badges).then((values) => {
      return values;
    });

    const finalCrendentials = [];

    await temp1.forEach(async (value, key) => {
      // console.log(key);
      let objectKey = Types.ObjectId(value);
      const cert = await BadgeModel.findById(objectKey);

      finalCrendentials.push(cert);
    });

    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      props: {
        Badges: JSON.parse(JSON.stringify(finalCrendentials)),
        groupsArr: JSON.parse(JSON.stringify(groupsArr)),
      },
    };
  } catch (error) {
    console.log(error);

    return {
      notFound: true,
    };
  }
};
