import Group_Details from "../../../components/Forms/edu_group_details"

import connectMongo from '../../../utils/connectMongo';

import Recipients from '../../../models/recipient';
import Group_recipient from '../../../models/group_recipient';
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
        // get the selected group 
        const group = await GroupModel.findById(id);
        console.log("FETCHING DOCUMENTS");
        // look for the recipients of the group and return an array
        const receivers = await Group_recipient.find({ groupID: id });
        console.log("FETCHING DOCUMENTS");
        console.log(receivers);

        // look for the actual recipients details based on the array 
        const recipients = await Promise.all(receivers.map(async (item) => {

            const eachRecipient = await Recipients.findById(
                item.recipientID
            );
            return eachRecipient;

        }));

        console.log(recipients);

        console.log("FETCHING DOCUMENTS");
        return { props: { selectedGroup: JSON.parse(JSON.stringify(group)), groupReceivers: JSON.parse(JSON.stringify(recipients)) } }

    } catch (error) {

        return {
            notFound: true,
        };
    }
}