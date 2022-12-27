import Group_Details from "../../../components/Forms/edu_group_details";

import Group_recipient from "../../../models/group_recipient";
import connectMongo from "../../../utils/connectMongo";
import GroupModel from "../../../models/group";
import Recipient from "../../../models/recipient";
import { getSession } from "next-auth/react";

export default function groupDetails({ selectedGroup, groupReceivers }) {
  return (
    <div>
      <Group_Details group={selectedGroup} receivers={groupReceivers} />
    </div>
  );
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
    const group = await GroupModel.findById(id);

    console.log(group._id);

    const receivers = await Group_recipient.find({ groupID: group._id });

    console.log("here is the result 1");
    console.log(receivers);

    const recipients = await receivers.map(async (receiver) => {
      return await Recipient.findById(receiver.recipientID);
    });

    const recipientsData = await Promise.all(recipients).then((values) => {
      return values;
    });

    return {
      props: {
        selectedGroup: JSON.parse(JSON.stringify(group)),
        groupReceivers: JSON.parse(JSON.stringify(recipientsData)),
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
