import Edu_profile_form from "../../../components/Edu_profile/edu_profile_form"
import All_groups from "../../../components/Group/all_groups"


import connectMongo from '../../../utils/connectMongo';
import GroupModel from '../../../models/group';
import Educator from "../../../models/educator";

import {getSession} from 'next-auth/react';

export default function profile({groups, edu_details}) {
    return (
        <div>
            <Edu_profile_form details={edu_details} />
            <All_groups groups={groups}/>
        </div>
    )
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

        // get the selected educator
        const educator = await Educator.findOne({ email: session.user.email });

        // get the groups created by the selected educator
        const allGroups = await GroupModel.find({ educatorID: educator._id});

        return { props: { groups: JSON.parse(JSON.stringify(allGroups)),   edu_details: JSON.parse(JSON.stringify(educator))} }

    } catch (error) {
        return {
            notFound: true,
        };
    }
};