import Group_Details from "../../../components/Forms/edu_group_details"

import connectMongo from '../../../utils/connectMongo';
import GroupModel from '../../../models/group';

export default function groupDetails({selectedGroup}) {
    return (
        <div>
            <Group_Details group={selectedGroup} />
        </div>
    )
}


export const getServerSideProps = async (context) => {

    const {id} = context.query;

    try {
        console.log("CONNECTING TO MONGO");
        await connectMongo();
        console.log("CONNECTED TO MONGO");

        console.log("FETCHING DOCUMENTS");
        const group = await GroupModel.findById(id);

        return { props: { selectedGroup: JSON.parse(JSON.stringify(group)) } }

    } catch (error) {

        return {
            notFound: true,
        };
    }
}