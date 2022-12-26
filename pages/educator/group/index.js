import React from 'react';
import { getSession } from "next-auth/react";



import AllGroups from '../../../components/Group/all_groups';

import connectMongo from '../../../utils/connectMongo';
import GroupModel from '../../../models/group';
import Educator from "../../../models/educator";

export default function Groups({ groups }) {
    return (
        <div>
            <AllGroups groups={groups} />
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const session = await getSession({ req: context.req });

    if (!session) {
        return {
            redirect: {
                destination: "/educator_acc/login",
                permanent: false,
            },
        };
    }

    const { _id } = await Educator.findOne({ email: session.user.email });

    try {
        await connectMongo();

        const allGroups = await GroupModel.find({
            educatorID: _id
        });

        return { props: { groups: JSON.parse(JSON.stringify(allGroups)) } }

    } catch (error) {
        return {
            notFound: true,
        };
    }
};