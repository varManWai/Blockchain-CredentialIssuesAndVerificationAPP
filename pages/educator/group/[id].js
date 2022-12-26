import Group_Details from "../../../components/Forms/edu_group_details"

import Group_recipient from '../../../../models/group_recipient';
import connectMongo from '../../../utils/connectMongo';
import GroupModel from '../../../models/group';

export default function groupDetails({ selectedGroup, groupReceivers }) {
    return (
        <div>
            <Group_Details group={selectedGroup} receivers={groupReceivers} />
        </div>
    )
}


export const getServerSideProps = async (context) => {

    const { id } = context.query;

    try {
        console.log("CONNECTING TO MONGO");
        await connectMongo();
        console.log("CONNECTED TO MONGO");

        console.log("FETCHING DOCUMENTS");
        const group = await GroupModel.findById(id);

        const receivers = await Group_recipient.find({ groupID: id });

        return { props: { selectedGroup: JSON.parse(JSON.stringify(group)), groupReceivers: JSON.parse(JSON.stringify(receivers)) } }

    } catch (error) {

        return {
            notFound: true,
        };
    }
}