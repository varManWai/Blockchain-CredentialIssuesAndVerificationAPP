import View_Badge from "../../../components/Credentials/viewCredential"

import BadgeModel from "../../../models/badge";
import connectMongo from '../../../utils/connectMongo';
import GroupModel from "../../../models/group";
import { getSession } from "next-auth/react";

export default function viewBadge ({BadgeData, GroupData}) {
    return (
        <div>
            <View_Badge Certificate={BadgeData} CredentialType="badge" GroupData={GroupData}/>
        </div>
    )
}

export const getServerSideProps = async (context) => {

    const { id } = context.query;

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
      console.log("CONNECTING TO MONGO");
      await connectMongo();
      console.log("CONNECTED TO MONGO");
  
      console.log("FETCHING DOCUMENTS");
      const Badge = await BadgeModel.findById(id);
      console.log("FETCHED DOCUMENTS");
  
      const Group = await GroupModel.findById(Badge.groupID);

      console.log(Group);
  
      return {
        props: {
            BadgeData: JSON.parse(JSON.stringify(Badge)),
            GroupData: JSON.parse(JSON.stringify(Group)),
        },
      };
    } catch (error) {
      console.log(error);
  
      return {
        notFound: true,
      };
    }
  }